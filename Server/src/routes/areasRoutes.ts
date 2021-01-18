import { Router } from 'express';
import { areasController } from '../controllers/areas.Controller';

class AreasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', areasController.list);
        this.router.post('/', areasController.create);
        this.router.put('/:id', areasController.update);
        this.router.delete('/:id', areasController.delete);

        this.router.get('/:id', areasController.getOne);
    }
}

const areasRoutes = new AreasRoutes();
export default areasRoutes.router;