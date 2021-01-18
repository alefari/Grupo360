"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const areas_Controller_1 = require("../controllers/areas.Controller");
class AreasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', areas_Controller_1.areasController.list);
        this.router.post('/', areas_Controller_1.areasController.create);
        this.router.put('/:id', areas_Controller_1.areasController.update);
        this.router.delete('/:id', areas_Controller_1.areasController.delete);
        this.router.get('/:id', areas_Controller_1.areasController.getOne);
    }
}
const areasRoutes = new AreasRoutes();
exports.default = areasRoutes.router;
