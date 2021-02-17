import { Request, Response } from 'express';

import pool from '../database';

class ProductosController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT 
                            id_producto AS id,
                            productos.nombre,
                            unidades.nombre AS unidad
                            FROM grupocdv360.productos
                            LEFT JOIN unidades
                            ON productos.id_unidad = unidades.id_unidad
                            ORDER BY productos.nombre;`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_producto AS id, nombre FROM productos WHERE id_area = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO productos set ?', [req.body]);
        res.json({text: 'Producto Guardada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE productos set ? WHERE id_producto = ?', [req.body, id]);
        res.json({text: 'Producto Actualizada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM productos WHERE id_producto = ?', [id]);
        res.json({text: 'Producto Eliminada'});
    }

}

export const productosController = new ProductosController();