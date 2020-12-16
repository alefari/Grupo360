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
exports.eliminadosController = void 0;
const database_1 = __importDefault(require("../database"));
class EliminadosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT 
                            id_eliminado AS id,
                            eliminaciones.nombre,
                            categorias.nombre AS categoria,
                            eliminaciones.cantidad,
                            unidades.nombre AS unidad,
                            eliminaciones.fecha,
                            CONCAT(empleados.nombre, " ", empleados.apellido) AS responsable
                            FROM grupocdv360.eliminaciones
                            LEFT JOIN categorias
                            ON eliminaciones.id_categoria = categorias.id_categoria
                            LEFT JOIN unidades
                            ON eliminaciones.id_unidad = unidades.id_unidad
                            LEFT JOIN empleados
                            ON eliminaciones.cedula_responsable_eliminado = empleados.cedula
                            ORDER BY eliminaciones.fecha DESC;`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT id_eliminado AS id, nombre FROM eliminaciones WHERE id_eliminado = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO eliminaciones set ?', [req.body]);
            res.json({ text: 'Eliminado Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE eliminaciones set ? WHERE id_eliminado = ?', [req.body, id]);
            res.json({ text: 'Eliminado Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM eliminaciones WHERE id_eliminado = ?', [id]);
            res.json({ text: 'Item Eliminado' });
        });
    }
}
exports.eliminadosController = new EliminadosController();
