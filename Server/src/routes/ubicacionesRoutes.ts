import { Router } from 'express';
import { ubicacionesController } from '../controllers/ubicacionesController';

class UbicacionesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ubicacionesController.list);
        this.router.put('/:id', ubicacionesController.update);
        this.router.post('/', ubicacionesController.create);
        this.router.delete('/:id', ubicacionesController.delete);
        this.router.get('/:id', ubicacionesController.getOne);
    }
}

const ubicacionesRoutes = new UbicacionesRoutes();
export default ubicacionesRoutes.router;