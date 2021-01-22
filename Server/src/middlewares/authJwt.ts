import jwt from 'jsonwebtoken';
import pool from '../database';

const idAdmin = 1;
const idInventarioBasic = 1;
const idInventarioFull = 1;

export const verifyToken = async (req:any, res:any, next:any) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({ message: "Sin token" });

        const decoded:any = jwt.verify(token, 'secreto');
        req.userId = decoded.id;
        const usuario = await pool.query('SELECT * FROM empleados WHERE cedula = ?',  [decoded.id], function(err, result, fields) {
            if(err) throw err
            if(result.length == 0) res.status(404).json({message: "Usuario no encontrado"});
        })
        next();
    } catch (error) {
        return res.status(401).json({message: 'Sin autorización'});
    }

}

export const isAdmin = async (req:any, res:any, next:any) => {
    await pool.query('SELECT id_rol AS rol FROM empleados_roles WHERE id_empleado = ?', req.userId, function(err, result, fields) {
        if(err) throw err
        if(result.some((r: { rol: number; }) => r.rol == idAdmin)) {
            next();
        }
        else {
            return res.status(401).json({message: 'Sin rol de administrador'});
        }
    })
}
export const isInventarioBasic = async (req:any, res:any, next:any) => {
    await pool.query('SELECT id_rol AS rol FROM empleados_roles WHERE id_empleado = ?', req.userId, function(err, result, fields) {
        if(err) throw err
        if(result.some((r: { rol: number; }) => r.rol == idInventarioBasic)) {
            next();
        }
        else {
            return res.status(401).json({message: 'Sin rol de administrador'});
        }
    })
}