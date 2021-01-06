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
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const middlewares_1 = require("./middlewares");
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
        this.app.use('/herramientas', middlewares_1.verifyToken, herramientasRoutes_1.default);
        this.app.use('/categorias', middlewares_1.verifyToken, categoriasRoutes_1.default);
        this.app.use('/subcategorias', middlewares_1.verifyToken, subcategoriasRoutes_1.default);
        this.app.use('/ubicaciones', middlewares_1.verifyToken, ubicacionesRoutes_1.default);
        this.app.use('/unidades', middlewares_1.verifyToken, unidadesRoutes_1.default);
        this.app.use('/estados', middlewares_1.verifyToken, estadosRoutes_1.default);
        this.app.use('/ingresos', middlewares_1.verifyToken, ingresosRoutes_1.default);
        this.app.use('/egresos', middlewares_1.verifyToken, egresosRoutes_1.default);
        this.app.use('/eliminados', middlewares_1.verifyToken, eliminadosRoutes_1.default);
        this.app.use('/modalidades', middlewares_1.verifyToken, modalidadesRoutes_1.default);
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
