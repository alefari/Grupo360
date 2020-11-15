import { Router } from 'express';
import { egresosController } from '../controllers/egresosController';

class EgresosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', egresosController.list);
        this.router.post('/', egresosController.create);
        // this.router.put('/:id', ingresosController.update);
        // this.router.delete('/:id', ingresosController.delete);

        this.router.get('/:id', egresosController.getOne);
    }
}

const egresosRoutes = new EgresosRoutes();
export default egresosRoutes.router;