import { Router } from 'express';
import { proveedoresController } from '../controllers/proveedoresController';
import {verifyToken} from '../middlewares'

class ProveedoresRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', verifyToken, proveedoresController.list);

        // this.router.get('/', proveedoresController.list);
        this.router.post('/', proveedoresController.create);
        this.router.put('/:id', proveedoresController.update);
        this.router.delete('/:id', proveedoresController.delete);
    }
}

const proveedoresRoutes = new ProveedoresRoutes();
export default proveedoresRoutes.router;