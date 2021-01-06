"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send('Que haces aqui?');
        // res.json('HSola');
        // pool.query('DESCRIBE herramienta');
    }
}
exports.indexController = new IndexController();
