import { Router } from 'express';
import { cargosController } from '../controllers/cargosController';

class CargosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', cargosController.list);
        // this.router.post('/', categoriasController.create);
        // this.router.put('/:id', categoriasController.update);
        // this.router.delete('/:id', categoriasController.delete);

        // this.router.get('/:id', categoriasController.getOne);
    }
}

const cargosRoutes = new CargosRoutes();
export default cargosRoutes.router;