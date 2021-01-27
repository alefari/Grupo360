import { Request, Response } from 'express';
import pool from '../database';


class ProductosProveedoresController {

    public async list(req: Request, res: Response) {
        await pool.query(`SELECT
                            id_producto AS id,
                            proveedores_productos.nombre AS nombre,
                            proveedores_areas.nombre AS area,
                            proveedores_productos.fecha_act AS fecha,
                            proveedores_productos.garantia,
                            proveedores_productos.dias_garantia,
                            unidades.nombre AS unidad,
                            proveedores_productos.precio AS precio,
                            proveedores_lista.nombre AS nombreProveedor
                            FROM grupocdv360.proveedores_productos
                            LEFT JOIN proveedores_lista
                            ON proveedores_productos.id_proveedor_producto = proveedores_lista.id_proveedor
                            LEFT JOIN unidades
                            ON proveedores_productos.id_unidad_producto = unidades.id_unidad
                            LEFT JOIN proveedores_areas
                            ON proveedores_productos.id_area_producto = proveedores_areas.id_area
                            ORDER BY proveedores_productos.nombre;`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async listProveedor(req: Request, res: Response) {
        const { idProv } = req.params;
        await pool.query(`SELECT
                            id_producto AS id,
                            proveedores_productos.nombre AS nombre,
                            proveedores_areas.nombre AS area,
                            proveedores_productos.fecha_act AS fecha,
                            proveedores_productos.garantia,
                            proveedores_productos.dias_garantia,
                            unidades.nombre AS unidad,
                            proveedores_productos.precio AS precio,
                            proveedores_lista.nombre AS nombreProveedor
                            FROM grupocdv360.proveedores_productos
                            LEFT JOIN proveedores_lista
                            ON proveedores_productos.id_proveedor_producto = proveedores_lista.id_proveedor
                            LEFT JOIN unidades
                            ON proveedores_productos.id_unidad_producto = unidades.id_unidad
                            LEFT JOIN proveedores_areas
                            ON proveedores_productos.id_area_producto = proveedores_areas.id_area
                            WHERE id_proveedor_producto = ?
                            ORDER BY proveedores_productos.nombre;`
                            ,[idProv], function(err, result, fields) {
            if (err) throw err;
            console.log(result)
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO proveedores_productos SET ?', [req.body]);
        res.json({text: 'Productos Guardado'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE proveedores_productos set ? WHERE id_producto = ?', [req.body, id]);
        res.json({text: 'Producto Actualizado'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM proveedores_productos WHERE id_producto = ?', [id]);
        res.json({text: 'Producto Eliminado'});
    }

}

export const productosProveedoresController = new ProductosProveedoresController();