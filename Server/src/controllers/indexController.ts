import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.send('Que haces aqui?');
        // res.json('HSola');
        // pool.query('DESCRIBE herramienta');
    }

}

export const indexController = new IndexController();