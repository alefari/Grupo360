import { Request, Response } from 'express';

import pool from '../database';

class UnidadesController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT id_unidad AS id, nombre FROM unidades`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_unidad AS id, nombre FROM unidades WHERE id_unidad = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO unidades set ?', [req.body]);
        res.json({text: 'Unidad Guardada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE unidades set ? WHERE id_unidad = ?', [req.body, id]);
        res.json({text: 'Unidad Actualizada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM unidades WHERE id_unidad = ?', [id]);
        res.json({text: 'Unidad Eliminada'});
    }

}

export const unidadesController = new UnidadesController();