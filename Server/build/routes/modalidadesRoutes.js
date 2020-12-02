"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modalidadesController_1 = require("../controllers/modalidadesController");
class ModalidadesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', modalidadesController_1.modalidadesController.list);
        this.router.post('/', modalidadesController_1.modalidadesController.create);
        this.router.put('/:id', modalidadesController_1.modalidadesController.update);
        this.router.delete('/:id', modalidadesController_1.modalidadesController.delete);
        this.router.get('/:id', modalidadesController_1.modalidadesController.getOne);
    }
}
const modalidadesRoutes = new ModalidadesRoutes();
exports.default = modalidadesRoutes.router;
