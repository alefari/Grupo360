import { Request, Response } from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


class AuthController {

    public async signup(req: Request, res: Response) {
        const {cedula, nombre, apellido, id_cargo, correo, password, roles} = req.body;
        await bcrypt.hash(password, 10, async function (err, hash) {
            const savedUser = {
                cedula: cedula,
                nombre: nombre,
                apellido: apellido,
                id_cargo: id_cargo,
                correo: correo,
                password: hash
            }
            await pool.query('INSERT INTO empleados set ?', [savedUser], async function (err, result, fields) {
                if (err) throw err;
                if(roles) {
                    roles.forEach(async (rol: number) => {
                        await pool.query('INSERT INTO empleados_roles set id_empleado = ?, id_rol = ?', [cedula, rol], 
                            async function (err, result, fields) {
                                if (err) throw err;
                        });
                    });
                }
            });
        });
        
        const token = jwt.sign({id: cedula}, 'secreto', {
            expiresIn: 86400
        })

        res.status(200).json({token});
    }

    public async signin(req: Request, res: Response) {
        pool.query('SELECT * FROM empleados WHERE cedula = ?', [req.body.cedula], async function (err, result, fields) {
            if (err) throw err;
            let match, token;
            if(result.length > 0) {
                match = await bcrypt.compare(req.body.password, result[0].password)
                if(match == false) return res.status(401).json({token: null, message: "Contraseña invalida"});
                else if(match == true) {
                    let expiracionSeg = 28800;
                    token = jwt.sign({id: result[0].cedula}, 'secreto', {expiresIn: expiracionSeg})
                    res.json({token: token, cedula: result[0].cedula, expiresIn: expiracionSeg});
                }
            }else if(result.length == 0){
                res.status(400).json({message: "Usuario no encontrado"});
            }
        });
        
    }

    public async changePassword(req: any, res: Response) {
        const {cedula, password} = req.body;

        const token = req.headers["x-access-token"];

        try {
            const decoded:any = jwt.verify(token, 'secreto');

            if(decoded.id == cedula) {
                await bcrypt.hash(password, 10, async function (err, newHash) {
                    await pool.query('UPDATE empleados SET password = ? WHERE cedula = ?', [newHash, cedula], async function (err, result, fields) {
                        if (err) throw err;
                        res.json({message: 'Successful'})
                    });
                
                })
            }
            else {
                return res.status(401).json({message: 'Sin autorización'});
            }

        } catch (error) {
            return res.status(401).json({message: 'Sin autorización'});
        }
        
        
        
    }
}

export const authController = new AuthController();