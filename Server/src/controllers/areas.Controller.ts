import { Request, Response } from 'express';

import pool from '../database';

class AreasController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT id_area AS id, nombre FROM proveedores_areas`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_area AS id, nombre FROM proveedores_areas WHERE id_area = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO proveedores_areas set ?', [req.body]);
        res.json({text: 'Área Guardada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE proveedores_areas set ? WHERE id_area = ?', [req.body, id]);
        res.json({text: 'Área Actualizada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM proveedores_areas WHERE id_area = ?', [id]);
        res.json({text: 'Área Eliminada'});
    }

}

export const areasController = new AreasController();