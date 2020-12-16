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
exports.egresosController = void 0;
const database_1 = __importDefault(require("../database"));
class EgresosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT
                            id_egreso AS id,
                            nombre_item_egresado AS nombre,
                            categorias.nombre as categoria,
                            egresos.cantidad,
                            unidades.nombre AS unidad,
                            obra,
                            fecha,
                            CONCAT(empleados.nombre, " ", empleados.apellido) AS responsable
                            FROM grupocdv360.egresos
                            LEFT JOIN categorias
                            ON egresos.id_categoria_item_egresado = categorias.id_categoria
                            LEFT JOIN unidades
                            ON egresos.id_unidad_item_egresado = unidades.id_unidad
                            LEFT JOIN empleados
                            ON egresos.cedula_responsable_egreso = empleados.cedula
                            ORDER BY fecha DESC;`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT id_egreso AS id, nombre FROM egresos WHERE id_egreso = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO egresos set ?', [req.body]);
            res.json({ text: 'Egreso Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE egresos set ? WHERE id_egreso = ?', [req.body, id]);
            res.json({ text: 'Egreso Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM egresos WHERE id_egreso = ?', [id]);
            res.json({ text: 'Egreso Eliminado' });
        });
    }
}
exports.egresosController = new EgresosController();
