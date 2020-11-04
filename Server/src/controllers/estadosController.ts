import { Request, Response } from 'express';

import pool from '../database';

class EstadosController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT id_estado AS id, nombre FROM estados`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_estado AS id, nombre FROM estados WHERE id_estado = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO estados set ?', [req.body]);
        res.json({text: 'Estado Guardado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE estados set ? WHERE id_estado = ?', [req.body, id]);
        res.json({text: 'Estado Actualizado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM estados WHERE id_estado = ?', [id]);
        res.json({text: 'Estado Eliminado'});
    }

}

export const estadosController = new EstadosController();