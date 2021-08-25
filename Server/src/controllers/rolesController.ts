import { Request, Response } from 'express';

import pool from '../database';

class RolesController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT id_rol AS id, nombre_rol AS nombre FROM roles`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    // public async getOne(req: Request, res: Response) {
    //     const { id } = req.params;
    //     await pool.query('SELECT id_categoria AS id, nombre FROM categorias WHERE id_categoria = ?', [id], function(err, result, fields) {
    //         if (err) throw err;
    //         res.json(result);
    //     });
    // }

    // public async create (req: Request, res: Response): Promise<void> {
    //     await pool.query('INSERT INTO categorias set ?', [req.body]);
    //     res.json({text: 'Categoría Guardada'});
    // }

    // public async update (req: Request, res: Response) {
    //     const { id } = req.params;
    //     await pool.query('UPDATE categorias set ? WHERE id_categoria = ?', [req.body, id]);
    //     res.json({text: 'Categoría Actualizada'});
    // }

    // public async delete (req: Request, res: Response) {
    //     const { id } = req.params;
    //     await pool.query('DELETE FROM categorias WHERE id_categoria = ?', [id]);
    //     res.json({text: 'Categoría Eliminada'});
    // }

}

export const rolesController = new RolesController();