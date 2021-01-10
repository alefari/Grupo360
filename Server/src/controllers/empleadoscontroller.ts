import { Request, Response } from 'express';

import pool from '../database';

class EmpleadosController {

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query(`SELECT 
                            empleados.nombre, 
                            apellido, 
                            correo,
                            cargos.nombre AS cargo
                            FROM empleados
                            LEFT JOIN cargos
                            ON empleados.id_cargo = cargos.id_cargo
                            WHERE cedula = ?`, 
                            [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }


}

export const empleadosController = new EmpleadosController();