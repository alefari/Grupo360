import { Request, Response } from 'express';

import pool from '../database';

class HerramientasController {

    public async list(req: Request, res: Response) {
        await pool.query(`
        SELECT items.id_item AS id, 
            items.nombre,
            categorias.nombre AS categoria,
            subcategorias.nombre AS subcategoria,
            items.cantidad,
            unidades.nombre AS unidades,
            ubicaciones.nombre AS ubicacion,
            estados.nombre AS estado,
            items.vencimiento,
            items.serial,
            items.precio,
            items.descripcion,
            items.cantidadObra
        FROM grupocdv360.items
        LEFT JOIN categorias
        ON items.id_categoria = categorias.id_categoria
        LEFT JOIN subcategorias
        ON items.id_subcategoria = subcategorias.id_subcategoria
        LEFT JOIN unidades
        ON items.id_unidad = unidades.id_unidad
        LEFT JOIN ubicaciones
        ON items.id_ubicacion = ubicaciones.id_ubicacion
        LEFT JOIN estados
        ON items.id_estado = estados.id_estado
        ORDER BY items.nombre;`, 
            function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT * FROM items WHERE id_item = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    // public async create (req: Request, res: Response): Promise<void> {
    //     await pool.query('INSERT INTO items SET ?', [req.body], function (error, results, fields){
    //         if(error) throw error;
    //         console.log(results.insertId);
    //     });
    //     res.json({text: 'Herramienta Guardada'});
    // }
    
    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO items SET ?', [req.body], function (error, results, fields){
            if(error) throw error;
            res.json({
                text: "Herramienta Guardada",
                id: results.insertId
            })
        });
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE items set ? WHERE id_item = ?', [req.body, id]);
        res.json({text: 'Herramienta Actualizada'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM items WHERE id_item = ?', [id]);
        res.json({text: 'Herramienta Eliminada'});
    }

}

export const herramientasController = new HerramientasController();