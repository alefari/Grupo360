"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ubicacionesController_1 = require("../controllers/ubicacionesController");
class UbicacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ubicacionesController_1.ubicacionesController.list);
        this.router.put('/:id', ubicacionesController_1.ubicacionesController.update);
        this.router.post('/', ubicacionesController_1.ubicacionesController.create);
        this.router.delete('/:id', ubicacionesController_1.ubicacionesController.delete);
        this.router.get('/:id', ubicacionesController_1.ubicacionesController.getOne);
    }
}
const ubicacionesRoutes = new UbicacionesRoutes();
exports.default = ubicacionesRoutes.router;
