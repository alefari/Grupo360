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
exports.herramientasController = void 0;
const database_1 = __importDefault(require("../database"));
class HerramientasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`
        SELECT items.id_item AS id, 
            items.nombre,
            categorias.nombre AS categoria,
            subcategorias.nombre AS subcategoria,
            items.cantidad,
            unidades.nombre AS unidades,
            ubicaciones.nombre AS ubicacion,
            estados.nombre AS estado,
            items.vencimiento,
            items.serial,
            items.precio,
            items.descripcion,
            items.cantidadObra
        FROM grupocdv360.items
        LEFT JOIN categorias
        ON items.id_categoria = categorias.id_categoria
        LEFT JOIN subcategorias
        ON items.id_subcategoria = subcategorias.id_subcategoria
        LEFT JOIN unidades
        ON items.id_unidad = unidades.id_unidad
        LEFT JOIN ubicaciones
        ON items.id_ubicacion = ubicaciones.id_ubicacion
        LEFT JOIN estados
        ON items.id_estado = estados.id_estado
        ORDER BY items.nombre;`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM items WHERE id_item = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO items SET ?', [req.body], function (error, results, fields) {
                if (error)
                    throw error;
                res.json({
                    text: "Herramienta Guardada",
                    id: results.insertId
                });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE items set ? WHERE id_item = ?', [req.body, id]);
            res.json({ text: 'Herramienta Actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM items WHERE id_item = ?', [id]);
            res.json({ text: 'Herramienta Eliminada' });
        });
    }
}
exports.herramientasController = new HerramientasController();
