"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const database_1 = __importDefault(require("../database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula, nombre, apellido, id_cargo, correo, password, roles } = req.body;
            yield bcryptjs_1.default.hash(password, 10, function (err, hash) {
                return __awaiter(this, void 0, void 0, function* () {
                    const savedUser = {
                        cedula: cedula,
                        nombre: nombre,
                        apellido: apellido,
                        id_cargo: id_cargo,
                        correo: correo,
                        password: hash
                    };
                    yield database_1.default.query('INSERT INTO empleados set ?', [savedUser], function (err, result, fields) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (err)
                                throw err;
                            if (roles) {
                                roles.forEach((rol) => __awaiter(this, void 0, void 0, function* () {
                                    yield database_1.default.query('INSERT INTO empleados_roles set id_empleado = ?, id_rol = ?', [cedula, rol], function (err, result, fields) {
                                        return __awaiter(this, void 0, void 0, function* () {
                                            if (err)
                                                throw err;
                                        });
                                    });
                                }));
                            }
                        });
                    });
                });
            });
            const token = jsonwebtoken_1.default.sign({ id: cedula }, 'secreto', {
                expiresIn: 86400
            });
            res.status(200).json({ token });
        });
    }
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query(`SELECT cedula, password, GROUP_CONCAT(id_rol SEPARATOR ',') AS roles
                    FROM empleados
                    LEFT JOIN empleados_roles
                    ON empleados.cedula = empleados_roles.id_empleado
                    WHERE cedula = ?`, [req.body.cedula], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err)
                        throw err;
                    let match, token;
                    if (result.length > 0) {
                        if (yield bcryptjs_1.default.compare(req.body.password, result[0].password)) {
                            let expiracionSeg = 28800;
                            if (result[0].roles) {
                                result[0].roles = result[0].roles.split(',');
                                for (let i = 0; i < result[0].roles.length; i++) {
                                    result[0].roles[i] = parseInt(result[0].roles[i]);
                                }
                            }
                            token = jsonwebtoken_1.default.sign({ id: result[0].cedula }, 'secreto', { expiresIn: expiracionSeg });
                            res.json({ token: token, cedula: result[0].cedula, expiresIn: expiracionSeg, roles: result[0].roles });
                        }
                        else {
                            return res.status(401).json({ token: null, message: "Contraseña invalida" });
                        }
                        // match = await bcrypt.compare(req.body.password, result[0].password)
                        // if(match == false) return res.status(401).json({token: null, message: "Contraseña invalida"});
                        // else if(match == true) {
                        //     let expiracionSeg = 28800;
                        //     token = jwt.sign({id: result[0].cedula}, 'secreto', {expiresIn: expiracionSeg})
                        //     res.json({token: token, cedula: result[0].cedula, expiresIn: expiracionSeg});
                        // }
                    }
                    else if (result.length == 0) {
                        res.status(400).json({ message: "Usuario no encontrado" });
                    }
                });
            });
        });
    }
    changePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula, password } = req.body;
            const token = req.headers["x-access-token"];
            try {
                const decoded = jsonwebtoken_1.default.verify(token, 'secreto');
                if (decoded.id == cedula) {
                    yield bcryptjs_1.default.hash(password, 10, function (err, newHash) {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield database_1.default.query('UPDATE empleados SET password = ? WHERE cedula = ?', [newHash, cedula], function (err, result, fields) {
                                return __awaiter(this, void 0, void 0, function* () {
                                    if (err)
                                        throw err;
                                    res.json({ message: 'Successful' });
                                });
                            });
                        });
                    });
                }
                else {
                    return res.status(401).json({ message: 'Sin autorización' });
                }
            }
            catch (error) {
                return res.status(401).json({ message: 'Sin autorización' });
            }
        });
    }
}
exports.authController = new AuthController();
