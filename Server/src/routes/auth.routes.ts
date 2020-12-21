import { Router } from 'express'
import { authController } from '../controllers/auth.controller';

class AuthRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/signup', authController.signup);
        this.router.post('/signin', authController.signin);
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;