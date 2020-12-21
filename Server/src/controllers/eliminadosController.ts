import { Request, Response } from 'express';

import pool from '../database';

class EliminadosController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT 
                            id_eliminado AS id,
                            eliminaciones.nombre,
                            categorias.nombre AS categoria,
                            eliminaciones.cantidad,
                            unidades.nombre AS unidad,
                            eliminaciones.fecha,
                            CONCAT(empleados.nombre, " ", empleados.apellido) AS responsable
                            FROM grupocdv360.eliminaciones
                            LEFT JOIN categorias
                            ON eliminaciones.id_categoria = categorias.id_categoria
                            LEFT JOIN unidades
                            ON eliminaciones.id_unidad = unidades.id_unidad
                            LEFT JOIN empleados
                            ON eliminaciones.cedula_responsable_eliminado = empleados.cedula
                            ORDER BY eliminaciones.fecha DESC;`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT id_eliminado AS id, nombre FROM eliminaciones WHERE id_eliminado = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO eliminaciones set ?', [req.body]);
        res.json({text: 'Eliminado Guardado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE eliminaciones set ? WHERE id_eliminado = ?', [req.body, id]);
        res.json({text: 'Eliminado Actualizado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM eliminaciones WHERE id_eliminado = ?', [id]);
        res.json({text: 'Item Eliminado'});
    }

}

export const eliminadosController = new EliminadosController();