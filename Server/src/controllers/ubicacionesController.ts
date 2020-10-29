import { Request, Response } from 'express';

import pool from '../database';

class UbicacionesController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT id_ubicacion AS id, nombre FROM ubicaciones`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_ubicacion AS id, nombre FROM ubicaciones WHERE id_ubicacion = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO ubicaciones set ?', [req.body]);
        res.json({text: 'Ubicación Guardada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE ubicaciones set ? WHERE id_ubicacion = ?', [req.body, id]);
        res.json({text: 'Ubicación Actualizada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM ubicaciones WHERE id_ubicacion = ?', [id]);
        res.json({text: 'Ubicaión Eliminada'});
    }

}

export const ubicacionesController = new UbicacionesController();