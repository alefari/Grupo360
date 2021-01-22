"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosProveedoresController_1 = require("../controllers/productosProveedoresController");
class ProductosProveedoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productosProveedoresController_1.productosProveedoresController.list);
        // this.router.get('/', productosProveedoresController.list);
        this.router.post('/', productosProveedoresController_1.productosProveedoresController.create);
        this.router.put('/:id', productosProveedoresController_1.productosProveedoresController.update);
        this.router.delete('/:id', productosProveedoresController_1.productosProveedoresController.delete);
    }
}
const productosProveedoresRoutes = new ProductosProveedoresRoutes();
exports.default = productosProveedoresRoutes.router;
