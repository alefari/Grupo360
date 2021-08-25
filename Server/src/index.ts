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
import productosRoutes from './routes/productosRoutes';
import authRoutes from './routes/auth.routes';
import morgan from 'morgan';
import cors from 'cors';
import { authJwt } from './middlewares';
import empleadosRoutes from './routes/empleados.routes';
import cargosRoutes from './routes/cargos.routes';
import proveedoresRoutes from './routes/proveedoresRoutes';
import productosProveedoresRoutes from './routes/productosProveedoresRoutes';
import areasRoutes from './routes/areasRoutes';
import rolesRoutes from './routes/roles.routes';

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
        this.app.use('/herramientas', [authJwt.verifyToken], herramientasRoutes);
        this.app.use('/categorias', [authJwt.verifyToken], categoriasRoutes);
        this.app.use('/subcategorias', [authJwt.verifyToken], subcategoriasRoutes);
        this.app.use('/ubicaciones', [authJwt.verifyToken], ubicacionesRoutes);
        this.app.use('/unidades', [authJwt.verifyToken], unidadesRoutes);
        this.app.use('/estados', [authJwt.verifyToken], estadosRoutes);
        this.app.use('/ingresos', [authJwt.verifyToken], ingresosRoutes);
        this.app.use('/egresos', [authJwt.verifyToken], egresosRoutes);
        this.app.use('/eliminados', [authJwt.verifyToken], eliminadosRoutes);
        this.app.use('/modalidades', [authJwt.verifyToken], modalidadesRoutes);
        this.app.use('/empleados', [authJwt.verifyToken], empleadosRoutes);
        this.app.use('/cargos', [authJwt.verifyToken], cargosRoutes); 
        this.app.use('/productos', [authJwt.verifyToken], productosRoutes);
        this.app.use('/proveedores', [authJwt.verifyToken], proveedoresRoutes);
        this.app.use('/productosProveedores', [authJwt.verifyToken], productosProveedoresRoutes);
        this.app.use('/areas', [authJwt.verifyToken], areasRoutes);
        this.app.use('/roles', [authJwt.verifyToken], rolesRoutes);
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