import { Router } from 'express';
import { productosProveedoresController } from '../controllers/productosProveedoresController';
import {verifyToken} from '../middlewares'

class ProductosProveedoresRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', verifyToken, productosProveedoresController.list);

        // this.router.get('/', productosProveedoresController.list);
        this.router.post('/', productosProveedoresController.create);
        this.router.put('/:id', productosProveedoresController.update);
        this.router.delete('/:id', productosProveedoresController.delete);
    }
}

const productosProveedoresRoutes = new ProductosProveedoresRoutes();
export default productosProveedoresRoutes.router;