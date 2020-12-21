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
exports.ingresosController = void 0;
const database_1 = __importDefault(require("../database"));
class IngresosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // await pool.query(`SELECT * FROM grupocdv360.ingresos`, 
            //     function(err, result, fields) {
            //     if (err) throw err;
            //     res.json(result);
            // });
            yield database_1.default.query(`SELECT
                            id_ingreso AS id,
                            nombre_item_ingresado AS nombre,
                            categorias.nombre AS categoria,
                            ingresos.precio,
                            fecha,
                            ingresos.cantidad,
                            unidades.nombre AS unidad,
                            CONCAT(empleados.nombre, " ", empleados.apellido) AS responsable,
                            modalidad_ingreso.nombre as modalidad
                            FROM grupocdv360.ingresos
                            LEFT JOIN categorias
                            ON ingresos.id_categoria_item_ingresado = categorias.id_categoria
                            LEFT JOIN unidades
                            ON ingresos.id_unidad_item_ingresado = unidades.id_unidad
                            LEFT JOIN modalidad_ingreso
                            ON ingresos.id_modalidad = modalidad_ingreso.id_modalidad
                            LEFT JOIN empleados
                            ON ingresos.cedula_responsable_ingreso = empleados.cedula
                            ORDER BY fecha DESC;`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // public async getOne(req: Request, res: Response) {
    //     const { id } = req.params;
    //     await pool.query('SELECT id_categoria AS id, nombre FROM categorias WHERE id_categoria = ?', [id], function(err, result, fields) {
    //         if (err) throw err;
    //         res.json(result);
    //     });
    // }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ingresos SET ?', [req.body]);
            res.json({ text: 'Ingreso Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE ingresos set ? WHERE id_ingreso = ?', [req.body, id]);
            res.json({ text: 'Ingreso Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ingresos WHERE id_ingreso = ?', [id]);
            res.json({ text: 'Ingreso Eliminado' });
        });
    }
}
exports.ingresosController = new IngresosController();
