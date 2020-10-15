"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send('Hello');
        // pool.query('DESCRIBE herramienta');
        // res.json('herram');
    }
}
exports.indexController = new IndexController();
