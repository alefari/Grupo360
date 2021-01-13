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
exports.empleadosController = void 0;
const database_1 = __importDefault(require("../database"));
class EmpleadosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`
        SELECT cedula, 
            empleados.nombre, 
            apellido, 
            cargos.nombre AS cargo, 
            correo, 
            empleados_roles.id_rol AS roles
        FROM grupocdv360.empleados
        LEFT JOIN grupocdv360.cargos
        ON empleados.id_cargo = cargos.id_cargo
        LEFT JOIN grupocdv360.empleados_roles
        ON empleados.cedula = empleados_roles.id_empleado
        ORDER BY empleados.nombre;`, function (err, result, fields) {
                if (err)
                    throw err;
                let uniqueUsers = [];
                let existia = false;
                result.forEach((user) => {
                    uniqueUsers.forEach(u => {
                        if (user.cedula == u.cedula) {
                            uniqueUsers.find(u => u.cedula == user.cedula).roles.push(user.roles);
                            existia = true;
                        }
                    });
                    if (!existia)
                        uniqueUsers.push(Object.assign(Object.assign({}, user), { roles: [user.roles] }));
                    existia = false;
                });
                res.json(uniqueUsers);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query(`SELECT 
                            empleados.nombre, 
                            apellido, 
                            correo,
                            cargos.nombre AS cargo
                            FROM empleados
                            LEFT JOIN cargos
                            ON empleados.id_cargo = cargos.id_cargo
                            WHERE cedula = ?`, [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
exports.empleadosController = new EmpleadosController();
