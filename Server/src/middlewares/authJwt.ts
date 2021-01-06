import jwt from 'jsonwebtoken';
import pool from '../database';

export const verifyToken = async (req:any, res:any, next:any) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({ message: "Sin token" });

        const decoded:any = jwt.verify(token, 'secreto');

        const usuario = await pool.query('SELECT * FROM empleados WHERE cedula = ?',  [decoded.id], function(err, result, fields) {
            if(err) throw err
            if(result.length == 0) res.status(404).json({message: "Usuario no encontrado"});
        })

        next();

    } catch (error) {
        return res.status(401).json({message: 'Sin autorización'});
    }

}