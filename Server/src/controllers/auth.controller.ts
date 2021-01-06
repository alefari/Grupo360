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
            await pool.query('INSERT INTO empleados set ?', [savedUser]);
        });

        // if(roles) {
        //     roles.forEach(rol => {
        //         console.log(rol);
        //         // await pool.query('INSERT INTO empleados_roles set', [{id_empleado: cedula, id_rol: rol}]);
        //     });
        // }
        
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
                    let expiracionSeg = 86400;
                    token = jwt.sign({id: result[0].cedula}, 'secreto', {
                        expiresIn: expiracionSeg
                    })
                    res.json({token: token, cedula: result[0].cedula, expiresIn: expiracionSeg});
                }
            }else if(result.length == 0){
                res.status(400).json({message: "Usuario no encontrado"});
            }
            
        });
        
    }
}

export const authController = new AuthController();