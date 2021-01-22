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
exports.isInventarioBasic = exports.isAdmin = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../database"));
const idAdmin = 1;
const idInventarioBasic = 1;
const idInventarioFull = 1;
exports.verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers["x-access-token"];
        if (!token)
            return res.status(403).json({ message: "Sin token" });
        const decoded = jsonwebtoken_1.default.verify(token, 'secreto');
        req.userId = decoded.id;
        const usuario = yield database_1.default.query('SELECT * FROM empleados WHERE cedula = ?', [decoded.id], function (err, result, fields) {
            if (err)
                throw err;
            if (result.length == 0)
                res.status(404).json({ message: "Usuario no encontrado" });
        });
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Sin autorización' });
    }
});
exports.isAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.query('SELECT id_rol AS rol FROM empleados_roles WHERE id_empleado = ?', req.userId, function (err, result, fields) {
        if (err)
            throw err;
        if (result.some((r) => r.rol == idAdmin)) {
            next();
        }
        else {
            return res.status(401).json({ message: 'Sin rol de administrador' });
        }
    });
});
exports.isInventarioBasic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.query('SELECT id_rol AS rol FROM empleados_roles WHERE id_empleado = ?', req.userId, function (err, result, fields) {
        if (err)
            throw err;
        if (result.some((r) => r.rol == idInventarioBasic)) {
            next();
        }
        else {
            return res.status(401).json({ message: 'Sin rol de administrador' });
        }
    });
});
