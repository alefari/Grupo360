import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.send('Hello');
        // res.json('HSola');
        // pool.query('DESCRIBE herramienta');
    }

}

export const indexController = new IndexController();