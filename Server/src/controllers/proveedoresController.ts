import { Request, Response } from 'express';
import pool from '../database';


class ProveedoresController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT
                            id_proveedor AS id,
                            proveedores_lista.nombre AS nombre,
                            proveedores_areas.nombre AS area,
                            proveedores_lista.fecha_creado AS fecha,
                            proveedores_lista.rif,
                            proveedores_lista.telefono,
                            proveedores_lista.direccion,
                            proveedores_lista.contacto,
                            proveedores_lista.correo,
                            proveedores_lista.descripcion
                            FROM grupocdv360.proveedores_lista
                            LEFT JOIN proveedores_areas
                            ON proveedores_lista.id_area = proveedores_areas.id_area
                            ORDER BY proveedores_lista.nombre;`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO proveedores_lista SET ?', [req.body]);
        res.json({text: 'Proveedor Guardado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE proveedores_lista set ? WHERE id_proveedor = ?', [req.body, id]);
        res.json({text: 'Proveedor Actualizado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM proveedores_lista WHERE id_proveedor = ?', [id]);
        res.json({text: 'Proveedor Eliminado'});
    }

}

export const proveedoresController = new ProveedoresController();