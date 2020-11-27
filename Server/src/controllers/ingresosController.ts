import { Request, Response } from 'express';
import pool from '../database';


class IngresosController {

    public async list(req: Request, res: Response) {
        // await pool.query(`SELECT * FROM grupocdv360.ingresos`, 
        //     function(err, result, fields) {
        //     if (err) throw err;
        //     res.json(result);
        // });
        await pool.query(`SELECT
                            id_ingreso AS id,
                            items.nombre AS nombre,
                            categorias.nombre AS categoria,
                            ingresos.precio,
                            fecha,
                            ingresos.cantidad,
                            unidades.nombre AS unidad,
                            CONCAT(empleados.nombre, " ", empleados.apellido) AS responsable,
                            modalidad_ingreso.nombre as modalidad
                            FROM grupocdv360.ingresos
                            LEFT JOIN items
                            ON ingresos.id_item_ingresado = items.id_item
                            LEFT JOIN categorias
                            ON items.id_categoria = categorias.id_categoria
                            LEFT JOIN unidades
                            ON items.id_unidad = unidades.id_unidad
                            LEFT JOIN modalidad_ingreso
                            ON ingresos.id_modalidad = modalidad_ingreso.id_modalidad
                            LEFT JOIN empleados
                            ON ingresos.cedula_responsable_ingreso = empleados.cedula;`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    // public async getOne(req: Request, res: Response) {
    //     const { id } = req.params;
    //     await pool.query('SELECT id_categoria AS id, nombre FROM categorias WHERE id_categoria = ?', [id], function(err, result, fields) {
    //         if (err) throw err;
    //         res.json(result);
    //     });
    // }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO ingresos SET ?', [req.body]);
        res.json({text: 'Ingreso Guardado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE ingresos set ? WHERE id_ingreso = ?', [req.body, id]);
        res.json({text: 'Ingreso Actualizado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM ingresos WHERE id_ingreso = ?', [id]);
        res.json({text: 'Ingreso Eliminado'});
    }

}

export const ingresosController = new IngresosController();