"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const middlewares_1 = require("../middlewares");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/signup', auth_controller_1.authController.signup);
        this.router.post('/signin', auth_controller_1.authController.signin);
        this.router.put('/changePassword', middlewares_1.verifyToken, auth_controller_1.authController.changePassword);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
