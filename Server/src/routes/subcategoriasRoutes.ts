import { Router } from 'express';
import { subcategoriasController } from '../controllers/subcategoriasController';

class SubategoriasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', subcategoriasController.list);
        this.router.post('/', subcategoriasController.create);
        this.router.put('/:id', subcategoriasController.update);
        this.router.delete('/:id', subcategoriasController.delete);

        this.router.get('/:id', subcategoriasController.getOne);
    }
}

const subcategoriasRoutes = new SubategoriasRoutes();
export default subcategoriasRoutes.router;