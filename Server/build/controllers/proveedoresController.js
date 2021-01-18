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
exports.proveedoresController = void 0;
const database_1 = __importDefault(require("../database"));
class ProveedoresController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT
                            id_proveedor AS id,
                            proveedores_lista.nombre AS nombre,
                            proveedores_areas.nombre AS area,
                            proveedores_lista.fecha_creado AS fecha,
                            proveedores_lista.rif,
                            proveedores_lista.telefono,
                            proveedores_lista.direccion,
                            proveedores_lista.contacto,
                            proveedores_lista.correo,
                            proveedores_lista.descripcion
                            FROM grupocdv360.proveedores_lista
                            LEFT JOIN proveedores_areas
                            ON proveedores_lista.id_area = proveedores_areas.id_area
                            ORDER BY proveedores_lista.nombre;`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO proveedores_lista SET ?', [req.body]);
            res.json({ text: 'Proveedor Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE proveedores_lista set ? WHERE id_proveedor = ?', [req.body, id]);
            res.json({ text: 'Proveedor Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM proveedores_lista WHERE id_proveedor = ?', [id]);
            res.json({ text: 'Proveedor Eliminado' });
        });
    }
}
exports.proveedoresController = new ProveedoresController();
