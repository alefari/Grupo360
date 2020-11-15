import { Request, Response } from 'express';

import pool from '../database';
// HAY QUE ACOMODAR ESTE DOCUMENTO
class EgresosController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT id_egreso AS id, nombre FROM egresos`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_egreso AS id, nombre FROM egresos WHERE id_egreso = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO egresos set ?', [req.body]);
        res.json({text: 'Egreso Guardado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE egresos set ? WHERE id_egreso = ?', [req.body, id]);
        res.json({text: 'Egreso Actualizado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM egresos WHERE id_egreso = ?', [id]);
        res.json({text: 'Egreso Eliminado'});
    }

}

export const egresosController = new EgresosController();