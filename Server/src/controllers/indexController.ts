import { Request, Response } from 'express';

import pool from '../database';

class IndexController {

    public index(req: Request, res: Response) {
        res.send('Hello');
        // pool.query('DESCRIBE herramienta');
        // res.json('herram');
    }

}

export const indexController = new IndexController();