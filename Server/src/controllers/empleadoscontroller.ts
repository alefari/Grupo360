import { Request, Response } from 'express';
import { reloadLogs } from 'pm2';

import pool from '../database';

class EmpleadosController {

    public async list(req: Request, res: Response) {
        await pool.query(`
        SELECT cedula, 
            empleados.nombre, 
            empleados.apellido, 
            id_cargo as cargo, 
            correo,
            GROUP_CONCAT(id_rol SEPARATOR ',') AS roles
        FROM grupocdv360.empleados
        LEFT JOIN grupocdv360.empleados_roles
        ON empleados.cedula = empleados_roles.id_empleado
        GROUP BY cedula
        ORDER BY empleados.nombre;`, 
            function(err, result, fields) {
            if (err) throw err;

            let usersFixed = result;
            usersFixed[0].nombre = "alejandrito"

            result.forEach((usr: { roles: any }) => {
                if(usr.roles) {
                    usr.roles = usr.roles.split(',');
                } 
            });

            // let uniqueUsers: { cedula: number, nombre:string, apellido:string, cargo:number, correo:string, roles: number[] }[] = [];
            // let existia = false;

            // result.forEach((user: { cedula: number; roles: number; nombre: string; apellido: string; cargo: number; correo: string; }) => {
            //     uniqueUsers.forEach(u => {
            //         if(user.cedula == u.cedula) {
            //             uniqueUsers.find(u => u.cedula == user.cedula)!.roles.push(user.roles);
            //             existia = true;
            //         }
            //     })
            //     if(!existia) uniqueUsers.push({ ...user, roles: [user.roles] });
            //     existia = false;
            // })
            res.json(result);
            }
        )
    }
    
    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query(`SELECT 
                            empleados.nombre, 
                            apellido, 
                            correo,
                            cargos.nombre AS cargo,
                            id_rol
                            FROM empleados
                            LEFT JOIN cargos
                            ON empleados.id_cargo = cargos.id_cargo
                            LEFT JOIN empleados_roles
                            ON empleados.cedula = empleados_roles.id_empleado
                            WHERE cedula = ?`, 
                            [id], function(err, result, fields) {
            if (err) throw err;
            console.log(result)
            res.json(result);
        });
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE empleados set ? WHERE cedula = ?', [req.body, id]);
        res.json({text: 'Usuario Actualizado'});
    }


}

export const empleadosController = new EmpleadosController();