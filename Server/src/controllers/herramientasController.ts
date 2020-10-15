import { Request, Response } from 'express';

import pool from '../database';

class HerramientasController {

    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM herramienta', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT * FROM herramienta WHERE idHerramienta = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO herramienta set ?', [req.body]);
        res.json({text: 'Herramienta Guardada'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE herramienta set ? WHERE idHerramienta = ?', [req.body, id]);
        res.json({text: 'Herramienta Actualizada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM herramienta WHERE idHerramienta = ?', [id]);
        res.json({text: 'Herramienta Eliminada'});
    }

}

export const herramientasController = new HerramientasController();