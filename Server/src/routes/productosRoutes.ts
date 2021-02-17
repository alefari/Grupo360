import { Router } from 'express';
import { productosController } from '../controllers/productosController';

class ProductosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', productosController.list);
        this.router.post('/', productosController.create);
        this.router.put('/:id', productosController.update);
        this.router.delete('/:id', productosController.delete);
        this.router.get('/:id', productosController.getOne);
    }
}

const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;