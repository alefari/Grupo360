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
exports.productosProveedoresController = void 0;
const database_1 = __importDefault(require("../database"));
class ProductosProveedoresController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT
                            id_producto AS id,
                            proveedores_productos.nombre AS nombre,
                            proveedores_areas.nombre AS area,
                            proveedores_productos.fecha_act AS fecha,
                            unidades.nombre AS unidad,
                            proveedores_productos.precio AS precio,
                            proveedores_lista.nombre AS nombreProveedor
                            FROM grupocdv360.proveedores_productos
                            LEFT JOIN proveedores_lista
                            ON proveedores_productos.id_proveedor_producto = proveedores_lista.id_proveedor
                            LEFT JOIN unidades
                            ON proveedores_productos.id_unidad_producto = unidades.id_unidad
                            LEFT JOIN proveedores_areas
                            ON proveedores_productos.id_area_producto = proveedores_areas.id_area
                            ORDER BY proveedores_productos.nombre;`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO proveedores_productos SET ?', [req.body]);
            res.json({ text: 'Productos Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE proveedores_productos set ? WHERE id_producto = ?', [req.body, id]);
            res.json({ text: 'Producto Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM proveedores_productos WHERE id_producto = ?', [id]);
            res.json({ text: 'Producto Eliminado' });
        });
    }
}
exports.productosProveedoresController = new ProductosProveedoresController();
