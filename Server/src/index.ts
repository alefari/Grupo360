import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import herramientasRoutes from './routes/herramientasRoutes';
import categoriasRoutes from './routes/categoriasRoutes';
import subcategoriasRoutes from './routes/subcategoriasRoutes';
import ubicacionesRoutes from './routes/ubicacionesRoutes';
import unidadesRoutes from './routes/unidadesRoutes';
import estadosRoutes from './routes/estadosRoutes';
import ingresosRoutes from './routes/ingresosRoutes';
import egresosRoutes from './routes/egresosRoutes';
import eliminadosRoutes from './routes/eliminadosRoutes';
import modalidadesRoutes from './routes/modalidadesRoutes';
import authRoutes from './routes/auth.routes';
import morgan from 'morgan';
import cors from 'cors';
import { verifyToken } from './middlewares';
import empleadosRoutes from './routes/empleados.routes';
import cargosRoutes from './routes/cargos.routes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/herramientas', verifyToken, herramientasRoutes);
        this.app.use('/categorias', verifyToken, categoriasRoutes);
        this.app.use('/subcategorias', verifyToken, subcategoriasRoutes);
        this.app.use('/ubicaciones', verifyToken, ubicacionesRoutes);
        this.app.use('/unidades', verifyToken, unidadesRoutes);
        this.app.use('/estados', verifyToken, estadosRoutes);
        this.app.use('/ingresos', verifyToken, ingresosRoutes);
        this.app.use('/egresos', verifyToken, egresosRoutes);
        this.app.use('/eliminados', verifyToken, eliminadosRoutes);
        this.app.use('/modalidades', verifyToken, modalidadesRoutes);
        this.app.use('/empleados', verifyToken, empleadosRoutes);
        this.app.use('/cargos', verifyToken, cargosRoutes);
        this.app.use('/auth', authRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();