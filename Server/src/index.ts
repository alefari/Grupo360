import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import herramientasRoutes from './routes/herramientasRoutes';
import categoriasRoutes from './routes/categoriasRoutes';
import subcategoriasRoutes from './routes/subcategoriasRoutes';
import ubicacionesRoutes from './routes/ubicacionesRoutes';
import unidadesRoutes from './routes/unidadesRoutes';
import estadosRoutes from './routes/estadosRoutes';
import morgan from 'morgan';
import cors from 'cors';

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
        this.app.use('/herramientas', herramientasRoutes);
        this.app.use('/categorias', categoriasRoutes);
        this.app.use('/subcategorias', subcategoriasRoutes);
        this.app.use('/ubicaciones', ubicacionesRoutes);
        this.app.use('/unidades', unidadesRoutes);
        this.app.use('/estados', estadosRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();