import { Router } from 'express';
import { eliminadosController } from '../controllers/eliminadosController';

class EliminadosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', eliminadosController.list);
        this.router.post('/', eliminadosController.create);
        //this.router.put('/:id', eliminadosController.update);
        // this.router.delete('/:id', eliminadosController.delete);
        this.router.get('/:id', eliminadosController.getOne);
    }
}

const eliminadosRoutes = new EliminadosRoutes();
export default eliminadosRoutes.router;