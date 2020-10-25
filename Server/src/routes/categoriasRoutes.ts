import { Router } from 'express';
import { categoriasController } from '../controllers/categoriasController';

class CategoriasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', categoriasController.list);
        this.router.post('/', categoriasController.create);
        this.router.put('/:id', categoriasController.update);
        this.router.delete('/:id', categoriasController.delete);

        this.router.get('/:id', categoriasController.getOne);
    }
}

const categoriasRoutes = new CategoriasRoutes();
export default categoriasRoutes.router;