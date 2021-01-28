"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const herramientasRoutes_1 = __importDefault(require("./routes/herramientasRoutes"));
const categoriasRoutes_1 = __importDefault(require("./routes/categoriasRoutes"));
const subcategoriasRoutes_1 = __importDefault(require("./routes/subcategoriasRoutes"));
const ubicacionesRoutes_1 = __importDefault(require("./routes/ubicacionesRoutes"));
const unidadesRoutes_1 = __importDefault(require("./routes/unidadesRoutes"));
const estadosRoutes_1 = __importDefault(require("./routes/estadosRoutes"));
const ingresosRoutes_1 = __importDefault(require("./routes/ingresosRoutes"));
const egresosRoutes_1 = __importDefault(require("./routes/egresosRoutes"));
const eliminadosRoutes_1 = __importDefault(require("./routes/eliminadosRoutes"));
const modalidadesRoutes_1 = __importDefault(require("./routes/modalidadesRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const middlewares_1 = require("./middlewares");
const empleados_routes_1 = __importDefault(require("./routes/empleados.routes"));
const cargos_routes_1 = __importDefault(require("./routes/cargos.routes"));
const proveedoresRoutes_1 = __importDefault(require("./routes/proveedoresRoutes"));
const productosProveedoresRoutes_1 = __importDefault(require("./routes/productosProveedoresRoutes"));
const areasRoutes_1 = __importDefault(require("./routes/areasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/herramientas', [middlewares_1.authJwt.verifyToken], herramientasRoutes_1.default);
        this.app.use('/categorias', [middlewares_1.authJwt.verifyToken], categoriasRoutes_1.default);
        this.app.use('/subcategorias', [middlewares_1.authJwt.verifyToken], subcategoriasRoutes_1.default);
        this.app.use('/ubicaciones', [middlewares_1.authJwt.verifyToken], ubicacionesRoutes_1.default);
        this.app.use('/unidades', [middlewares_1.authJwt.verifyToken], unidadesRoutes_1.default);
        this.app.use('/estados', [middlewares_1.authJwt.verifyToken], estadosRoutes_1.default);
        this.app.use('/ingresos', [middlewares_1.authJwt.verifyToken], ingresosRoutes_1.default);
        this.app.use('/egresos', [middlewares_1.authJwt.verifyToken], egresosRoutes_1.default);
        this.app.use('/eliminados', [middlewares_1.authJwt.verifyToken], eliminadosRoutes_1.default);
        this.app.use('/modalidades', [middlewares_1.authJwt.verifyToken], modalidadesRoutes_1.default);
        this.app.use('/empleados', [middlewares_1.authJwt.verifyToken], empleados_routes_1.default);
        this.app.use('/cargos', [middlewares_1.authJwt.verifyToken], cargos_routes_1.default);
        this.app.use('/productos', [middlewares_1.authJwt.verifyToken], productosRoutes_1.default);
        this.app.use('/proveedores', [middlewares_1.authJwt.verifyToken], proveedoresRoutes_1.default);
        this.app.use('/productosProveedores', [middlewares_1.authJwt.verifyToken], productosProveedoresRoutes_1.default);
        this.app.use('/areas', [middlewares_1.authJwt.verifyToken], areasRoutes_1.default);
        this.app.use('/auth', auth_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
