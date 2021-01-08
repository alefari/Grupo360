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
                    yield database_1.default.query('INSERT INTO empleados set ?', [savedUser]);
                });
            });
            // if(roles) {
            //     roles.forEach(rol => {
            //         console.log(rol);
            //         // await pool.query('INSERT INTO empleados_roles set', [{id_empleado: cedula, id_rol: rol}]);
            //     });
            // }
            const token = jsonwebtoken_1.default.sign({ id: cedula }, 'secreto', {
                expiresIn: 86400
            });
            res.status(200).json({ token });
        });
    }
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * FROM empleados WHERE cedula = ?', [req.body.cedula], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err)
                        throw err;
                    let match, token;
                    if (result.length > 0) {
                        match = yield bcryptjs_1.default.compare(req.body.password, result[0].password);
                        if (match == false)
                            return res.status(401).json({ token: null, message: "Contraseña invalida" });
                        else if (match == true) {
                            let expiracionSeg = 28800;
                            token = jsonwebtoken_1.default.sign({ id: result[0].cedula }, 'secreto', {
                                expiresIn: expiracionSeg
                            });
                            res.json({ token: token, cedula: result[0].cedula, expiresIn: expiracionSeg });
                        }
                    }
                    else if (result.length == 0) {
                        res.status(400).json({ message: "Usuario no encontrado" });
                    }
                });
            });
        });
    }
}
exports.authController = new AuthController();
