import { Router } from 'express';
import { modalidadesController } from '../controllers/modalidadesController';

class ModalidadesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', modalidadesController.list);
        this.router.post('/', modalidadesController.create);
        this.router.put('/:id', modalidadesController.update);
        this.router.delete('/:id', modalidadesController.delete);
        this.router.get('/:id', modalidadesController.getOne);
    }
}

const modalidadesRoutes = new ModalidadesRoutes();
export default modalidadesRoutes.router;