import { Request, Response } from 'express';

import pool from '../database';

class IndexController {

    public index(req: Request, res: Response) {
        res.send('Hello');
        // res.json('HSola');
        // pool.query('DESCRIBE herramienta');
    }

}

export const indexController = new IndexController();