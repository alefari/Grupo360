import { Request, Response } from 'express';

import pool from '../database';
// HAY QUE ACOMODAR ESTE DOCUMENTO
class IngresosController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT id_categoria AS id, nombre FROM categorias`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_categoria AS id, nombre FROM categorias WHERE id_categoria = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO categorias set ?', [req.body]);
        res.json({text: 'Categoría Guardada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE categorias set ? WHERE id_categoria = ?', [req.body, id]);
        res.json({text: 'Categoría Actualizada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM categorias WHERE id_categoria = ?', [id]);
        res.json({text: 'Categoría Eliminada'});
    }

}

export const ingresosController = new IngresosController();