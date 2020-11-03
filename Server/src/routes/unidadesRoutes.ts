import { Router } from 'express';
import { unidadesController } from '../controllers/unidadesController';

class UnidadesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', unidadesController.list);
        this.router.post('/', unidadesController.create);
        this.router.put('/:id', unidadesController.update);
        this.router.delete('/:id', unidadesController.delete);

        this.router.get('/:id', unidadesController.getOne);
    }
}

const unidadesRoutes = new UnidadesRoutes();
export default unidadesRoutes.router;