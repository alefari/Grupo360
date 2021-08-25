import { Router } from 'express';
import { rolesController } from '../controllers/rolesController';

class RolesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', rolesController.list);
        // this.router.post('/', categoriasController.create);
        // this.router.put('/:id', categoriasController.update);
        // this.router.delete('/:id', categoriasController.delete);

        // this.router.get('/:id', categoriasController.getOne);
    }
}

const rolesRoutes = new RolesRoutes();
export default rolesRoutes.router;