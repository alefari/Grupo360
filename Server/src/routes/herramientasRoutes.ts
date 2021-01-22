import { Router } from 'express';
import { herramientasController } from '../controllers/herramientasController';

class HerramientasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', herramientasController.list);

        // this.router.get('/', herramientasController.list);
        this.router.post('/', herramientasController.create);
        this.router.put('/:id', herramientasController.update);
        this.router.delete('/:id', herramientasController.delete);

        this.router.get('/:id', herramientasController.getOne);
    }
}

const herramientasRoutes = new HerramientasRoutes();
export default herramientasRoutes.router;