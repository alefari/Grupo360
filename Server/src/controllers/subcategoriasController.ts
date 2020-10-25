import { Request, Response } from 'express';

import pool from '../database';

class SubcategoriasController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT id_subcategoria AS id, nombre FROM subcategorias`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_subcategoria AS id, nombre FROM subcategorias WHERE id_subcategoria = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO subcategorias set ?', [req.body]);
        res.json({text: 'Subcategoría Guardada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE subcategorias set ? WHERE id_subcategoria = ?', [req.body, id]);
        res.json({text: 'Subcategoría Actualizada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM subcategorias WHERE id_subcategoria = ?', [id]);
        res.json({text: 'Subcategoría Eliminada'});
    }

}

export const subcategoriasController = new SubcategoriasController();