import { Request, Response } from 'express';

import pool from '../database';

class ModalidadesController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT id_modalidad AS id, nombre FROM modalidad_ingreso`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_modalidad AS id, nombre FROM modalidad_ingreso WHERE id_modalidad = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO modalidad_ingreso set ?', [req.body]);
        res.json({text: 'Modalidad Guardada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE modalidad_ingreso set ? WHERE id_modalidad = ?', [req.body, id]);
        res.json({text: 'Modalidad Actualizada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM modalidad_ingreso WHERE id_modalidad = ?', [id]);
        res.json({text: 'Modalidad Eliminada'});
    }

}

export const modalidadesController = new ModalidadesController();