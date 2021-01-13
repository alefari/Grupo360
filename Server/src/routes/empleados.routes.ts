import { Router } from 'express';
import { empleadosController } from '../controllers/empleadoscontroller';

class EmpleadosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', empleadosController.list);
        // this.router.post('/', empleadosController.create);
        // this.router.put('/:id', empleadosController.update);
        // this.router.delete('/:id', empleadosController.delete);

        this.router.get('/:id', empleadosController.getOne);
    }
}

const empleadosRoutes = new EmpleadosRoutes();
export default empleadosRoutes.router;