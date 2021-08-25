(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgrupo360"] = self["webpackChunkgrupo360"] || []).push([["main"], {
    /***/
    8255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth/auth.guard */
      3870);
      /* harmony import */


      var _auth_roles_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth/roles.guard */
      629);
      /* harmony import */


      var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/login/login.component */
      2282);
      /* harmony import */


      var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/menu/menu.component */
      6534);
      /* harmony import */


      var _shared_sin_auth_sin_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/sin-auth/sin-auth.component */
      6223);
      /* harmony import */


      var _shared_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/usuario/usuario.component */
      5474);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
      }, {
        path: 'menu',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        component: _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent
      }, {
        path: 'usuario/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        component: _shared_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__.UsuarioComponent
      }, {
        path: 'noAuth',
        component: _shared_sin_auth_sin_auth_component__WEBPACK_IMPORTED_MODULE_4__.SinAuthComponent
      }, {
        path: 'inventario',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _auth_roles_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuard],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_modulo_inventario_inventario_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modulo_inventario/inventario.module */
          9956)).then(function (m) {
            return m.InventarioModule;
          });
        },
        data: {
          allowedRoles: [2]
        }
      }, {
        path: 'procura',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _auth_roles_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_modulo_procura_procura_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./modulo_procura/procura.module */
          8738)).then(function (m) {
            return m.ProcuraModule;
          });
        },
        data: {
          allowedRoles: [3]
        }
      }, {
        path: 'administrador',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _auth_roles_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_modulo_administrador_administrador_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./modulo_administrador/administrador.module */
          4988)).then(function (m) {
            return m.AdministradorModule;
          });
        },
        data: {
          allowedRoles: [1]
        }
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__.PreloadAllModules,
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth/auth.service */
      384);
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/navbar/navbar.component */
      4696);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(auth) {
          _classCallCheck(this, _AppComponent);

          this.auth = auth;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.auth.autoLogin();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/login/login.component */
      2282);
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/navbar/navbar.component */
      4696);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _modulo_inventario_inventario_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modulo_inventario/inventario-routing.module */
      7788);
      /* harmony import */


      var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/auth-interceptor.service */
      2458);
      /* harmony import */


      var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/menu/menu.component */
      6534);
      /* harmony import */


      var _shared_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/usuario/usuario.component */
      5474);
      /* harmony import */


      var _shared_sin_auth_sin_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/sin-auth/sin-auth.component */
      6223);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316); // IMPORT DE ICONOSDE FONTAWESOME


      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
          useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_5__.AuthInterceptorService,
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modulo_inventario_inventario_routing_module__WEBPACK_IMPORTED_MODULE_4__.InventarioRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__.MenuComponent, _shared_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_7__.UsuarioComponent, _shared_sin_auth_sin_auth_component__WEBPACK_IMPORTED_MODULE_8__.SinAuthComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modulo_inventario_inventario_routing_module__WEBPACK_IMPORTED_MODULE_4__.InventarioRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule]
        });
      })();
      /***/

    },

    /***/
    2458: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthInterceptorService": function AuthInterceptorService() {
          return (
            /* binding */
            _AuthInterceptorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      3466);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      6958);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      384);

      var _AuthInterceptorService = /*#__PURE__*/function () {
        function _AuthInterceptorService(auth) {
          _classCallCheck(this, _AuthInterceptorService);

          this.auth = auth;
        }

        _createClass(_AuthInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            return this.auth.user.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.exhaustMap)(function (user) {
              if (!user) {
                return next.handle(req);
              }

              var modifiedReq = req.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('x-access-token', user.token)
              });
              return next.handle(modifiedReq);
            }));
          }
        }]);

        return _AuthInterceptorService;
      }();

      _AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
        return new (t || _AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _AuthInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AuthInterceptorService,
        factory: _AuthInterceptorService.ɵfac
      });
      /***/
    },

    /***/
    3870: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      3466);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      3927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      384);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(auth, router) {
          _classCallCheck(this, _AuthGuard);

          this.auth = auth;
          this.router = router;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, router) {
            var _this = this;

            return this.auth.user.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (user) {
              var isAuth = !!user;
              return isAuth ? true : _this.router.createUrlTree(['/login']);
            }));
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    384: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      6491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      8636);
      /* harmony import */


      var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user.model */
      3935);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http, router) {
          _classCallCheck(this, _AuthService);

          this.http = http;
          this.router = router;
          this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
          this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        }

        _createClass(_AuthService, [{
          key: "signIn",
          value: function signIn(cedula, password) {
            var _this2 = this;

            return this.http.post("".concat(this.API_URI, "/auth/signin"), {
              cedula: cedula,
              password: password
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (resData) {
              var expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
              var user = new _user_model__WEBPACK_IMPORTED_MODULE_1__.User(resData.cedula, resData.token, expirationDate, resData.roles);

              _this2.user.next(user);

              _this2.autoLogout(+resData.expiresIn * 1000);

              localStorage.setItem('userData', JSON.stringify(user));

              _this2.router.navigate(['/menu']);
            }));
          }
        }, {
          key: "signUp",
          value: function signUp() {}
        }, {
          key: "logout",
          value: function logout() {
            this.user.next(null);
            this.router.navigate(['/login']);
            localStorage.removeItem('userData');

            if (this.tokenExpirationTimer) {
              clearTimeout(this.tokenExpirationTimer);
            }

            this.tokenExpirationTimer = null;
          }
        }, {
          key: "autoLogout",
          value: function autoLogout(expirationDuration) {
            var _this3 = this;

            this.tokenExpirationTimer = setTimeout(function () {
              _this3.logout();
            }, expirationDuration);
          }
        }, {
          key: "autoLogin",
          value: function autoLogin() {
            var userData = JSON.parse(localStorage.getItem('userData'));

            if (!userData) {
              return;
            }

            var loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_1__.User(userData.cedula, userData._token, new Date(userData._tokenExpirationDate), userData.roles);

            if (loadedUser.token) {
              this.user.next(loadedUser);
              var expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
              this.autoLogout(expirationDuration);
            }
          }
        }, {
          key: "changePassword",
          value: function changePassword(cedula, newPass) {
            return this.http.put("".concat(this.API_URI, "/auth/changePassword"), {
              cedula: cedula,
              password: newPass
            });
          }
        }, {
          key: "hasPermission",
          value: function hasPermission(roles) {
            var _this4 = this;

            console.log(this.user.value.roles);
            var hasPermission = false;
            roles.forEach(function (rol) {
              if (_this4.user.value.roles.includes(rol)) {
                console.log('dentro', rol);
                return hasPermission = true;
              }
            });
            return hasPermission;
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    629: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolesGuard": function RolesGuard() {
          return (
            /* binding */
            _RolesGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      384);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _RolesGuard = /*#__PURE__*/function () {
        function _RolesGuard(auth, router) {
          _classCallCheck(this, _RolesGuard);

          this.auth = auth;
          this.router = router;
        }

        _createClass(_RolesGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var allowedRoles = next.data.allowedRoles;
            var rolesUser = this.auth.user.getValue().roles;

            if (allowedRoles.some(function (r) {
              return rolesUser.includes(r);
            })) {
              return true;
            } else {
              return this.router.createUrlTree(['/noAuth']);
            }
          }
        }]);

        return _RolesGuard;
      }();

      _RolesGuard.ɵfac = function RolesGuard_Factory(t) {
        return new (t || _RolesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _RolesGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _RolesGuard,
        factory: _RolesGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    3935: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "User": function User() {
          return (
            /* binding */
            _User
          );
        }
        /* harmony export */

      });

      var _User = /*#__PURE__*/function () {
        function _User(cedula, _token, _tokenExpirationDate, roles) {
          _classCallCheck(this, _User);

          this.cedula = cedula;
          this._token = _token;
          this._tokenExpirationDate = _tokenExpirationDate;
          this.roles = roles;
        }

        _createClass(_User, [{
          key: "token",
          get: function get() {
            if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
              return null;
            }

            return this._token;
          }
        }]);

        return _User;
      }();
      /***/

    },

    /***/
    8592: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgresarComponent": function EgresarComponent() {
          return (
            /* binding */
            _EgresarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/categorias.service */
      5772);
      /* harmony import */


      var src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/subcategorias.service */
      9786);
      /* harmony import */


      var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/ubicaciones.service */
      697);
      /* harmony import */


      var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/unidades.service */
      9451);
      /* harmony import */


      var src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/inventario-sql.service */
      526);
      /* harmony import */


      var src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/estados.service */
      1472);
      /* harmony import */


      var src_app_services_egresos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/egresos.service */
      7755);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334); //ICONOS FONTAWESOME


      var _c0 = ["f"];

      function EgresarComponent_div_10_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoria_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", categoria_r16.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](categoria_r16.nombre);
        }
      }

      function EgresarComponent_div_10_small_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Ingrese una categor\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function EgresarComponent_div_10_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subcategoria_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", subcategoria_r17.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](subcategoria_r17.nombre);
        }
      }

      function EgresarComponent_div_10_small_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Ingrese una subcategor\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function EgresarComponent_div_10_ng_container_25_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", item_r18.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r18.nombre);
        }
      }

      function EgresarComponent_div_10_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EgresarComponent_div_10_ng_container_25_option_1_Template, 2, 2, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r18.categoria == _r4.value && item_r18.subcategoria == _r7.value && item_r18.estado == "Disponible");
        }
      }

      function EgresarComponent_div_10_small_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Ingrese un item.");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function EgresarComponent_div_10_p_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r13.inventario[ctx_r13.regresarIndice(i_r3)].cantidad, " ", ctx_r13.inventario[ctx_r13.regresarIndice(i_r3)].unidades, "");
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function EgresarComponent_div_10_input_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EgresarComponent_div_10_input_36_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r22.idsEgreso[i_r3].cantidad = $event;
          })("keyup", function EgresarComponent_div_10_input_36_Template_input_keyup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r25.revisarCantidad(ctx_r25.inventario[ctx_r25.regresarIndice(i_r3)].cantidad);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", ctx_r14.inventario[ctx_r14.regresarIndice(i_r3)].cantidad)("ngModel", ctx_r14.idsEgreso[i_r3].cantidad)("name", "cantidadEgreso" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c1, i_r3));
        }
      }

      function EgresarComponent_div_10_input_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "input", 39);
        }

        if (rf & 2) {
          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", ctx_r15.inventario[ctx_r15.regresarIndice(i_r3)].unidades)("name", "unidades" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, i_r3));
        }
      }

      function EgresarComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Categor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "select", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function EgresarComponent_div_10_Template_select_change_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);

            var i_r3 = restoredCtx.index;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r29.borrarId(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, EgresarComponent_div_10_option_11_Template, 2, 2, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, EgresarComponent_div_10_small_12_Template, 2, 0, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Subcategor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "select", 19, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function EgresarComponent_div_10_Template_select_change_16_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);

            var i_r3 = restoredCtx.index;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r31.borrarId(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, EgresarComponent_div_10_option_18_Template, 2, 2, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, EgresarComponent_div_10_small_19_Template, 2, 0, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "select", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EgresarComponent_div_10_Template_select_ngModelChange_23_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);

            var i_r3 = restoredCtx.index;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r32.idsEgreso[i_r3].id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, EgresarComponent_div_10_ng_container_25_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, EgresarComponent_div_10_small_26_Template, 2, 0, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Cantidad actual");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, EgresarComponent_div_10_p_30_Template, 2, 2, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Cantidad a egresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, EgresarComponent_div_10_input_36_Template, 1, 5, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, EgresarComponent_div_10_input_37_Template, 1, 4, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Obra destino");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EgresarComponent_div_10_Template_input_ngModelChange_41_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);

            var i_r3 = restoredCtx.index;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r33.idsEgreso[i_r3].obra = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Responsable");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EgresarComponent_div_10_Template_input_ngModelChange_45_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);

            var i_r3 = restoredCtx.index;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r34.idsEgreso[i_r3].responsable = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.index;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](24);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Item ", i_r3 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", "selectCat" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.categorias);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", "selectSubcat" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.subcategorias);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.idsEgreso[i_r3].id)("name", "idItem" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.inventario);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r10.valid && _r10.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.idsEgreso[i_r3].id != null && ctx_r1.idsEgreso[i_r3].id != undefined && ctx_r1.idsEgreso[i_r3].id != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.idsEgreso[i_r3].id != null && ctx_r1.idsEgreso[i_r3].id != undefined && ctx_r1.idsEgreso[i_r3].id != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.idsEgreso[i_r3].id != null && ctx_r1.idsEgreso[i_r3].id != undefined && ctx_r1.idsEgreso[i_r3].id != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.idsEgreso[i_r3].obra)("name", "obra" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](24, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.idsEgreso[i_r3].responsable)("name", "responsable" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](26, _c1, i_r3));
        }
      }

      var _EgresarComponent = /*#__PURE__*/function () {
        function _EgresarComponent(servicioCategorias, servicioSubcategorias, servicioUbicaciones, servicioUnidades, servicioInventario, servicioEstados, servicioEgresos, router, auth) {
          _classCallCheck(this, _EgresarComponent);

          this.servicioCategorias = servicioCategorias;
          this.servicioSubcategorias = servicioSubcategorias;
          this.servicioUbicaciones = servicioUbicaciones;
          this.servicioUnidades = servicioUnidades;
          this.servicioInventario = servicioInventario;
          this.servicioEstados = servicioEstados;
          this.servicioEgresos = servicioEgresos;
          this.router = router;
          this.auth = auth; //ICONOS FONTAWESOME

          this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faSignOutAlt;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTimesCircle;
          this.faMinusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faMinusCircle;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPlusCircle; // selectTipo: string;
          // idItemElegidoEgreso: string = null;
          //VARIABLES QUE CONTINENE INFO DE BD

          this.inventario = [];
          this.categorias = [];
          this.unidades = [];
          this.ubicaciones = [];
          this.subcategorias = [];
          this.estados = [];
          this.listaEgresos = [];
          this.cantidadEgreso = 0;
          this.valido = true;
          this.idsEgreso = [{
            id: '',
            cantidad: +1,
            obra: null,
            responsable: null
          }];
        }

        _createClass(_EgresarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.servicioCategorias.getCategorias().subscribe(function (res) {
              _this5.categorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioSubcategorias.getSubcategorias().subscribe(function (res) {
              _this5.subcategorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioInventario.getInventario().subscribe(function (res) {
              _this5.inventario = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUnidades.getUnidades().subscribe(function (res) {
              _this5.unidades = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUbicaciones.getUbicaciones().subscribe(function (res) {
              _this5.ubicaciones = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioEstados.getEstados().subscribe(function (res) {
              _this5.estados = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioEgresos.getEgresos().subscribe(function (res) {
              _this5.listaEgresos = res;
            }, function (err) {
              return console.log(err);
            });
          } //BUSCA ITEM A EGRESAR LUEGO DE HABER SELECCINADO

        }, {
          key: "regresarIndice",
          value: function regresarIndice(indice) {
            var _this6 = this;

            return this.inventario.findIndex(function (item) {
              return item.id == _this6.idsEgreso[indice].id;
            });
          }
        }, {
          key: "egresarItems",
          value: function egresarItems() {
            var _this7 = this;

            //CICLO for QUE EGRESA ITEMS MULTIPLES
            var _iterator = _createForOfIteratorHelper(this.idsEgreso),
                _step;

            try {
              var _loop = function _loop() {
                var itemCiclo = _step.value;
                var itemEgreso = Object.assign({}, _this7.inventario.find(function (itemInv) {
                  return itemInv.id == itemCiclo.id;
                }));
                var itemListaEgresos = Object.assign({}, itemEgreso); //CAMPOS FALTANTES EN EGRESO

                itemListaEgresos.obra = itemCiclo.obra;
                itemListaEgresos.cantidad = itemCiclo.cantidad;
                itemEgreso.cantidad = itemEgreso.cantidad - itemCiclo.cantidad;
                itemEgreso.cantidadObra = itemEgreso.cantidadObra + itemCiclo.cantidad;
                itemEgreso.categoria = _this7.categorias.find(function (cat) {
                  return cat.nombre == itemEgreso.categoria;
                }).id;
                itemEgreso.subcategoria = _this7.subcategorias.find(function (subcat) {
                  return subcat.nombre == itemEgreso.subcategoria;
                }).id;
                itemEgreso.ubicacion = _this7.ubicaciones.find(function (ubic) {
                  return ubic.nombre == itemEgreso.ubicacion;
                }).id;
                itemEgreso.unidades = _this7.unidades.find(function (und) {
                  return und.nombre == itemEgreso.unidades;
                }).id;
                itemEgreso.estado = _this7.estados.find(function (est) {
                  return est.nombre == itemEgreso.estado;
                }).id; //COMUNICACION CON SERVICIO (UPDATE)

                _this7.servicioInventario.updateItem(itemEgreso.id, itemEgreso, true).subscribe(function (res) {
                  console.log(res);
                  console.log(res["text"]);

                  _this7.registrarEgreso(+itemEgreso.id, itemListaEgresos);
                }, function (err) {
                  console.log(err);
                });
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.form.reset();
            this.router.navigate(['inventario']);
            this.idsEgreso = [{
              id: "",
              cantidad: 1,
              responsable: null,
              obra: null
            }];
          } //FUNCION QUE REGISTRA EGRESO EN BD CON ID DE ITEM EN INVENTARIO

        }, {
          key: "registrarEgreso",
          value: function registrarEgreso(id, itemListaEgresos) {
            var egreso = {
              nombre_item_egresado: itemListaEgresos.nombre,
              id_categoria_item_egresado: +this.categorias.find(function (cat) {
                return cat.nombre == itemListaEgresos.categoria;
              }).id,
              id_unidad_item_egresado: +this.unidades.find(function (unid) {
                return unid.nombre == itemListaEgresos.unidades;
              }).id,
              cantidad: +itemListaEgresos.cantidad,
              obra: itemListaEgresos.obra,
              cedula_responsable_egreso: this.auth.user.getValue().cedula
            };
            this.servicioEgresos.createEgreso(egreso).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          } //FUNCION PARA BORRAR FORMULARIO

        }, {
          key: "borrarForm",
          value: function borrarForm() {
            this.form.reset();
            this.idsEgreso = [{
              id: '',
              cantidad: null,
              obra: null,
              responsable: null
            }];
            this.router.navigate(['inventario']);
          } //FUNCIONES DE EGRESO MULTIPLE

        }, {
          key: "agregarItem",
          value: function agregarItem() {
            this.idsEgreso.push({
              id: '',
              cantidad: null,
              obra: null,
              responsable: null
            });
          }
        }, {
          key: "restarItem",
          value: function restarItem() {
            this.idsEgreso.pop();
          } //FUNCIUON QUE REVISA CANTIDAD VALIDA

        }, {
          key: "revisarCantidad",
          value: function revisarCantidad(cantActual) {
            var _iterator2 = _createForOfIteratorHelper(this.idsEgreso),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;

                if (item.cantidad > cantActual || item.cantidad == null || item.cantidad <= 0) {
                  this.valido = false;
                  return;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.valido = true;
          }
        }, {
          key: "borrarId",
          value: function borrarId(indice) {
            this.idsEgreso[indice].id = '';
          }
        }]);

        return _EgresarComponent;
      }();

      _EgresarComponent.ɵfac = function EgresarComponent_Factory(t) {
        return new (t || _EgresarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_0__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_1__.SubcategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_2__.UbicacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_3__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_4__.InventarioSQLService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__.EstadosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_egresos_service__WEBPACK_IMPORTED_MODULE_6__.EgresosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService));
      };

      _EgresarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _EgresarComponent,
        selectors: [["app-egresar"]],
        viewQuery: function EgresarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 26,
        vars: 7,
        consts: [[1, "margin-top-form"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-egresar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-2"], ["f", "ngForm"], [4, "ngFor", "ngForOf"], [1, "form-footer-style"], [1, "modal-footer"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "icon"], ["type", "button", 1, "btn", "btn-secondary", 3, "hidden", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], [1, "container", "mt-2"], [1, "row", "mt-3", "mb-4"], [1, "col-3"], ["required", "", "ngModel", "", 1, "form-select", "mt-2", 3, "name", "change"], ["selectCat", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["selectSubcat", "ngModel"], ["required", "", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["selectItem", "ngModel"], [1, "col-3", "mb-2"], ["for", "exampleInputEmail1"], [4, "ngIf"], [1, "row", "mb-4"], [1, "col-4"], [1, "input-group"], ["onkeypress", "return event.charCode >= 48", "min", "1", "type", "number", "class", "form-control mt-2", 3, "max", "ngModel", "name", "ngModelChange", "keyup", 4, "ngIf"], ["disabled", "", "type", "text", "ngModel", "", "class", "form-control mt-2", 3, "placeholder", "name", 4, "ngIf"], [1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], [3, "value"], [1, "text-danger"], [3, "value", 4, "ngIf"], ["onkeypress", "return event.charCode >= 48", "min", "1", "type", "number", 1, "form-control", "mt-2", 3, "max", "ngModel", "name", "ngModelChange", "keyup"], ["disabled", "", "type", "text", "ngModel", "", 1, "form-control", "mt-2", 3, "placeholder", "name"]],
        template: function EgresarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Egresar Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, EgresarComponent_div_10_Template, 46, 28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EgresarComponent_Template_button_click_14_listener() {
              return ctx.agregarItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " M\xE1s Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EgresarComponent_Template_button_click_17_listener() {
              return ctx.restarItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Menos Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EgresarComponent_Template_button_click_20_listener() {
              return ctx.borrarForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EgresarComponent_Template_button_click_23_listener() {
              return ctx.egresarItems();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Egresar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.idsEgreso);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faPlusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.idsEgreso.length == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faMinusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.valido || !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faSignOutAlt);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor],
        styles: [".color-contraste[_ngcontent-%COMP%] {\r\n    background-color: gainsboro;\r\n}\r\n\r\n.header-color-egresar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #f0b619, #eee348 );\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVncmVzYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBLGtCQUFrQjtBQUNsQjtJQUNJLHFEQUFxRDtJQUNyRCxZQUFZO0FBQ2hCIiwiZmlsZSI6ImVncmVzYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1jb250cmFzdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG59XHJcbi8qSEVBREVSIERFIEZPUk1TKi9cclxuLmhlYWRlci1jb2xvci1lZ3Jlc2Fye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjBiNjE5LCAjZWVlMzQ4ICk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    2032: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgresosComponent": function EgresosComponent() {
          return (
            /* binding */
            _EgresosComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var html2pdf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! html2pdf.js */
      6791);
      /* harmony import */


      var html2pdf_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_egresos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/egresos.service */
      7755);
      /* harmony import */


      var _services_categorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/categorias.service */
      5772);
      /* harmony import */


      var src_app_services_eliminados_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/eliminados.service */
      4466);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function EgresosComponent_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", cat_r11.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cat_r11.nombre);
        }
      }

      function EgresosComponent_ng_container_43_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var egreso_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 7, egreso_r12.nombre), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](egreso_r12.categoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", egreso_r12.cantidad, " ", egreso_r12.unidad, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](egreso_r12.obra);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](egreso_r12.responsable);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 9, egreso_r12.fecha, "short"));
        }
      }

      function EgresosComponent_ng_container_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EgresosComponent_ng_container_43_tr_1_Template, 15, 12, "tr", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var egreso_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (egreso_r12.nombre.toLocaleLowerCase().includes(_r0.value.toLowerCase()) || _r0.value == "") && (egreso_r12.categoria == _r1.value || _r1.value == "") && (egreso_r12.responsable.toLocaleLowerCase().includes(_r4.value.toLowerCase()) || _r4.value == "") && (egreso_r12.obra.toLocaleLowerCase().includes(_r3.value.toLowerCase()) || _r3.value == ""));
        }
      }

      function EgresosComponent_option_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", cat_r15.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cat_r15.nombre);
        }
      }

      function EgresosComponent_ng_container_76_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eliminado_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 6, eliminado_r16.nombre), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", eliminado_r16.categoria, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", eliminado_r16.cantidad, " ", eliminado_r16.unidad, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", eliminado_r16.responsable, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 8, eliminado_r16.fecha, "short"), " ");
        }
      }

      function EgresosComponent_ng_container_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EgresosComponent_ng_container_76_tr_1_Template, 13, 11, "tr", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var eliminado_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](53);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (eliminado_r16.nombre.toLocaleLowerCase().includes(_r6.value.toLocaleLowerCase()) || _r6.value == "") && (eliminado_r16.categoria.includes(_r7.value) || _r7.value == null));
        }
      }

      function EgresosComponent_ng_container_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var egreso_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 7, egreso_r19.nombre));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](egreso_r19.categoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", egreso_r19.cantidad, " ", egreso_r19.unidad, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](egreso_r19.obra);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](egreso_r19.responsable);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 9, egreso_r19.fecha, "short"));
        }
      }

      var _EgresosComponent = /*#__PURE__*/function () {
        function _EgresosComponent(servicioEgresos, servicioCategorias, servicioEliminados) {
          _classCallCheck(this, _EgresosComponent);

          this.servicioEgresos = servicioEgresos;
          this.servicioCategorias = servicioCategorias;
          this.servicioEliminados = servicioEliminados;
          this.egresos = [];
          this.categorias = [];
          this.oculto = true;
          this.listaEliminados = [];
          this.faFileDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFileDownload;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimesCircle;
        }

        _createClass(_EgresosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            // DESCARGA DE INFORMACION DE BD, E INYECCION EN VARIABLES LOCALES
            this.servicioEgresos.getEgresos().subscribe(function (res) {
              _this8.egresos = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioCategorias.getCategorias().subscribe(function (res) {
              _this8.categorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioEliminados.getEliminados().subscribe(function (res) {
              _this8.listaEliminados = res;
            }, function (err) {
              return console.log(err);
            });
          } //SE DESCARGA EL PDF DE EGRESOS

        }, {
          key: "descargarPDF",
          value: function descargarPDF() {
            var opciones = {
              margin: 1,
              filename: 'Egresos.pdf',
              image: {
                type: 'jpeg',
                quality: 1
              },
              html2canvas: {},
              jsPDF: {
                unit: 'cm',
                format: 'letter',
                orientation: 'portrait'
              }
            };
            var contenido = document.getElementById('elemento-a-exportar');
            html2pdf_js__WEBPACK_IMPORTED_MODULE_0__().from(contenido).set(opciones).save();
          }
        }]);

        return _EgresosComponent;
      }();

      _EgresosComponent.ɵfac = function EgresosComponent_Factory(t) {
        return new (t || _EgresosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_egresos_service__WEBPACK_IMPORTED_MODULE_1__.EgresosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_eliminados_service__WEBPACK_IMPORTED_MODULE_3__.EliminadosService));
      };

      _EgresosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _EgresosComponent,
        selectors: [["app-egresos"]],
        decls: 112,
        vars: 8,
        consts: [[1, "container"], ["data-bs-toggle", "modal", "data-bs-target", "#pdfEgresos", 1, "btn", "btn-warning", "float-end"], [3, "icon"], [1, "row"], [1, "table", "shadow", "table-striped"], [1, "thead", "bg-warning", "text-white"], ["scope", "col"], ["ngModel", "", "type", "text", "placeholder", "Filtro por nombre", 1, "w-75", "form-control", "form-control-sm"], ["filtroNombre", "ngModel"], ["ngModel", "", "name", "filtroCategoria", 1, "form-select", "form-select-sm"], ["filtroCategoria", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["ngModel", "", "type", "text", "placeholder", "Filtro por obra", 1, "w-75", "form-control", "form-control-sm"], ["filtroObra", "ngModel"], ["ngModel", "", "type", "text", "placeholder", "Filtro por responsable", 1, "w-75", "form-control", "form-control-sm"], ["filtroResponsable", "ngModel"], [1, "thead", "bg-warning"], [4, "ngFor", "ngForOf"], [1, "thead", "bg-danger", "text-white"], ["ngModel", "", "type", "text", "placeholder", "Filtro por nombre eliminados", 1, "w-75", "form-control", "form-control-sm"], ["filtroNombreEliminados", "ngModel"], ["ngModel", "", "name", "filtroCategoriaEliinados", 1, "form-select", "form-select-sm"], ["filtroCategoriaEliminados", "ngModel"], ["id", "pdfEgresos", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["role", "group", 1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-secondary"], ["id", "elemento-a-exportar", 1, "modal-body"], [1, "table", "table-sm", "letras"], [3, "value"], ["scope", "row", "class", "bg-light linea-tabla", 4, "ngIf"], ["scope", "row", 1, "bg-light", "linea-tabla"]],
        template: function EgresosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Exportar a PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Egresos");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "thead", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Categor\xEDa (Todas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, EgresosComponent_option_19_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "thead", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Obra");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Responsable");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Fecha de Egreso");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, EgresosComponent_ng_container_43_Template, 2, 1, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Eliminados");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "thead", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "input", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "select", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Categor\xEDa (Todas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, EgresosComponent_option_59_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "thead", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Responsable");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Fecha de Eliminaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, EgresosComponent_ng_container_76_Template, 2, 1, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "h5", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Exportar a PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EgresosComponent_Template_button_click_84_listener() {
              return ctx.descargarPDF();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " Exportar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, " Cerrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Egresos");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "table", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "thead", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Obra");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Responsable");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Fecha Egreso");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](111, EgresosComponent_ng_container_111_Template, 16, 12, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.egresos);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listaEliminados);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.egresos);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: [".letras[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVncmVzb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZWdyZXNvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldHJhcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    1690: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IngresarComponent": function IngresarComponent() {
          return (
            /* binding */
            _IngresarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/subcategorias.service */
      9786);
      /* harmony import */


      var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/ubicaciones.service */
      697);
      /* harmony import */


      var src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/inventario-sql.service */
      526);
      /* harmony import */


      var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/categorias.service */
      5772);
      /* harmony import */


      var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/unidades.service */
      9451);
      /* harmony import */


      var src_app_services_ingresos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/ingresos.service */
      8511);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334); //ICONOS FONTAWESOME


      var _c0 = ["f"];

      function IngresarComponent_div_10_div_7_small_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ingrese un nombre.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function IngresarComponent_div_10_div_7_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoria_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", categoria_r22.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](categoria_r22.nombre);
        }
      }

      function IngresarComponent_div_10_div_7_small_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ingrese una categoria.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function IngresarComponent_div_10_div_7_option_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subcategoria_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", subcategoria_r23.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subcategoria_r23.nombre);
        }
      }

      function IngresarComponent_div_10_div_7_small_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ingrese una subcategoria.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function IngresarComponent_div_10_div_7_option_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidad_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", unidad_r24.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](unidad_r24.nombre);
        }
      }

      function IngresarComponent_div_10_div_7_small_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ingrese una cantidad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function IngresarComponent_div_10_div_7_small_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ingrese una unidad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function IngresarComponent_div_10_div_7_option_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ubicacion_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ubicacion_r25.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ubicacion_r25.nombre);
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function IngresarComponent_div_10_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_7_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r26.nuevosItems[i_r3].nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, IngresarComponent_div_10_div_7_small_7_Template, 2, 0, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Categor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "select", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_7_Template_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r29.nuevosItems[i_r3].categoria = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, IngresarComponent_div_10_div_7_option_13_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, IngresarComponent_div_10_div_7_small_14_Template, 2, 0, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Subcategor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "select", 31, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_7_Template_select_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r31.nuevosItems[i_r3].subcategoria = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, IngresarComponent_div_10_div_7_option_21_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, IngresarComponent_div_10_div_7_small_22_Template, 3, 0, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Serial");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_7_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r33.nuevosItems[i_r3].serial = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_7_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r35.nuevosItems[i_r3].precio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Cantidad y Unidades");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "input", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_7_Template_input_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r37.nuevosItems[i_r3].cantidad = $event;
          })("keyup", function IngresarComponent_div_10_div_7_Template_input_keyup_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r39.revisarCantidad();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "select", 45, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_7_Template_select_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r40.nuevosItems[i_r3].unidades = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, IngresarComponent_div_10_div_7_option_44_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, IngresarComponent_div_10_div_7_small_45_Template, 3, 0, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, IngresarComponent_div_10_div_7_small_46_Template, 2, 0, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Ubicaci\xF3n en almac\xE9n");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "select", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_7_Template_select_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r42.nuevosItems[i_r3].ubicacion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, IngresarComponent_div_10_div_7_option_51_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Vencimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_7_Template_input_ngModelChange_56_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r44.nuevosItems[i_r3].vencimiento = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Descripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](41);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](43);

          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.nuevosItems[i_r3].nombre)("name", "nombre" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](27, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.nuevosItems[i_r3].categoria)("name", "cat" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](29, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.categorias);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r9.valid && _r9.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.nuevosItems[i_r3].subcategoria)("name", "subcat" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](31, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.subcategorias);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r12.valid && _r12.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.nuevosItems[i_r3].serial)("name", "serial" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](33, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.nuevosItems[i_r3].precio)("name", "precio" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](35, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.nuevosItems[i_r3].cantidad)("name", "cantidad" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](37, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.nuevosItems[i_r3].unidades)("name", "unidades" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](39, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.unidades);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r16.valid && _r16.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r17.valid && _r17.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.nuevosItems[i_r3].ubicacion)("name", "ubicacion" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](41, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.ubicaciones);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.nuevosItems[i_r3].vencimiento)("name", "vencimiento" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](43, _c1, i_r3));
        }
      }

      function IngresarComponent_div_10_div_8_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var categoria_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", categoria_r61.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](categoria_r61.nombre);
        }
      }

      function IngresarComponent_div_10_div_8_small_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ingrese una categoria.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function IngresarComponent_div_10_div_8_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subcategoria_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", subcategoria_r62.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subcategoria_r62.nombre);
        }
      }

      function IngresarComponent_div_10_div_8_small_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ingrese una subcategoria.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function IngresarComponent_div_10_div_8_ng_container_23_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", item_r63.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r63.nombre);
        }
      }

      function IngresarComponent_div_10_div_8_ng_container_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, IngresarComponent_div_10_div_8_ng_container_23_option_1_Template, 2, 2, "option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);

          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r63.categoria == _r47.value && item_r63.subcategoria == _r51.value);
        }
      }

      function IngresarComponent_div_10_div_8_small_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Seleccione un nombre.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function IngresarComponent_div_10_div_8_input_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 64);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);

          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx_r59.regresarItem(_r55.value).unidades)("name", "unidades" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, i_r3));
        }
      }

      function IngresarComponent_div_10_div_8_small_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ingrese una cantidad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function IngresarComponent_div_10_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Categor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "select", 31, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_8_Template_select_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r67.nuevosItems[i_r3].categoria = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, IngresarComponent_div_10_div_8_ng_container_8_Template, 3, 2, "ng-container", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, IngresarComponent_div_10_div_8_small_9_Template, 2, 0, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Subcategor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "select", 31, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_8_Template_select_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r70.nuevosItems[i_r3].subcategoria = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, IngresarComponent_div_10_div_8_option_16_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, IngresarComponent_div_10_div_8_small_17_Template, 3, 0, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "select", 58, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_8_Template_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r72.nuevosItems[i_r3].id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, IngresarComponent_div_10_div_8_ng_container_23_Template, 2, 1, "ng-container", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, IngresarComponent_div_10_div_8_small_24_Template, 2, 0, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Cantidad a Ingresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "input", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_8_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r74.nuevosItems[i_r3].cantidad = $event;
          })("keyup", function IngresarComponent_div_10_div_8_Template_input_keyup_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r76.revisarCantidad();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, IngresarComponent_div_10_div_8_input_32_Template, 1, 4, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, IngresarComponent_div_10_div_8_small_33_Template, 3, 0, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_8_Template_input_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r77.nuevosItems[i_r3].precio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Vencimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_div_8_Template_input_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r79.nuevosItems[i_r3].vencimiento = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Descripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function IngresarComponent_div_10_div_8_Template_input_keyup_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r81.actDescripcion($event, i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);

          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);

          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](31);

          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r6.nuevosItems[i_r3].categoria)("name", "cat" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](22, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r6.categorias);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r47.valid && _r47.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r6.nuevosItems[i_r3].subcategoria)("name", "subcat" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](24, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r6.subcategorias);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r51.valid && _r51.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r6.nuevosItems[i_r3].id)("name", "nombre" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](26, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r6.inventario);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r55.valid && _r55.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r6.nuevosItems[i_r3].cantidad)("name", "cantidad" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](28, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r55.value != undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r58.valid && _r58.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r6.nuevosItems[i_r3].precio)("name", "precio" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](30, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r6.nuevosItems[i_r3].vencimiento)("name", "vencimiento" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](32, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", _r55.value != undefined ? ctx_r6.regresarItem(_r55.value).descripcion : "")("name", "descripcion" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](34, _c1, i_r3));
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "color-contraste": a0
        };
      };

      function IngresarComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function IngresarComponent_div_10_Template_input_ngModelChange_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r85);

            var i_r3 = restoredCtx.index;

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r84.itemExistenteVar[i_r3] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Item Existente");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, IngresarComponent_div_10_div_7_Template, 62, 45, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, IngresarComponent_div_10_div_8_Template, 50, 36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c2, i_r3 % 2 != 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.itemExistenteVar[i_r3])("name", "checkboxExistente" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.itemExistenteVar[i_r3]);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.itemExistenteVar[i_r3]);
        }
      }

      var _IngresarComponent = /*#__PURE__*/function () {
        function _IngresarComponent(servicioSubcategorias, servicioUbicaciones, inventarioService, servicioCategorias, servicioUnidades, ingresosService, router, auth) {
          _classCallCheck(this, _IngresarComponent);

          this.servicioSubcategorias = servicioSubcategorias;
          this.servicioUbicaciones = servicioUbicaciones;
          this.inventarioService = inventarioService;
          this.servicioCategorias = servicioCategorias;
          this.servicioUnidades = servicioUnidades;
          this.ingresosService = ingresosService;
          this.router = router;
          this.auth = auth;
          this.itemExistenteVar = []; //ICONOS FONTAWESOME

          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTimesCircle;
          this.faMinusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faMinusCircle;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPlusCircle;
          this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faSignInAlt;
          this.categorias = [];
          this.subcategorias = [];
          this.ubicaciones = [];
          this.unidades = [];
          this.inventario = [];
          this.nombre = "";
          this.valido = true;
          this.nuevosItems = [{
            id: null,
            nombre: null,
            categoria: null,
            cantidad: null,
            ubicacion: null,
            vencimiento: null,
            serial: null,
            precio: null,
            unidades: null,
            estado: "Disponible"
          }];
        }

        _createClass(_IngresarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.servicioCategorias.getCategorias().subscribe(function (res) {
              return _this9.categorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioSubcategorias.getSubcategorias().subscribe(function (res) {
              return _this9.subcategorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUbicaciones.getUbicaciones().subscribe(function (res) {
              return _this9.ubicaciones = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUnidades.getUnidades().subscribe(function (res) {
              return _this9.unidades = res;
            }, function (err) {
              return console.log(err);
            });
            this.inventarioService.getInventario().subscribe(function (res) {
              return _this9.inventario = res;
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this10 = this;

            var indice = 0;

            var _iterator3 = _createForOfIteratorHelper(this.nuevosItems),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;

                if (!this.itemExistenteVar[indice]) {
                  this.inventarioService.createItem(item).subscribe(function (res) {
                    console.log(res["text"]);

                    _this10.registrarIngreso(res["id"], item, 1);
                  }, function (err) {
                    console.log(err);
                  });
                } else if (this.itemExistenteVar[indice]) {
                  var itemOriginal = this.inventario.find(function (itemInventario) {
                    return itemInventario.id == item.id;
                  });
                  var itemModificar = {
                    cantidad: itemOriginal.cantidad + item.cantidad,
                    precio: itemOriginal.precio + item.precio,
                    descripcion: this.nuevosItems[indice].descripcion
                  };
                  this.inventarioService.updateItem(itemOriginal.id, itemModificar, false).subscribe(function (res) {
                    console.log(res);

                    _this10.registrarIngreso(item.id, {
                      cantidad: item.cantidad,
                      precio: item.precio,
                      categoria: item.categoria,
                      unidades: item.unidades,
                      nombre: item.nombre
                    }, 3);
                  }, function (err) {
                    console.log(err);
                  });
                }

                indice++;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.router.navigate(['inventario']);
          }
        }, {
          key: "registrarIngreso",
          value: function registrarIngreso(id, item, modalidad) {
            var ingreso = {
              nombre_item_ingresado: item.nombre,
              id_categoria_item_ingresado: +item.categoria,
              id_unidad_item_ingresado: +item.unidades,
              id_modalidad: +modalidad,
              cantidad: +item.cantidad,
              cedula_responsable_ingreso: this.auth.user.getValue().cedula,
              precio: +item.precio
            };
            this.ingresosService.createIngreso(ingreso).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          } //FUNCION PARA BORRAR FORMULARIO

        }, {
          key: "borrarForm",
          value: function borrarForm() {
            this.form.reset();
            this.nuevosItems = [{
              nombre: null,
              categoria: null,
              cantidad: null,
              ubicacion: null,
              vencimiento: null,
              serial: null,
              precio: null,
              unidades: null,
              estado: "Disponible"
            }];
            this.router.navigate(['inventario']);
          }
        }, {
          key: "agregarItem",
          value: function agregarItem() {
            this.nuevosItems.push({
              nombre: null,
              categoria: null,
              cantidad: null,
              ubicacion: null,
              vencimiento: null,
              serial: null,
              precio: null,
              unidades: null,
              estado: "Disponible"
            });
          }
        }, {
          key: "revisarCantidad",
          value: function revisarCantidad() {
            var _iterator4 = _createForOfIteratorHelper(this.nuevosItems),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;

                if (item.cantidad <= 0) {
                  this.valido = false;
                  return;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this.valido = true;
          }
        }, {
          key: "regresarItem",
          value: function regresarItem(id) {
            return this.inventario.find(function (itemInv) {
              return itemInv.id == id;
            });
          }
        }, {
          key: "actDescripcion",
          value: function actDescripcion(valor, index) {
            this.nuevosItems[index].descripcion = valor.target.value;
          }
        }]);

        return _IngresarComponent;
      }();

      _IngresarComponent.ɵfac = function IngresarComponent_Factory(t) {
        return new (t || _IngresarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_0__.SubcategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_1__.UbicacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_2__.InventarioSQLService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_ingresos_service__WEBPACK_IMPORTED_MODULE_5__.IngresosService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
      };

      _IngresarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _IngresarComponent,
        selectors: [["app-ingresar"]],
        viewQuery: function IngresarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 26,
        vars: 8,
        consts: [[1, "margin-top-form"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-agregar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-2"], ["f", "ngForm"], ["class", "pt-2", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "form-footer-style"], [1, "modal-footer"], [1, "btn-group"], ["disabled", "", "type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "icon"], ["type", "button", "disabled", "", 1, "btn", "btn-secondary", 3, "hidden", "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "pt-2", 3, "ngClass"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", 3, "ngModel", "name", "ngModelChange"], ["itemExistente", "ngModel"], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], ["class", "", 4, "ngIf"], [4, "ngIf"], [1, ""], [1, "row", "mt-3", "mb-4"], [1, "col-4"], ["required", "", "type", "text", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["nombre", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "col-2"], ["for", "exampleFormControlSelect1"], ["required", "", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["cat", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["subcat", "ngModel", "subcat[i]", "ngModel"], ["type", "text", "aria-describedby", "emailHelp", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], [1, "input-group"], ["onkeypress", "return event.charCode >= 46", "min", "0", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], [1, "input-group-append"], ["id", "basic-addon1", 1, "input-group-text", "mt-2"], [1, "row", "mb-4"], [1, "col-3"], ["for", "exampleInputPassword1"], ["onkeypress", "return event.charCode >= 46", "min", "1", "required", "", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange", "keyup"], ["cantidad", "ngModel"], ["required", "", "type", "text", "placeholder", "0", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["unidadX", "ngModel"], ["type", "text", "aria-describedby", "emailHelp", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], [1, "form-group"], ["type", "date", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], [1, "col-5"], [1, "form-control", "mt-2"], [1, "text-danger"], [3, "value"], [1, "row", "mt-3", "mb-3"], ["cat", "ngModel", "cat[i]", "ngModel"], [4, "ngFor", "ngForOf"], [1, "col-6"], ["required", "", "type", "text", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], [1, "row", "mb-3"], ["disabled", "", "type", "text", "ngModel", "", "class", "form-control mt-2", 3, "placeholder", "name", 4, "ngIf"], ["disabled", "", "type", "date", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], [1, "form-control", "mt-2", 3, "ngModel", "name", "keyup"], [3, "value", 4, "ngIf"], ["disabled", "", "type", "text", "ngModel", "", 1, "form-control", "mt-2", 3, "placeholder", "name"]],
        template: function IngresarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Ingreso");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "form", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, IngresarComponent_div_10_Template, 9, 9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function IngresarComponent_Template_button_click_14_listener() {
              return ctx.agregarItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " M\xE1s Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function IngresarComponent_Template_button_click_17_listener() {
              return ctx.nuevosItems.pop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Menos Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function IngresarComponent_Template_button_click_20_listener() {
              return ctx.borrarForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function IngresarComponent_Template_button_click_23_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Ingresar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.nuevosItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faPlusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.nuevosItems.length == 1)("disabled", ctx.nuevosItems.length == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faMinusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !_r0.valid || !ctx.valido);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faSignInAlt);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"]],
        styles: [".color-contraste[_ngcontent-%COMP%] {\r\n  background-color: gainsboro;\r\n}\r\n\r\n.header-color-agregar[_ngcontent-%COMP%]{\r\n  background: linear-gradient(90deg, #3b8b4c, #51d17b );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3Jlc2FyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQSxrQkFBa0I7QUFDbEI7RUFDRSxxREFBcUQ7QUFDdkQiLCJmaWxlIjoiaW5ncmVzYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1jb250cmFzdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxufVxyXG4vKkhFQURFUiBERSBGT1JNUyovXHJcbi5oZWFkZXItY29sb3ItYWdyZWdhcntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzYjhiNGMsICM1MWQxN2IgKTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    1556: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IngresosComponent": function IngresosComponent() {
          return (
            /* binding */
            _IngresosComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var html2pdf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! html2pdf.js */
      6791);
      /* harmony import */


      var html2pdf_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_ingresos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/ingresos.service */
      8511);
      /* harmony import */


      var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/categorias.service */
      5772);
      /* harmony import */


      var src_app_services_modalidades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/modalidades.service */
      3567);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function IngresosComponent_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", cat_r7.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cat_r7.nombre);
        }
      }

      function IngresosComponent_option_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mod_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", mod_r8.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mod_r8.nombre);
        }
      }

      function IngresosComponent_ng_container_54_tr_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ingreso_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ingreso_r9.precio), " ");
        }
      }

      function IngresosComponent_ng_container_54_tr_1_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " N/A ");
        }
      }

      function IngresosComponent_ng_container_54_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, IngresosComponent_ng_container_54_tr_1_div_9_Template, 3, 3, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, IngresosComponent_ng_container_54_tr_1_ng_template_10_Template, 1, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);

          var ingreso_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 9, ingreso_r9.nombre));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ingreso_r9.categoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ingreso_r9.cantidad, " ", ingreso_r9.unidad, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ingreso_r9.precio != null && ingreso_r9.precio != 0 && ingreso_r9.modalidad != "Reingreso")("ngIfElse", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 11, ingreso_r9.fecha, "dd-MM-yyyy h:m a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 14, ingreso_r9.responsable));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ingreso_r9.modalidad);
        }
      }

      function IngresosComponent_ng_container_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, IngresosComponent_ng_container_54_tr_1_Template, 20, 16, "tr", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ingreso_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ingreso_r9.nombre.toLocaleLowerCase().includes(_r0.value.toLowerCase()) || _r0.value == "") && (ingreso_r9.categoria == _r1.value || _r1.value == "") && (ingreso_r9.modalidad.toLocaleLowerCase().includes(_r3.value.toLowerCase()) || _r3.value == ""));
        }
      }

      function IngresosComponent_ng_container_92_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ingreso_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ingreso_r16.precio), " ");
        }
      }

      function IngresosComponent_ng_container_92_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " N/A ");
        }
      }

      function IngresosComponent_ng_container_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, IngresosComponent_ng_container_92_div_10_Template, 3, 3, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, IngresosComponent_ng_container_92_ng_template_11_Template, 1, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ingreso_r16 = ctx.$implicit;

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 9, ingreso_r16.nombre));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ingreso_r16.categoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ingreso_r16.cantidad, " ", ingreso_r16.unidad, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ingreso_r16.precio != null && ingreso_r16.precio != 0 && ingreso_r16.modalidad != "Reingreso")("ngIfElse", _r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ingreso_r16.responsable);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ingreso_r16.modalidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 11, ingreso_r16.fecha, "short"));
        }
      }

      var _IngresosComponent = /*#__PURE__*/function () {
        function _IngresosComponent(servicioIngresos, servicioCategorias, servicioModalidades) {
          _classCallCheck(this, _IngresosComponent);

          this.servicioIngresos = servicioIngresos;
          this.servicioCategorias = servicioCategorias;
          this.servicioModalidades = servicioModalidades;
          this.ingresos = [];
          this.categorias = [];
          this.modalidades = [];
          this.oculto = true;
          this.faFileDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFileDownload;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimesCircle;
        }

        _createClass(_IngresosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            // DESCARGA DE INFORMACION DE BD, E INYECCION EN VARIABLES LOCALES
            this.servicioIngresos.getIngresos().subscribe(function (res) {
              _this11.ingresos = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioCategorias.getCategorias().subscribe(function (res) {
              _this11.categorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioModalidades.getModalidades().subscribe(function (res) {
              _this11.modalidades = res;
            }, function (err) {
              return console.log(err);
            });
          } //FUNCION DESCARGAR PDF DE INGRESOS

        }, {
          key: "descargarPDF",
          value: function descargarPDF() {
            this.oculto = false;
            var opciones = {
              margin: 1,
              filename: 'Ingresos.pdf',
              image: {
                type: 'jpeg',
                quality: 1
              },
              html2canvas: {},
              jsPDF: {
                unit: 'cm',
                format: 'letter',
                orientation: 'portrait'
              }
            };
            var contenido = document.getElementById('elemento-a-exportar');
            html2pdf_js__WEBPACK_IMPORTED_MODULE_0__().from(contenido).set(opciones).save();
            this.oculto = true;
          }
        }, {
          key: "dateAString",
          value: function dateAString(date) {
            var stringFecha = "";
            stringFecha += date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getUTCDate();
            console.log(stringFecha);
            return stringFecha;
          } //FUNCIONES DE FILTRO POR FECHA (NO SIRVIERON)

        }, {
          key: "changeFirstInput",
          value: function changeFirstInput(e) {
            var _this12 = this;

            this.fechaDesde = e.target.value;
            console.log(this.ingresos.filter(function (o) {
              return new Date(o.date) >= _this12.fechaDesde && new Date(o.date) <= _this12.fechaHasta;
            }));
          }
        }, {
          key: "changeSecondInput",
          value: function changeSecondInput(e) {
            var _this13 = this;

            this.fechaHasta = e.target.value;
            console.log(this.ingresos.filter(function (o) {
              return new Date(o.date) >= _this13.fechaDesde && new Date(o.date) <= _this13.fechaHasta;
            }));
          }
        }]);

        return _IngresosComponent;
      }();

      _IngresosComponent.ɵfac = function IngresosComponent_Factory(t) {
        return new (t || _IngresosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_ingresos_service__WEBPACK_IMPORTED_MODULE_1__.IngresosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_modalidades_service__WEBPACK_IMPORTED_MODULE_3__.ModalidadesService));
      };

      _IngresosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _IngresosComponent,
        selectors: [["app-ingresos"]],
        decls: 93,
        vars: 10,
        consts: [[1, "container"], ["data-bs-toggle", "modal", "data-bs-target", "#pdfIngresos", 1, "btn", "btn-primary", "float-end"], [3, "icon"], [1, "row"], [1, "table", "shadow", "table-striped"], ["data-html2canvas-ignore", "", 1, "thead", "bg-primary", "text-white"], ["scope", "col"], ["ngModel", "", "type", "text", "placeholder", "Filtro por nombre", 1, "w-75", "form-control", "form-control-sm"], ["filtroNombre", "ngModel"], ["ngModel", "", "name", "filtroCategoria", 1, "form-select", "form-select-sm"], ["filtroCategoria", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["colspan", "3"], [1, "col"], ["type", "date", "value", "", "name", "fechaDesde", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "change"], [1, "col-2"], ["type", "date", "name", "fechaHasta", 1, "form-control", "form-control-sm", 3, "ngModel", "value", "ngModelChange"], ["ngModel", "", "name", "filtroModalidad", 1, "form-select", "form-select-sm"], ["filtroModalidad", "ngModel"], [1, "thead", "bg-primary", "text-white"], [4, "ngFor", "ngForOf"], ["id", "pdfIngresos", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["role", "group", 1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-secondary"], ["id", "elemento-a-exportar", 1, "modal-body"], [1, "table", "table-sm", "letras"], [3, "value"], ["scope", "row", "class", "bg-light linea-tabla", 4, "ngIf"], ["scope", "row", 1, "bg-light", "linea-tabla"], [4, "ngIf", "ngIfElse"], ["sinPrecio", ""]],
        template: function IngresosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Exportar a PDF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Ingresos");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "thead", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Categor\xEDa (Todas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, IngresosComponent_option_19_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Desde:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function IngresosComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.fechaDesde = $event;
            })("change", function IngresosComponent_Template_input_change_26_listener($event) {
              return ctx.changeFirstInput($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Hasta:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function IngresosComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.fechaHasta = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "select", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Modalidad (Todas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, IngresosComponent_option_36_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "thead", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Fecha Ingreso");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Responsable");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Modalidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, IngresosComponent_ng_container_54_Template, 2, 1, "ng-container", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "h5", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Exportar a PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IngresosComponent_Template_button_click_62_listener() {
              return ctx.descargarPDF();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, " Exportar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, " Cerrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Ingresos");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "table", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "thead", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Responsable");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Modalidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Fecha Ingreso");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](92, IngresosComponent_ng_container_92_Template, 20, 14, "ng-container", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.fechaDesde);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.fechaHasta)("value", ctx.fechaHasta);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.modalidades);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ingresos);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ingresos);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe],
        styles: [".letras[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3Jlc29zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImluZ3Jlc29zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGV0cmFzIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    8093: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventarioBaseComponent": function InventarioBaseComponent() {
          return (
            /* binding */
            _InventarioBaseComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _InventarioBaseComponent = /*#__PURE__*/function () {
        function _InventarioBaseComponent() {
          _classCallCheck(this, _InventarioBaseComponent);
        }

        _createClass(_InventarioBaseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _InventarioBaseComponent;
      }();

      _InventarioBaseComponent.ɵfac = function InventarioBaseComponent_Factory(t) {
        return new (t || _InventarioBaseComponent)();
      };

      _InventarioBaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _InventarioBaseComponent,
        selectors: [["app-inventario-base"]],
        decls: 1,
        vars: 0,
        template: function InventarioBaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRhcmlvLWJhc2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    253: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventarioComponent": function InventarioComponent() {
          return (
            /* binding */
            _InventarioComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var html2pdf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! html2pdf.js */
      6791);
      /* harmony import */


      var html2pdf_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/inventario-sql.service */
      526);
      /* harmony import */


      var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/categorias.service */
      5772);
      /* harmony import */


      var src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/subcategorias.service */
      9786);
      /* harmony import */


      var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/ubicaciones.service */
      697);
      /* harmony import */


      var src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/estados.service */
      1472);
      /* harmony import */


      var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/unidades.service */
      9451);
      /* harmony import */


      var src_app_services_eliminados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/eliminados.service */
      4466);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707); //ICONOS FONTAWESOME


      var _c0 = ["f"];

      function InventarioComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Modificar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r0.faPencilAlt);
        }
      }

      function InventarioComponent_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", cat_r15.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](cat_r15.nombre);
        }
      }

      function InventarioComponent_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ubicacion_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ubicacion_r16.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ubicacion_r16.nombre);
        }
      }

      function InventarioComponent_ng_container_61_ng_container_1_tr_1_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r17.cantidadObra);
        }
      }

      function InventarioComponent_ng_container_61_ng_container_1_tr_1_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InventarioComponent_ng_container_61_ng_container_1_tr_1_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);

            var item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r23.asignarBorrar(item_r17.id, item_r17.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r21.faInfoCircle);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "text-danger": a0
        };
      };

      var _c2 = function _c2(a0, a1, a2) {
        return {
          "text-success": a0,
          "text-danger": a1,
          "text-info": a2
        };
      };

      function InventarioComponent_ng_container_61_ng_container_1_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, InventarioComponent_ng_container_61_ng_container_1_tr_1_span_14_Template, 2, 1, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InventarioComponent_ng_container_61_ng_container_1_tr_1_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);

            var item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r26.asignarDetalles(item_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " Detalles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, InventarioComponent_ng_container_61_ng_container_1_tr_1_button_21_Template, 3, 1, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 12, item_r17.nombre));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r17.categoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r17.subcategoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](14, _c1, item_r17.estado == "En Obra"));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", item_r17.cantidad, " ", item_r17.unidades, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r17.ubicacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](16, _c2, item_r17.estado == "Disponible", item_r17.estado == "Da\xF1ado", item_r17.estado == "En Obra"));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r17.estado == "En Obra");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r17.estado, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r19.faInfoCircle);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r19.permisoAdmin);
        }
      }

      function InventarioComponent_ng_container_61_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, InventarioComponent_ng_container_61_ng_container_1_tr_1_Template, 22, 20, "tr", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](28);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](31);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (item_r17.nombre.toLocaleLowerCase().includes(_r1.value.toLowerCase()) || _r1.value == "") && (item_r17.categoria == _r2.value || _r2.value == "") && (item_r17.ubicacion == _r4.value || _r4.value == ""));
        }
      }

      function InventarioComponent_ng_container_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, InventarioComponent_ng_container_61_ng_container_1_Template, 2, 1, "ng-container", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r17.cantidad != 0);
        }
      }

      function InventarioComponent_tr_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Serial");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.datosInfo.serial);
        }
      }

      function InventarioComponent_tr_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Cantidad en Obra");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r8.datosInfo.cantidadObra, " ", ctx_r8.datosInfo.unidades, " en obra");
        }
      }

      function InventarioComponent_tr_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Ubicaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r9.datosInfo.ubicacion);
        }
      }

      function InventarioComponent_tr_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.datosInfo.estado);
        }
      }

      function InventarioComponent_tr_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Vencimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 1, ctx_r11.datosInfo.vencimiento));
        }
      }

      function InventarioComponent_tr_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 1, ctx_r12.datosInfo.precio));
        }
      }

      function InventarioComponent_tr_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Descripcion");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 1, ctx_r13.datosInfo.descripcion));
        }
      }

      function InventarioComponent_ng_container_163_ng_container_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemPDF_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, itemPDF_r31.precio), " ");
        }
      }

      function InventarioComponent_ng_container_163_ng_container_1_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " N/A ");
        }
      }

      function InventarioComponent_ng_container_163_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, InventarioComponent_ng_container_163_ng_container_1_div_9_Template, 3, 3, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, InventarioComponent_ng_container_163_ng_container_1_ng_template_10_Template, 1, 0, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](11);

          var itemPDF_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](itemPDF_r31.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](itemPDF_r31.categoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", itemPDF_r31.cantidad, " ", itemPDF_r31.unidades, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", itemPDF_r31.precio != null)("ngIfElse", _r34);
        }
      }

      function InventarioComponent_ng_container_163_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, InventarioComponent_ng_container_163_ng_container_1_Template, 12, 6, "ng-container", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var itemPDF_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", itemPDF_r31.cantidad != 0);
        }
      } //Se declaran variables de filtros//


      var _InventarioComponent = /*#__PURE__*/function () {
        function _InventarioComponent(servicioInventarioSQL, servicioCategorias, servicioSubcategorias, servicioUbicaciones, servicioEstados, servicioUnidades, servicioEliminados, auth) {
          _classCallCheck(this, _InventarioComponent);

          this.servicioInventarioSQL = servicioInventarioSQL;
          this.servicioCategorias = servicioCategorias;
          this.servicioSubcategorias = servicioSubcategorias;
          this.servicioUbicaciones = servicioUbicaciones;
          this.servicioEstados = servicioEstados;
          this.servicioUnidades = servicioUnidades;
          this.servicioEliminados = servicioEliminados;
          this.auth = auth; //ICONOS FONTAWESOME

          this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faSignInAlt;
          this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faSignOutAlt;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faTimesCircle;
          this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faExclamationCircle;
          this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faPencilAlt;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faPlusCircle;
          this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faInfoCircle;
          this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faSearch;
          this.faFileDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faFileDownload;
          this.oculto = true;
          this.datosInfo = {
            id: null,
            nombre: null,
            categoria: null,
            subcategoria: null,
            cantidad: null,
            unidades: null,
            ubicacion: null,
            estado: null,
            vencimiento: null,
            serial: null,
            precio: null
          };
          this.itemBorrar = {
            id: null,
            nombre: null
          }; //VARIABLE PARA HACER LAS BUSQUEDA POR ID DEL ITEM DE AVERIA

          this.idItemElegido = null;
          this.filtroTipo = "";
          this.inventarioSQL = [];
          this.categorias = [];
          this.subcategorias = [];
          this.ubicaciones = [];
          this.estados = [];
          this.unidades = [];
          this.permisoAdmin = false;
        } //Se adjuntan items de base de datos a la variable inventario, y se ordena items en orden alfabetico//


        _createClass(_InventarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.servicioInventarioSQL.getInventario().subscribe(function (res) {
              _this14.inventarioSQL = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioCategorias.getCategorias().subscribe(function (res) {
              _this14.categorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioSubcategorias.getSubcategorias().subscribe(function (res) {
              _this14.subcategorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUbicaciones.getUbicaciones().subscribe(function (res) {
              _this14.ubicaciones = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioEstados.getEstados().subscribe(function (res) {
              _this14.estados = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUnidades.getUnidades().subscribe(function (res) {
              _this14.unidades = res;
            }, function (err) {
              return console.log(err);
            });
            this.permisoAdmin = this.auth.hasPermission([1]);
          } //RECIBE EL ITEM DE LA FILA, E IMPRIME DICHOS DATOS EN UNA VARIABLE

        }, {
          key: "asignarDetalles",
          value: function asignarDetalles(item) {
            this.datosInfo = item;
          } // ASIGNA LOS DATOS DEL ITEM A BORRAR EN LA VARIABLE itemBorrar

        }, {
          key: "asignarBorrar",
          value: function asignarBorrar(id, nombre) {
            this.itemBorrar.id = id;
            this.itemBorrar.nombre = nombre;
          } // ELIMINA EL ITEM SELECCIONADO DE LA BD CUANDO EL USUARIO ACEPTA EN EL MODAL

        }, {
          key: "eliminarItem",
          value: function eliminarItem() {
            var _this15 = this;

            this.servicioInventarioSQL.deleteItem(this.itemBorrar.id).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
            var eliminacion = {
              nombre: this.itemBorrar.nombre,
              cantidad: +this.inventarioSQL.find(function (item) {
                return item.id == _this15.itemBorrar.id;
              }).cantidad,
              cedula_responsable_eliminado: +10470050,
              id_categoria: +this.categorias.find(function (categoria) {
                return categoria.nombre == _this15.inventarioSQL.find(function (item) {
                  return item.id == _this15.itemBorrar.id;
                }).categoria;
              }).id,
              id_unidad: +this.unidades.find(function (unidad) {
                return unidad.nombre == _this15.inventarioSQL.find(function (item) {
                  return item.id == _this15.itemBorrar.id;
                }).unidades;
              }).id
            }; // COMUNICACION CON EL SERVICIO QUE INSERTA ELIMINADO EN BD

            this.servicioEliminados.createEliminado(eliminacion).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          } //FUNCION PARA DESCARGAR PDF DE INVENTARIO

        }, {
          key: "descargarPDF",
          value: function descargarPDF() {
            this.oculto = false;
            var opciones = {
              margin: 1,
              filename: 'Inventario.pdf',
              image: {
                type: 'jpeg',
                quality: 1
              },
              html2canvas: {},
              jsPDF: {
                unit: 'cm',
                format: 'letter',
                orientation: 'portrait'
              }
            };
            var contenido = document.getElementById('elemento-a-exportar');
            html2pdf_js__WEBPACK_IMPORTED_MODULE_0__().from(contenido).set(opciones).save();
            this.oculto = true;
          }
        }]);

        return _InventarioComponent;
      }();

      _InventarioComponent.ɵfac = function InventarioComponent_Factory(t) {
        return new (t || _InventarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_1__.InventarioSQLService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_3__.SubcategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__.UbicacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__.EstadosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_6__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_eliminados_service__WEBPACK_IMPORTED_MODULE_7__.EliminadosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService));
      };

      _InventarioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _InventarioComponent,
        selectors: [["app-inventario"]],
        viewQuery: function InventarioComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 164,
        vars: 25,
        consts: [[1, "container-fluid"], [1, "row", "px-4"], [1, "container", "mt-lg-2"], [1, "mb-2"], [1, "btn-group", "float-end"], ["type", "button", "routerLink", "ingresar", 1, "btn", "btn-success", "cool-btn"], [3, "icon"], ["type", "button", "routerLink", "reingreso", 1, "btn", "btn-info", "cool-btn", "text-white"], ["type", "button", "routerLink", "egresar", 1, "btn", "btn-warning", "cool-btn"], ["type", "button", "class", "btn btn-primary text-white cool-btn", "routerLink", "modificar", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#pdfInventario", 1, "btn", "btn-secondary", "float-right"], [1, "table-responsive"], [1, "table", "table-sm", "shadow", "table-striped"], [1, "table-dark"], ["scope", "col"], ["ngModel", "", "type", "text", "placeholder", "Filtro por nombre", 1, "w-75", "form-control", "form-control-sm"], ["filtroNombre", "ngModel"], ["ngModel", "", "name", "filtroCategoria", 1, "form-select", "form-select-sm"], ["filtroCategoria", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["ngModel", "", "name", "filtroUbicacion", 1, "form-select", "form-select-sm"], ["filtroUbicacion", "ngModel"], [4, "ngFor", "ngForOf"], ["tabindex", "-1", "id", "modalEliminar", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-danger"], [1, "modal-title", "text-white"], [1, "modal-body"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-danger", 3, "click"], ["id", "modalInfo", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-header", "bg-info"], ["id", "exampleModalLabel", 1, "modal-title", "text-white"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "table", "table-sm"], [4, "ngIf"], ["id", "pdfInventario", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["role", "group", 1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-secondary"], ["id", "elemento-a-exportar", 1, "modal-body"], [1, "row"], [1, "table", "table-sm", "letras"], [1, "thead", "bg-secondary", "text-white"], ["type", "button", "routerLink", "modificar", 1, "btn", "btn-primary", "text-white", "cool-btn"], [3, "value"], ["class", "table-sm", "scope", "row", "class", "bg-light linea-tabla", 4, "ngIf"], ["scope", "row", 1, "bg-light", "linea-tabla"], [3, "ngClass"], [1, "btn-group"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalInfo", 1, "btn", "btn-info", "text-white", "btn-sm", 3, "click"], ["type", "button", "class", "btn btn-danger btn-sm", "data-bs-toggle", "modal", "data-bs-target", "#modalEliminar", 3, "click", 4, "ngIf"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalEliminar", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [4, "ngIf", "ngIfElse"], ["sinPrecio", ""]],
        template: function InventarioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Inventario");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Ingresar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Reingreso ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Egreso ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, InventarioComponent_button_17_Template, 3, 1, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " Exportar a PDF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "thead", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "select", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Categor\xEDa (Todas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, InventarioComponent_option_34_Template, 2, 2, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "select", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Ubicaci\xF3n (Todas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, InventarioComponent_option_42_Template, 2, 2, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "thead", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Subcategor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Ubicaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Estado");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](59, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, InventarioComponent_ng_container_61_Template, 2, 1, "ng-container", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "h5", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Eliminar Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "\xBFEst\xE1s seguro que deseas eliminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "?. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](74, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Esta acci\xF3n es irreversible.");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "Cancelar");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InventarioComponent_Template_button_click_81_listener() {
              return ctx.eliminarItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Eliminar");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "h5", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](90, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "table", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](99);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](100, InventarioComponent_tr_100_Template, 6, 1, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](107, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](109, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](110, "Subcategor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](111, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](117, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](120, InventarioComponent_tr_120_Template, 6, 2, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](121, InventarioComponent_tr_121_Template, 6, 1, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](122, InventarioComponent_tr_122_Template, 6, 1, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](123, InventarioComponent_tr_123_Template, 7, 3, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](124, InventarioComponent_tr_124_Template, 7, 3, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](125, InventarioComponent_tr_125_Template, 7, 3, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](126, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](127, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "Cerrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "h5", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](138, "Exportar a PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InventarioComponent_Template_button_click_140_listener() {
              return ctx.descargarPDF();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](141, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](142, " Exportar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](144, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](145, " Cerrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](148, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](149, "Inventario");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "table", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "thead", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](155, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](157, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](159, "Cantidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](161, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](163, InventarioComponent_ng_container_163_Template, 2, 1, "ng-container", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faSignInAlt);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faPlusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faSignOutAlt);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.permisoAdmin);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.categorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ubicaciones);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.inventarioSQL);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.itemBorrar.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.datosInfo.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.datosInfo.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.datosInfo.serial != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.datosInfo.categoria);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.datosInfo.subcategoria);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx.datosInfo.cantidad, " ", ctx.datosInfo.unidades, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.datosInfo.cantidadObra != null && ctx.datosInfo.cantidadObra != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.datosInfo.ubicacion != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.datosInfo.estado != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.datosInfo.vencimiento != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.datosInfo.precio != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.datosInfo.descripcion != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.inventarioSQL);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.LowerCasePipe],
        styles: [".letras[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudGFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiaW52ZW50YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldHJhcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    7629: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModificarComponent": function ModificarComponent() {
          return (
            /* binding */
            _ModificarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../services/inventario-sql.service */
      526);
      /* harmony import */


      var _services_categorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/categorias.service */
      5772);
      /* harmony import */


      var src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/subcategorias.service */
      9786);
      /* harmony import */


      var _services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/ubicaciones.service */
      697);
      /* harmony import */


      var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/unidades.service */
      9451);
      /* harmony import */


      var src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/estados.service */
      1472);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334); //ICONOS FONTAWESOME


      var _c0 = ["f"];

      function ModificarComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoria_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", categoria_r16.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](categoria_r16.nombre);
        }
      }

      function ModificarComponent_small_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Ingrese una categor\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ModificarComponent_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subcategoria_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", subcategoria_r17.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](subcategoria_r17.nombre);
        }
      }

      function ModificarComponent_small_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Ingrese una subcategor\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ModificarComponent_ng_container_35_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r18.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r18.nombre);
        }
      }

      function ModificarComponent_ng_container_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ModificarComponent_ng_container_35_option_1_Template, 2, 2, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r18.categoria == _r1.value && item_r18.subcategoria == _r4.value);
        }
      }

      function ModificarComponent_small_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Ingrese un item.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ModificarComponent_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoria_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", categoria_r21.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](categoria_r21.nombre);
        }
      }

      function ModificarComponent_option_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subcategoria_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", subcategoria_r22.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](subcategoria_r22.nombre);
        }
      }

      function ModificarComponent_option_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidad_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", unidad_r23.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](unidad_r23.nombre);
        }
      }

      function ModificarComponent_option_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ubicacion_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ubicacion_r24.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ubicacion_r24.nombre);
        }
      }

      function ModificarComponent_option_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var estado_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", estado_r25.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](estado_r25.nombre);
        }
      }

      var _ModificarComponent = /*#__PURE__*/function () {
        function _ModificarComponent(servicioInventarioSQL, servicioCategorias, servicioSubcategorias, servicioUbicaciones, servicioUnidades, servicioEstados, router) {
          _classCallCheck(this, _ModificarComponent);

          this.servicioInventarioSQL = servicioInventarioSQL;
          this.servicioCategorias = servicioCategorias;
          this.servicioSubcategorias = servicioSubcategorias;
          this.servicioUbicaciones = servicioUbicaciones;
          this.servicioUnidades = servicioUnidades;
          this.servicioEstados = servicioEstados;
          this.router = router; //ICONOS FONTAWESOME

          this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPencilAlt;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTimesCircle; //VARIABLES QUE CONTIENEN BASES DE DATOS

          this.inventarioSQL = [];
          this.categorias = [];
          this.subcategorias = [];
          this.ubicaciones = [];
          this.unidades = [];
          this.estados = [];
          this.itemElegido = {
            id: null,
            nombre: null,
            categoria: null,
            subcategoria: null,
            cantidad: null,
            ubicacion: null,
            fecha: null,
            responsable: null,
            estado: null,
            vencimiento: null,
            serial: null,
            precio: null,
            unidades: null
          };
        }

        _createClass(_ModificarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.servicioInventarioSQL.getInventario().subscribe(function (res) {
              _this16.inventarioSQL = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioCategorias.getCategorias().subscribe(function (res) {
              _this16.categorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioSubcategorias.getSubcategorias().subscribe(function (res) {
              _this16.subcategorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUbicaciones.getUbicaciones().subscribe(function (res) {
              _this16.ubicaciones = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUnidades.getUnidades().subscribe(function (res) {
              _this16.unidades = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioEstados.getEstados().subscribe(function (res) {
              _this16.estados = res;
            }, function (err) {
              return console.log(err);
            });
          } //ENCUENTRA EL ID DEL ITEM A MODIFICAR

        }, {
          key: "alElegirItem",
          value: function alElegirItem(idItem) {
            // this.itemElegido = this.inventarioSQL.find(item => item.id == idItem);
            this.itemElegido = Object.assign({}, this.inventarioSQL.find(function (item) {
              return item.id == idItem;
            }));
          }
        }, {
          key: "onModificar",
          value: function onModificar() {
            var _this17 = this;

            this.itemElegido.categoria = this.categorias.find(function (cat) {
              return cat.nombre == _this17.itemElegido.categoria;
            }).id;
            this.itemElegido.subcategoria = this.subcategorias.find(function (subcat) {
              return subcat.nombre == _this17.itemElegido.subcategoria;
            }).id;
            this.itemElegido.ubicacion = this.ubicaciones.find(function (ubic) {
              return ubic.nombre == _this17.itemElegido.ubicacion;
            }).id;
            this.itemElegido.unidades = this.unidades.find(function (und) {
              return und.nombre == _this17.itemElegido.unidades;
            }).id;
            this.itemElegido.estado = this.estados.find(function (est) {
              return est.nombre == _this17.itemElegido.estado;
            }).id;
            this.servicioInventarioSQL.updateItem(this.itemElegido.id, this.itemElegido, true).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
            this.router.navigate(['inventario']);
            this.form.reset();
          } //FUNCION PARA BORRAR FORMULARIO

        }, {
          key: "borrarForm",
          value: function borrarForm() {
            this.form.reset();
            this.router.navigate(['inventario']);
          }
        }]);

        return _ModificarComponent;
      }();

      _ModificarComponent.ɵfac = function ModificarComponent_Factory(t) {
        return new (t || _ModificarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_0__.InventarioSQLService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_categorias_service__WEBPACK_IMPORTED_MODULE_1__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_2__.SubcategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__.UbicacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__.EstadosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
      };

      _ModificarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _ModificarComponent,
        selectors: [["app-modificar"]],
        viewQuery: function ModificarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 99,
        vars: 26,
        consts: [[1, "margin-top-form"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-modificar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-3"], ["f", "ngForm"], [1, "row", "mt-3", "mb-4"], [1, "col-3"], ["ngModel", "", "required", "", "name", "selectCategoriaModificar", 1, "form-select", "mt-2"], ["selectCategoriaModificar", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["ngModel", "", "required", "", "name", "selectSubcategoriaModificar", 1, "form-select", "mt-2"], ["selectSubcategoriaModificar", "ngModel"], [1, "col-6"], ["ngModel", "", "required", "", "name", "item", 1, "form-select", "mt-2", 3, "change"], ["idItem", "ngModel", "selectItemModif", "ngModel"], [4, "ngFor", "ngForOf"], [1, "container", "mt-2"], [1, "row", "mb-4"], [1, "col-4"], ["required", "", "type", "text", "name", "nombre", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], ["required", "", "name", "categoria", 1, "form-select", "mt-2", 3, "ngModel", "ngModelChange"], ["required", "", "name", "subcategoria", 1, "form-select", "mt-2", 3, "ngModel", "ngModelChange"], [1, "col"], ["onkeypress", "return event.charCode > 48", "min", "0", "type", "number", "name", "precio", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], [1, "input-group"], ["onkeypress", "return event.charCode > 48", "min", "1", "type", "number", "name", "cantidad", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", ":itemElegido.unidad", "name", "unidades", 1, "form-select", "mt-2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "ubicacion", "aria-describedby", "emailHelp", 1, "form-select", "mt-2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "estado", 1, "form-select", "mt-2", 3, "ngModel", "ngModelChange"], [1, "col-2"], ["type", "text", "name", "serial", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], [1, "col-9"], [1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["name", "vencimiento", "type", "date", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], [1, "form-footer-style"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "icon"], ["type", "button", 1, "btn", "btn-primary", "text-white", 3, "disabled", "click"], [3, "value"], [1, "text-danger"], [3, "value", 4, "ngIf"]],
        template: function ModificarComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Modificar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Seleccione el item a modificar:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "select", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ModificarComponent_option_20_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ModificarComponent_small_21_Template, 2, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Subcategor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "select", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ModificarComponent_option_27_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ModificarComponent_small_28_Template, 2, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "select", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ModificarComponent_Template_select_change_32_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33);

              return ctx.alElegirItem(_r7.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ModificarComponent_ng_container_35_Template, 2, 1, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ModificarComponent_small_36_Template, 2, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Modifique los datos que desee:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_input_ngModelChange_45_listener($event) {
              return ctx.itemElegido.nombre = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_select_ngModelChange_49_listener($event) {
              return ctx.itemElegido.categoria = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, ModificarComponent_option_50_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Subcategor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_select_ngModelChange_54_listener($event) {
              return ctx.itemElegido.subcategoria = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, ModificarComponent_option_55_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_input_ngModelChange_59_listener($event) {
              return ctx.itemElegido.precio = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Cantidad y Unidades");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_input_ngModelChange_65_listener($event) {
              return ctx.itemElegido.cantidad = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_select_ngModelChange_66_listener($event) {
              return ctx.itemElegido.unidades = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, ModificarComponent_option_67_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Ubicaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_select_ngModelChange_71_listener($event) {
              return ctx.itemElegido.ubicacion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, ModificarComponent_option_72_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Estado");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_select_ngModelChange_76_listener($event) {
              return ctx.itemElegido.estado = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, ModificarComponent_option_77_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Serial");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_input_ngModelChange_81_listener($event) {
              return ctx.itemElegido.serial = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Descripci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_input_ngModelChange_86_listener($event) {
              return ctx.itemElegido.descripcion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Fecha de Vencimiento");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ModificarComponent_Template_input_ngModelChange_90_listener($event) {
              return ctx.itemElegido.vencimiento = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModificarComponent_Template_button_click_93_listener() {
              return ctx.borrarForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "fa-icon", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModificarComponent_Template_button_click_96_listener() {
              return ctx.onModificar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](97, "fa-icon", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, " Modificar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](26);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.categorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r1.valid && _r1.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.subcategorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.inventarioSQL);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r8.valid && _r8.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.categoria);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.categorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.subcategoria);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.subcategorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.precio);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.cantidad);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.unidades);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.unidades);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.ubicacion);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ubicaciones);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.estado);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.estados);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.serial);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.descripcion)("name", "descripcion");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.itemElegido.vencimiento);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faPencilAlt);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"]],
        styles: [".header-color-modificar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #314de9, #3ca4d4 );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGlmaWNhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLHFEQUFxRDtBQUN6RCIsImZpbGUiOiJtb2RpZmljYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qSEVBREVSIERFIEZPUk1TKi9cclxuLmhlYWRlci1jb2xvci1tb2RpZmljYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzMTRkZTksICMzY2E0ZDQgKTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    2379: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReingresoComponent": function ReingresoComponent() {
          return (
            /* binding */
            _ReingresoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/categorias.service */
      5772);
      /* harmony import */


      var src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/subcategorias.service */
      9786);
      /* harmony import */


      var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/unidades.service */
      9451);
      /* harmony import */


      var src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/estados.service */
      1472);
      /* harmony import */


      var src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/inventario-sql.service */
      526);
      /* harmony import */


      var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/ubicaciones.service */
      697);
      /* harmony import */


      var src_app_services_ingresos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/ingresos.service */
      8511);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334); //ICONOS FONTAWESOME


      var _c0 = ["f"];

      function ReingresoComponent_div_10_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoria_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", categoria_r16.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](categoria_r16.nombre);
        }
      }

      function ReingresoComponent_div_10_small_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Ingrese una categor\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ReingresoComponent_div_10_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subcategoria_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", subcategoria_r17.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](subcategoria_r17.nombre);
        }
      }

      function ReingresoComponent_div_10_small_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Ingrese una subcategor\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ReingresoComponent_div_10_ng_container_25_ng_container_1_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", item_r18.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r18.nombre);
        }
      }

      function ReingresoComponent_div_10_ng_container_25_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReingresoComponent_div_10_ng_container_25_ng_container_1_option_1_Template, 2, 2, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r18.categoria == "Herramienta" && item_r18.estado == "En Obra" || item_r18.categoria != "Herramienta");
        }
      }

      function ReingresoComponent_div_10_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReingresoComponent_div_10_ng_container_25_ng_container_1_Template, 2, 1, "ng-container", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r18.categoria == _r4.value && item_r18.subcategoria == _r7.value);
        }
      }

      function ReingresoComponent_div_10_small_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Ingrese un item.");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ReingresoComponent_div_10_p_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r13.inventario[ctx_r13.regresarIndice(i_r3)].cantidad, " ", ctx_r13.inventario[ctx_r13.regresarIndice(i_r3)].unidades, "");
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function ReingresoComponent_div_10_input_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function ReingresoComponent_div_10_input_35_Template_input_keyup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r24.revisarCantidad();
          })("ngModelChange", function ReingresoComponent_div_10_input_35_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r26.idsReingreso[i_r3].cantidad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r14.idsReingreso[i_r3].cantidad)("name", "cantidad" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, i_r3));
        }
      }

      function ReingresoComponent_div_10_input_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "input", 37);
        }

        if (rf & 2) {
          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", ctx_r15.inventario[ctx_r15.regresarIndice(i_r3)].unidades)("name", "unidades" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, i_r3));
        }
      }

      function ReingresoComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Categor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "select", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ReingresoComponent_div_10_Template_select_change_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);

            var i_r3 = restoredCtx.index;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r30.restaurarValor(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ReingresoComponent_div_10_option_11_Template, 2, 2, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ReingresoComponent_div_10_small_12_Template, 2, 0, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Subcategoria");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "select", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ReingresoComponent_div_10_option_18_Template, 2, 2, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, ReingresoComponent_div_10_small_19_Template, 2, 0, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "select", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ReingresoComponent_div_10_Template_select_ngModelChange_23_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);

            var i_r3 = restoredCtx.index;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r32.idsReingreso[i_r3].id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, ReingresoComponent_div_10_ng_container_25_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, ReingresoComponent_div_10_small_26_Template, 2, 0, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Cantidad actual");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, ReingresoComponent_div_10_p_30_Template, 2, 2, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Cantidad a ingresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, ReingresoComponent_div_10_input_35_Template, 1, 4, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, ReingresoComponent_div_10_input_36_Template, 1, 4, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.index;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](24);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Item ", i_r3 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", "selectTipo" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.categorias);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", "selectSubcategoria" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.subcategorias);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.idsReingreso[i_r3].id)("name", "selectId" + _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.inventario);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_r10.valid && _r10.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.idsReingreso[i_r3].id != null && ctx_r1.idsReingreso[i_r3].id != undefined && ctx_r1.idsReingreso[i_r3].id != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.idsReingreso[i_r3].id != null && ctx_r1.idsReingreso[i_r3].id != undefined && ctx_r1.idsReingreso[i_r3].id != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.idsReingreso[i_r3].id != null && ctx_r1.idsReingreso[i_r3].id != undefined && ctx_r1.idsReingreso[i_r3].id != "");
        }
      }

      var _ReingresoComponent = /*#__PURE__*/function () {
        function _ReingresoComponent(servicioCategorias, servicioSubcategorias, servicioUnidades, servicioEstados, servicioInventario, servicioUbicaciones, servicioIngresos, router, auth) {
          _classCallCheck(this, _ReingresoComponent);

          this.servicioCategorias = servicioCategorias;
          this.servicioSubcategorias = servicioSubcategorias;
          this.servicioUnidades = servicioUnidades;
          this.servicioEstados = servicioEstados;
          this.servicioInventario = servicioInventario;
          this.servicioUbicaciones = servicioUbicaciones;
          this.servicioIngresos = servicioIngresos;
          this.router = router;
          this.auth = auth; //ICONOS FONTAWESOME

          this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faSignInAlt;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTimesCircle;
          this.faMinusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faMinusCircle;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPlusCircle;
          this.inventario = [];
          this.categorias = [];
          this.unidades = [];
          this.estados = [];
          this.ubicaciones = [];
          this.subcategorias = [];
          this.cantidadIngreso = 0;
          this.valido = true;
          this.idsReingreso = [{
            id: "",
            cantidad: 1
          }];
        }

        _createClass(_ReingresoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.servicioCategorias.getCategorias().subscribe(function (res) {
              _this18.categorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioSubcategorias.getSubcategorias().subscribe(function (res) {
              _this18.subcategorias = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioInventario.getInventario().subscribe(function (res) {
              _this18.inventario = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUnidades.getUnidades().subscribe(function (res) {
              _this18.unidades = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUbicaciones.getUbicaciones().subscribe(function (res) {
              _this18.ubicaciones = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioEstados.getEstados().subscribe(function (res) {
              _this18.estados = res;
            });
          }
        }, {
          key: "regresarIndice",
          value: function regresarIndice(indice) {
            var _this19 = this;

            return this.inventario.findIndex(function (item) {
              return item.id == _this19.idsReingreso[indice].id;
            });
          } //Con el id del item ubicado, se suma la cantidad a agregar ingresada por el usuario en el item del id que haga match//

        }, {
          key: "reingresarItems",
          value: function reingresarItems() {
            var _this20 = this;

            var _iterator5 = _createForOfIteratorHelper(this.idsReingreso),
                _step5;

            try {
              var _loop2 = function _loop2() {
                var item = _step5.value;
                var nuevoItem = Object.assign({}, _this20.inventario.find(function (itemInv) {
                  return itemInv.id == item.id;
                }));
                var itemListaIngresos = Object.assign({}, nuevoItem);

                if (item.cantidad == nuevoItem.cantidadObra) {
                  nuevoItem.estado = "Disponible";
                  nuevoItem.cantidadObra = 0;
                } else if (item.cantidad < nuevoItem.cantidadObra) {
                  nuevoItem.estado = "En Obra";
                  nuevoItem.cantidadObra -= item.cantidad;
                } //CAMPOS FALTANTES EN INGRESO


                itemListaIngresos.cantidad = item.cantidad;
                nuevoItem.cantidad += item.cantidad;
                nuevoItem.categoria = _this20.categorias.find(function (cat) {
                  return cat.nombre == nuevoItem.categoria;
                }).id;
                nuevoItem.subcategoria = _this20.subcategorias.find(function (subcat) {
                  return subcat.nombre == nuevoItem.subcategoria;
                }).id;
                nuevoItem.ubicacion = _this20.ubicaciones.find(function (ubic) {
                  return ubic.nombre == nuevoItem.ubicacion;
                }).id;
                nuevoItem.unidades = _this20.unidades.find(function (und) {
                  return und.nombre == nuevoItem.unidades;
                }).id;
                nuevoItem.estado = _this20.estados.find(function (est) {
                  return est.nombre == nuevoItem.estado;
                }).id;

                _this20.servicioInventario.updateItem(nuevoItem.id, nuevoItem, true).subscribe(function (res) {
                  console.log(res);
                  console.log(res["text"]);

                  _this20.registrarIngreso(+nuevoItem.id, itemListaIngresos);
                }, function (err) {
                  console.log(err);
                });
              };

              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            this.form.reset();
            this.router.navigate(['inventario']);
            this.idsReingreso = [{
              id: "",
              cantidad: 1
            }];
          } // FUNCION QUE REGISTRA REINGRESO EN BD DE INGRESOS

        }, {
          key: "registrarIngreso",
          value: function registrarIngreso(id, itemListaIngresos) {
            var ingreso = {
              nombre_item_ingresado: itemListaIngresos.nombre,
              id_categoria_item_ingresado: +this.categorias.find(function (cat) {
                return cat.nombre == itemListaIngresos.categoria;
              }).id,
              id_unidad_item_ingresado: +this.unidades.find(function (und) {
                return und.nombre == itemListaIngresos.unidades;
              }).id,
              id_modalidad: +2,
              cantidad: +itemListaIngresos.cantidad,
              cedula_responsable_ingreso: this.auth.user.getValue().cedula,
              precio: +itemListaIngresos.precio
            };
            this.servicioIngresos.createIngreso(ingreso).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "borrarForm",
          value: function borrarForm() {
            this.form.reset();
            this.idsReingreso = [{
              id: "",
              cantidad: 1
            }];
            this.router.navigate(['inventario']);
          }
        }, {
          key: "agregarItem",
          value: function agregarItem() {
            this.idsReingreso.push({
              id: "",
              cantidad: 1
            });
          }
        }, {
          key: "restarItem",
          value: function restarItem() {
            this.idsReingreso.pop();
          }
        }, {
          key: "revisarCantidad",
          value: function revisarCantidad() {
            var _iterator6 = _createForOfIteratorHelper(this.idsReingreso),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var item = _step6.value;

                if (item.cantidad <= 0) {
                  this.valido = false;
                  return;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            this.valido = true;
          }
        }, {
          key: "restaurarValor",
          value: function restaurarValor(i) {
            this.idsReingreso[i].cantidad = 1;
            this.revisarCantidad();
          }
        }]);

        return _ReingresoComponent;
      }();

      _ReingresoComponent.ɵfac = function ReingresoComponent_Factory(t) {
        return new (t || _ReingresoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_0__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_1__.SubcategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_2__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_3__.EstadosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_4__.InventarioSQLService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_5__.UbicacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_ingresos_service__WEBPACK_IMPORTED_MODULE_6__.IngresosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService));
      };

      _ReingresoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _ReingresoComponent,
        selectors: [["app-reingreso"]],
        viewQuery: function ReingresoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 26,
        vars: 8,
        consts: [[1, "margin-top-form"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-reingreso"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-2"], ["f", "ngForm"], [4, "ngFor", "ngForOf"], [1, "form-footer-style"], [1, "modal-footer"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "icon"], ["type", "button", 1, "btn", "btn-secondary", 3, "hidden", "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-info", "text-white", 3, "disabled", "click"], [1, "container", "mt-2"], [1, "row", "mt-3", "mb-4"], [1, "col-2"], ["required", "", "ngModel", "", 1, "form-select", "mt-2", 3, "name", "change"], ["selectCategoria", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["required", "", "ngModel", "", 1, "form-select", "mt-2", 3, "name"], ["selectSubcategoria", "ngModel"], [1, "col-3"], ["required", "", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["itemSelect", "ngModel"], ["for", "exampleInputEmail1"], [4, "ngIf"], [1, "input-group"], ["onkeypress", "return event.charCode >= 46", "min", "1", "type", "number", "class", "form-control mt-2", 3, "ngModel", "name", "keyup", "ngModelChange", 4, "ngIf"], ["disabled", "", "type", "text", "ngModel", "", "class", "form-control mt-2", 3, "placeholder", "name", 4, "ngIf"], [3, "value"], [1, "text-danger"], [3, "value", 4, "ngIf"], ["onkeypress", "return event.charCode >= 46", "min", "1", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "keyup", "ngModelChange"], ["disabled", "", "type", "text", "ngModel", "", 1, "form-control", "mt-2", 3, "placeholder", "name"]],
        template: function ReingresoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Reingreso");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ReingresoComponent_div_10_Template, 37, 20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReingresoComponent_Template_button_click_14_listener() {
              return ctx.agregarItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " M\xE1s Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReingresoComponent_Template_button_click_17_listener() {
              return ctx.restarItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Menos Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReingresoComponent_Template_button_click_20_listener() {
              return ctx.borrarForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReingresoComponent_Template_button_click_23_listener() {
              return ctx.reingresarItems();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Ingresar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.idsReingreso);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faPlusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.idsReingreso.length == 1)("disabled", ctx.idsReingreso.length == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faMinusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.valido || !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faSignInAlt);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor],
        styles: [".color-contraste[_ngcontent-%COMP%] {\r\n    background-color: gainsboro;\r\n}\r\n\r\n.header-color-reingreso[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #3181e9, #3ccfd4 );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlaW5ncmVzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0Esa0JBQWtCO0FBQ2xCO0lBQ0kscURBQXFEO0FBQ3pEIiwiZmlsZSI6InJlaW5ncmVzby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWNvbnRyYXN0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbn1cclxuLypIRUFERVIgREUgRk9STVMqL1xyXG4uaGVhZGVyLWNvbG9yLXJlaW5ncmVzb3tcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzMxODFlOSwgIzNjY2ZkNCApO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    7788: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventarioRoutingModule": function InventarioRoutingModule() {
          return (
            /* binding */
            _InventarioRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _components_egresar_egresar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/egresar/egresar.component */
      8592);
      /* harmony import */


      var _components_egresos_egresos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/egresos/egresos.component */
      2032);
      /* harmony import */


      var _components_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/ingresar/ingresar.component */
      1690);
      /* harmony import */


      var _components_ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/ingresos/ingresos.component */
      1556);
      /* harmony import */


      var _components_inventario_base_inventario_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/inventario-base/inventario-base.component */
      8093);
      /* harmony import */


      var _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/inventario/inventario.component */
      253);
      /* harmony import */


      var _components_modificar_modificar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/modificar/modificar.component */
      7629);
      /* harmony import */


      var _components_reingreso_reingreso_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/reingreso/reingreso.component */
      2379);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var inventarioRoutes = [{
        path: '',
        component: _components_inventario_base_inventario_base_component__WEBPACK_IMPORTED_MODULE_4__.InventarioBaseComponent,
        children: [{
          path: '',
          component: _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_5__.InventarioComponent
        }, {
          path: 'egresar',
          component: _components_egresar_egresar_component__WEBPACK_IMPORTED_MODULE_0__.EgresarComponent
        }, {
          path: 'egresos',
          component: _components_egresos_egresos_component__WEBPACK_IMPORTED_MODULE_1__.EgresosComponent
        }, {
          path: 'ingresar',
          component: _components_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_2__.IngresarComponent
        }, {
          path: 'ingresos',
          component: _components_ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_3__.IngresosComponent
        }, {
          path: 'reingreso',
          component: _components_reingreso_reingreso_component__WEBPACK_IMPORTED_MODULE_7__.ReingresoComponent
        }, {
          path: 'modificar',
          component: _components_modificar_modificar_component__WEBPACK_IMPORTED_MODULE_6__.ModificarComponent
        }]
      }];

      var _InventarioRoutingModule = function _InventarioRoutingModule() {
        _classCallCheck(this, _InventarioRoutingModule);
      };

      _InventarioRoutingModule.ɵfac = function InventarioRoutingModule_Factory(t) {
        return new (t || _InventarioRoutingModule)();
      };

      _InventarioRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _InventarioRoutingModule
      });
      _InventarioRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(inventarioRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_InventarioRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5772: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriasService": function CategoriasService() {
          return (
            /* binding */
            _CategoriasService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _CategoriasService = /*#__PURE__*/function () {
        function _CategoriasService(http) {
          _classCallCheck(this, _CategoriasService);

          this.http = http;
          this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_CategoriasService, [{
          key: "getCategorias",
          value: function getCategorias() {
            return this.http.get("".concat(this.API_URI, "/categorias"));
          }
        }, {
          key: "getCategoria",
          value: function getCategoria(id) {
            return this.http.get("".concat(this.API_URI, "/categorias/").concat(id));
          }
        }, {
          key: "createCategoria",
          value: function createCategoria(categoria) {
            return this.http.post("".concat(this.API_URI, "/categorias"), categoria);
          }
        }, {
          key: "deleteCategoria",
          value: function deleteCategoria(id) {
            return this.http["delete"]("".concat(this.API_URI, "/categorias/").concat(id));
          }
        }, {
          key: "updateCategoria",
          value: function updateCategoria(id, categoria) {
            return this.http.put("".concat(this.API_URI, "/categorias/").concat(id), categoria);
          }
        }]);

        return _CategoriasService;
      }();

      _CategoriasService.ɵfac = function CategoriasService_Factory(t) {
        return new (t || _CategoriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _CategoriasService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CategoriasService,
        factory: _CategoriasService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    7755: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EgresosService": function EgresosService() {
          return (
            /* binding */
            _EgresosService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _EgresosService = /*#__PURE__*/function () {
        function _EgresosService(http) {
          _classCallCheck(this, _EgresosService);

          this.http = http;
          this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_EgresosService, [{
          key: "getEgresos",
          value: function getEgresos() {
            return this.http.get("".concat(this.API_URI, "/egresos"));
          } // getItem(id: string) {
          //   return this.http.get(`${this.API_URI}/herramientas/${id}`);
          // }

        }, {
          key: "createEgreso",
          value: function createEgreso(egreso) {
            return this.http.post("".concat(this.API_URI, "/egresos"), egreso);
          }
        }, {
          key: "deleteEgreso",
          value: function deleteEgreso(id) {
            return this.http["delete"]("".concat(this.API_URI, "/egresos/").concat(id));
          }
        }, {
          key: "updateEgreso",
          value: function updateEgreso(id, egreso) {
            return this.http.put("".concat(this.API_URI, "/egresos/").concat(id), egreso);
          }
        }]);

        return _EgresosService;
      }();

      _EgresosService.ɵfac = function EgresosService_Factory(t) {
        return new (t || _EgresosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _EgresosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _EgresosService,
        factory: _EgresosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EliminadosService": function EliminadosService() {
          return (
            /* binding */
            _EliminadosService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _EliminadosService = /*#__PURE__*/function () {
        function _EliminadosService(http) {
          _classCallCheck(this, _EliminadosService);

          this.http = http;
          this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_EliminadosService, [{
          key: "getEliminados",
          value: function getEliminados() {
            return this.http.get("".concat(this.API_URI, "/eliminados"));
          }
        }, {
          key: "createEliminado",
          value: function createEliminado(eliminado) {
            return this.http.post("".concat(this.API_URI, "/eliminados"), eliminado);
          }
        }, {
          key: "deleteEliminado",
          value: function deleteEliminado(id) {
            return this.http["delete"]("".concat(this.API_URI, "/eliminados/").concat(id));
          }
        }, {
          key: "updateEliminado",
          value: function updateEliminado(id, eliminado) {
            return this.http.put("".concat(this.API_URI, "/eliminados/").concat(id), eliminado);
          }
        }]);

        return _EliminadosService;
      }();

      _EliminadosService.ɵfac = function EliminadosService_Factory(t) {
        return new (t || _EliminadosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _EliminadosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _EliminadosService,
        factory: _EliminadosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1472: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EstadosService": function EstadosService() {
          return (
            /* binding */
            _EstadosService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _EstadosService = /*#__PURE__*/function () {
        function _EstadosService(http) {
          _classCallCheck(this, _EstadosService);

          this.http = http;
          this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_EstadosService, [{
          key: "getEstados",
          value: function getEstados() {
            return this.http.get("".concat(this.API_URI, "/estados"));
          }
        }, {
          key: "getEstado",
          value: function getEstado(id) {
            return this.http.get("".concat(this.API_URI, "/estados/").concat(id));
          }
        }, {
          key: "createEstado",
          value: function createEstado(estado) {
            return this.http.post("".concat(this.API_URI, "/estados"), estado);
          }
        }, {
          key: "deleteEstado",
          value: function deleteEstado(id) {
            return this.http["delete"]("".concat(this.API_URI, "/estados/").concat(id));
          }
        }, {
          key: "updateEstado",
          value: function updateEstado(id, estado) {
            return this.http.put("".concat(this.API_URI, "/estados/").concat(id), estado);
          }
        }]);

        return _EstadosService;
      }();

      _EstadosService.ɵfac = function EstadosService_Factory(t) {
        return new (t || _EstadosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _EstadosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _EstadosService,
        factory: _EstadosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8511: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IngresosService": function IngresosService() {
          return (
            /* binding */
            _IngresosService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _IngresosService = /*#__PURE__*/function () {
        function _IngresosService(http) {
          _classCallCheck(this, _IngresosService);

          this.http = http;
          this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_IngresosService, [{
          key: "getIngresos",
          value: function getIngresos() {
            return this.http.get("".concat(this.API_URI, "/ingresos"));
          } // getItem(id: string) {
          //   return this.http.get(`${this.API_URI}/herramientas/${id}`);
          // }

        }, {
          key: "createIngreso",
          value: function createIngreso(ingreso) {
            return this.http.post("".concat(this.API_URI, "/ingresos"), ingreso);
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(id) {
            return this.http["delete"]("".concat(this.API_URI, "/ingresos/").concat(id));
          }
        }, {
          key: "updateItem",
          value: function updateItem(id, ingreso) {
            return this.http.put("".concat(this.API_URI, "/ingresos/").concat(id), ingreso);
          }
        }]);

        return _IngresosService;
      }();

      _IngresosService.ɵfac = function IngresosService_Factory(t) {
        return new (t || _IngresosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _IngresosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _IngresosService,
        factory: _IngresosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    526: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventarioSQLService": function InventarioSQLService() {
          return (
            /* binding */
            _InventarioSQLService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth/auth.service */
      384);

      var _InventarioSQLService = /*#__PURE__*/function () {
        function _InventarioSQLService(http, auth) {
          _classCallCheck(this, _InventarioSQLService);

          this.http = http;
          this.auth = auth;
          this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_InventarioSQLService, [{
          key: "getInventario",
          value: function getInventario() {
            return this.http.get("".concat(this.API_URI, "/herramientas"));
          }
        }, {
          key: "getItem",
          value: function getItem(id) {
            return this.http.get("".concat(this.API_URI, "/herramientas/").concat(id));
          }
        }, {
          key: "createItem",
          value: function createItem(item) {
            var nuevoItem = {
              nombre: item.nombre,
              id_categoria: +item.categoria,
              id_subcategoria: +item.subcategoria,
              cantidad: item.cantidad,
              id_unidad: +item.unidades,
              id_ubicacion: +item.ubicacion,
              id_estado: 1,
              vencimiento: item.vencimiento,
              serial: item.serial,
              precio: item.precio,
              descripcion: item.descripcion,
              cantidadObra: item.cantidadObra
            };
            return this.http.post("".concat(this.API_URI, "/herramientas"), nuevoItem);
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(id) {
            return this.http["delete"]("".concat(this.API_URI, "/herramientas/").concat(id));
          }
        }, {
          key: "updateItem",
          value: function updateItem(id, item) {
            var full = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (full) {
              var nuevoItem = {
                nombre: item.nombre,
                id_categoria: +item.categoria,
                id_subcategoria: +item.subcategoria,
                cantidad: item.cantidad,
                id_unidad: +item.unidades,
                id_ubicacion: +item.ubicacion,
                id_estado: +item.estado,
                vencimiento: item.vencimiento,
                serial: item.serial,
                precio: item.precio,
                descripcion: item.descripcion,
                cantidadObra: item.cantidadObra
              };
              return this.http.put("".concat(this.API_URI, "/herramientas/").concat(id), nuevoItem);
            } else {
              return this.http.put("".concat(this.API_URI, "/herramientas/").concat(id), item);
            }
          }
        }]);

        return _InventarioSQLService;
      }();

      _InventarioSQLService.ɵfac = function InventarioSQLService_Factory(t) {
        return new (t || _InventarioSQLService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
      };

      _InventarioSQLService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _InventarioSQLService,
        factory: _InventarioSQLService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    3567: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalidadesService": function ModalidadesService() {
          return (
            /* binding */
            _ModalidadesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _ModalidadesService = /*#__PURE__*/function () {
        function _ModalidadesService(http) {
          _classCallCheck(this, _ModalidadesService);

          this.http = http;
          this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_ModalidadesService, [{
          key: "getModalidades",
          value: function getModalidades() {
            return this.http.get("".concat(this.API_URI, "/modalidades"));
          }
        }, {
          key: "getModadlidad",
          value: function getModadlidad(id) {
            return this.http.get("".concat(this.API_URI, "/modalidades/").concat(id));
          }
        }, {
          key: "createModalidad",
          value: function createModalidad(modalidad) {
            return this.http.post("".concat(this.API_URI, "/modalidades"), modalidad);
          }
        }, {
          key: "deleteModalidad",
          value: function deleteModalidad(id) {
            return this.http["delete"]("".concat(this.API_URI, "/modalidades/").concat(id));
          }
        }, {
          key: "updateModalidad",
          value: function updateModalidad(id, modalidad) {
            return this.http.put("".concat(this.API_URI, "/modalidades/").concat(id), modalidad);
          }
        }]);

        return _ModalidadesService;
      }();

      _ModalidadesService.ɵfac = function ModalidadesService_Factory(t) {
        return new (t || _ModalidadesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ModalidadesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ModalidadesService,
        factory: _ModalidadesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9786: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubcategoriasService": function SubcategoriasService() {
          return (
            /* binding */
            _SubcategoriasService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _SubcategoriasService = /*#__PURE__*/function () {
        function _SubcategoriasService(http) {
          _classCallCheck(this, _SubcategoriasService);

          this.http = http;
          this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_SubcategoriasService, [{
          key: "getSubcategorias",
          value: function getSubcategorias() {
            return this.http.get("".concat(this.API_URI, "/subcategorias"));
          }
        }, {
          key: "getSubcategoria",
          value: function getSubcategoria(id) {
            return this.http.get("".concat(this.API_URI, "/subcategorias/").concat(id));
          }
        }, {
          key: "createSubcategoria",
          value: function createSubcategoria(subcategoria) {
            return this.http.post("".concat(this.API_URI, "/subcategorias"), subcategoria);
          }
        }, {
          key: "deleteSubcategoria",
          value: function deleteSubcategoria(id) {
            return this.http["delete"]("".concat(this.API_URI, "/subcategorias/").concat(id));
          }
        }, {
          key: "updateSubcategoria",
          value: function updateSubcategoria(id, subcategoria) {
            return this.http.put("".concat(this.API_URI, "/subcategorias/").concat(id), subcategoria);
          }
        }]);

        return _SubcategoriasService;
      }();

      _SubcategoriasService.ɵfac = function SubcategoriasService_Factory(t) {
        return new (t || _SubcategoriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _SubcategoriasService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _SubcategoriasService,
        factory: _SubcategoriasService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    697: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UbicacionesService": function UbicacionesService() {
          return (
            /* binding */
            _UbicacionesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _UbicacionesService = /*#__PURE__*/function () {
        function _UbicacionesService(http) {
          _classCallCheck(this, _UbicacionesService);

          this.http = http;
          this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_UbicacionesService, [{
          key: "getUbicaciones",
          value: function getUbicaciones() {
            return this.http.get("".concat(this.API_URI, "/ubicaciones"));
          }
        }, {
          key: "getUbicacion",
          value: function getUbicacion(id) {
            return this.http.get("".concat(this.API_URI, "/ubicaciones/").concat(id));
          }
        }, {
          key: "createUbicacion",
          value: function createUbicacion(categoria) {
            return this.http.post("".concat(this.API_URI, "/ubicaciones"), categoria);
          }
        }, {
          key: "deleteUbicacion",
          value: function deleteUbicacion(id) {
            return this.http["delete"]("".concat(this.API_URI, "/ubicaciones/").concat(id));
          }
        }, {
          key: "updateUbicacion",
          value: function updateUbicacion(id, categoria) {
            return this.http.put("".concat(this.API_URI, "/ubicaciones/").concat(id), categoria);
          }
        }]);

        return _UbicacionesService;
      }();

      _UbicacionesService.ɵfac = function UbicacionesService_Factory(t) {
        return new (t || _UbicacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _UbicacionesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _UbicacionesService,
        factory: _UbicacionesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9451: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnidadesService": function UnidadesService() {
          return (
            /* binding */
            _UnidadesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _UnidadesService = /*#__PURE__*/function () {
        function _UnidadesService(http) {
          _classCallCheck(this, _UnidadesService);

          this.http = http;
          this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_UnidadesService, [{
          key: "getUnidades",
          value: function getUnidades() {
            return this.http.get("".concat(this.API_URI, "/unidades"));
          }
        }, {
          key: "getUnidad",
          value: function getUnidad(id) {
            return this.http.get("".concat(this.API_URI, "/unidades/").concat(id));
          }
        }, {
          key: "createUnidad",
          value: function createUnidad(unidad) {
            return this.http.post("".concat(this.API_URI, "/unidades"), unidad);
          }
        }, {
          key: "deleteUnidad",
          value: function deleteUnidad(id) {
            return this.http["delete"]("".concat(this.API_URI, "/unidades/").concat(id));
          }
        }, {
          key: "updateUnidad",
          value: function updateUnidad(id, unidad) {
            return this.http.put("".concat(this.API_URI, "/unidades/").concat(id), unidad);
          }
        }]);

        return _UnidadesService;
      }();

      _UnidadesService.ɵfac = function UnidadesService_Factory(t) {
        return new (t || _UnidadesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _UnidadesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _UnidadesService,
        factory: _UnidadesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1209: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsuariosService": function UsuariosService() {
          return (
            /* binding */
            _UsuariosService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _UsuariosService = /*#__PURE__*/function () {
        function _UsuariosService(http) {
          _classCallCheck(this, _UsuariosService);

          this.http = http;
          this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_UsuariosService, [{
          key: "getUsuarios",
          value: function getUsuarios() {
            return this.http.get("".concat(this.API_URI, "/empleados"));
          }
        }, {
          key: "getUsuario",
          value: function getUsuario(id) {
            return this.http.get("".concat(this.API_URI, "/empleados/").concat(id));
          } // createUsuario(categoria: any) {
          //   return this.http.post(`${this.API_URI}/ubicaciones`, categoria);
          // }
          // deleteUbicacion(id: string) {
          //   return this.http.delete(`${this.API_URI}/ubicaciones/${id}`);
          // }

        }, {
          key: "updateUsuario",
          value: function updateUsuario(id, usuario) {
            return this.http.put("".concat(this.API_URI, "/empleados/").concat(id), usuario);
          }
        }]);

        return _UsuariosService;
      }();

      _UsuariosService.ɵfac = function UsuariosService_Factory(t) {
        return new (t || _UsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _UsuariosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _UsuariosService,
        factory: _UsuariosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2282: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function LoginComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
        }
      }

      function LoginComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_12_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onSubmit(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Inicia Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "N\xFAmero de C\xE9dula");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Olvid\xE9 mi Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ingresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r3.valid);
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(router, auth) {
          _classCallCheck(this, _LoginComponent);

          this.router = router;
          this.auth = auth;
          this.isLoading = false;
          this.error = null;
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this21 = this;

            if (!form.valid) {
              return;
            }

            this.error = null;
            var cedula = form.value.cedula;
            var password = form.value.password;
            this.isLoading = true;
            this.auth.signIn(cedula, password).subscribe(function (resData) {
              _this21.isLoading = false;
            }, function (errorRes) {
              _this21.error = 'Error: ' + errorRes.error.message;
              _this21.isLoading = false;
            });
            form.reset();
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 13,
        vars: 3,
        consts: [[1, "container"], [1, "row", "d-flex", "justify-content-center"], [1, "col-10", "col-sm-8", "col-md-6", "col-lg-5", "col-xl-4", "shadow", "mt-5"], [1, "row"], [1, "col", "shadow", "bg-white", "d-flex", "justify-content-center"], [1, "pt-4", "pb-4"], ["src", "../../../assets/logo-gris.svg", 1, "card-img-top", 2, "max-width", "450px", "width", "100%"], [1, "row", "bg-white"], [1, "col"], [1, "px-3", "pt-2", "pb-4"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "text-primary", "align-self-center", 2, "text-align", "center", "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "mt-3", "pb-1"], [1, "pb-2"], ["type", "text", "required", "", "ngModel", "", "name", "cedula", 1, "form-control"], [1, "pb-3"], ["type", "password", "required", "", "ngModel", "", "name", "password", 1, "form-control"], [1, "pt-2", "pb-3"], ["href", "#"], ["type", "submit", 1, "btn", "btn-success", "float-end", 3, "disabled"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 4, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_form_12_Template, 18, 1, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
        styles: [".body[_ngcontent-%COMP%] {\r\n  background-color: cadetblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    6534: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuComponent": function MenuComponent() {
          return (
            /* binding */
            _MenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);

      function MenuComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Inventario");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "M\xF3dulo de gesti\xF3n de inventario");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Inventario");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ingresos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "fa-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Egresos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faWarehouse);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faSignInAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faSignOutAlt);
        }
      }

      function MenuComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Procura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "M\xF3dulo de procura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Proveedores");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Productos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faStore);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faHammer);
        }
      }

      function MenuComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Administrador");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "M\xF3dulo de administraci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Personal");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faUsers);
        }
      }

      var _c0 = function _c0() {
        return [2];
      };

      var _c1 = function _c1() {
        return [3];
      };

      var _c2 = function _c2() {
        return [1];
      };

      var _MenuComponent = /*#__PURE__*/function () {
        function _MenuComponent(auth) {
          _classCallCheck(this, _MenuComponent);

          this.auth = auth;
          this.faWarehouse = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faWarehouse;
          this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSignInAlt;
          this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSignOutAlt;
          this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser;
          this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHome;
          this.faStore = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStore;
          this.faUsersCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUsersCog;
          this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUsers;
          this.faHammer = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHammer;
        }

        _createClass(_MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.userSub = this.auth.user.subscribe(user => {
            //   this.isAuthenticated = !!user;
            //   // EQUIVALENTE A this.isAuthenticated = !user ? false : true;
            // });
          }
        }]);

        return _MenuComponent;
      }();

      _MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || _MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MenuComponent,
        selectors: [["app-menu"]],
        decls: 9,
        vars: 6,
        consts: [[1, "container"], [1, "row", "mb-3", "pt-3"], [1, "col"], [1, "row", "justify-content-center"], ["class", "col-12 col-sm-6 col-lg-4 mt-5", 4, "ngIf"], [1, "col-12", "col-sm-6", "col-lg-4", "mt-5"], [1, "card-section", "rounded", "p-3", "bg-white"], [1, "card-header-style-within", "header-color-inventario", "rounded", "pb-3"], [1, "card-header-title", "text-white", "text-center", "pt-3"], [1, "card-body", "text-center"], [1, "card-title", "mb-4"], [1, "row", "gy-4", "justify-content-center"], [1, "col-6", "col-sm-12", "col-md-6"], ["routerLink", "/inventario", 1, "btn", "btn-outline-dark", "shadow", "w-100"], [3, "icon"], ["routerLink", "/inventario/ingresos", 1, "btn", "btn-outline-dark", "shadow", "w-100"], ["routerLink", "/inventario/egresos", 1, "btn", "btn-outline-dark", "shadow", "w-100"], [1, "card-header-style-within", "header-color-procura", "rounded", "pb-3"], ["routerLink", "/procura/proveedores", 1, "btn", "btn-outline-dark", "shadow", "w-100"], ["routerLink", "/procura/productos", 1, "btn", "btn-outline-dark", "shadow", "w-100"], [1, "card-header-style-within", "header-color-administrador", "rounded", "pb-3"], ["routerLink", "/administrador/empleados", 1, "btn", "btn-outline-dark", "shadow", "w-100"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bienvenido, seleccione el m\xF3dulo al que desee acceder:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MenuComponent_div_6_Template, 24, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MenuComponent_div_7_Template, 19, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MenuComponent_div_8_Template, 14, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.hasPermission(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.hasPermission(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.hasPermission(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
        styles: ["section[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 40px;\r\n    margin-top: 110px;\r\n}\r\nsection[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    color: black;\r\n    font-size: 3.5em;\r\n}\r\n\r\n.header-color-inventario[_ngcontent-%COMP%]{\r\n    background: linear-gradient(-90deg, #026918, #51d17b );\r\n}\r\n.header-color-administrador[_ngcontent-%COMP%]{\r\n    background: linear-gradient(-90deg, #2040f3, #41a9ee );\r\n}\r\n.header-color-procura[_ngcontent-%COMP%]{\r\n    background: linear-gradient(-90deg, #c03131, #fcb860 );\r\n}\r\n\r\n.btn-color-inventario[_ngcontent-%COMP%]{\r\n    background: linear-gradient(-90deg, #026918, #51d17b );\r\n    color: aliceblue;\r\n    border: none;\r\n}\r\n.btn-color-administrador[_ngcontent-%COMP%]{\r\n    background: linear-gradient(-90deg, #2040f3, #41a9ee );\r\n    color: aliceblue;\r\n    border: none;\r\n}\r\n.btn-color-procura[_ngcontent-%COMP%]{\r\n    background: linear-gradient(-90deg, #c03131, #fcb860 );\r\n    color: aliceblue;\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0I7QUFDL0I7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBLHNDQUFzQztBQUN0QztJQUNJLHNEQUFzRDtBQUMxRDtBQUNBO0lBQ0ksc0RBQXNEO0FBQzFEO0FBQ0E7SUFDSSxzREFBc0Q7QUFDMUQ7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSxzREFBc0Q7SUFDdEQsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNEQUFzRDtJQUN0RCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0RBQXNEO0lBQ3RELGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qRVNUSUxPUyBERSBTRUNDSU9ORVMgTE9DQUxFUyovXHJcbnNlY3Rpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTEwcHg7XHJcbn1cclxuc2VjdGlvbiAuY29udGVudCBoMntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDMuNWVtO1xyXG59XHJcblxyXG4vKkVTVElMT1MgREUgSEVBREVSUyBERSBDQVJEUyBMT0NBTEVTKi9cclxuLmhlYWRlci1jb2xvci1pbnZlbnRhcmlve1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgIzAyNjkxOCwgIzUxZDE3YiApO1xyXG59XHJcbi5oZWFkZXItY29sb3ItYWRtaW5pc3RyYWRvcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICMyMDQwZjMsICM0MWE5ZWUgKTtcclxufVxyXG4uaGVhZGVyLWNvbG9yLXByb2N1cmF7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjYzAzMTMxLCAjZmNiODYwICk7XHJcbn1cclxuXHJcbi8qRVNUSUxPUyBERSBCT1RPTkVTIERFIENBUkRTIExPQ0FMRVMqL1xyXG4uYnRuLWNvbG9yLWludmVudGFyaW97XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjMDI2OTE4LCAjNTFkMTdiICk7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5idG4tY29sb3ItYWRtaW5pc3RyYWRvcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICMyMDQwZjMsICM0MWE5ZWUgKTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJ0bi1jb2xvci1wcm9jdXJhe1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgI2MwMzEzMSwgI2ZjYjg2MCApO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    4696: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);

      function NavbarComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Men\xFA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faHome);
        }
      }

      function NavbarComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Inventario ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Inventario");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Ingresos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Egresos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faWarehouse);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faWarehouse);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faSignInAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faSignOutAlt);
        }
      }

      function NavbarComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Procura ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Proveedores");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Productos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faStore);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faStore);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faHammer);
        }
      }

      function NavbarComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Administrador ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Personal");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faUsersCog);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faUsers);
        }
      }

      function NavbarComponent_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Men\xFA Administrador");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faSignOutAlt);
        }
      }

      function NavbarComponent_li_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Men\xFA Procura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.faSignOutAlt);
        }
      }

      function NavbarComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Usuario ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_18_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.alPerfil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_18_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cerrar Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r6.faUser);
        }
      }

      var _NavbarComponent = /*#__PURE__*/function () {
        function _NavbarComponent(auth, router) {
          _classCallCheck(this, _NavbarComponent);

          this.auth = auth;
          this.router = router;
          this.isAuthenticated = false;
          this.cedulaUser = null;
          this.faWarehouse = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faWarehouse;
          this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSignInAlt;
          this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSignOutAlt;
          this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser;
          this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHome;
          this.faStore = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStore;
          this.faUsersCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUsersCog;
          this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUsers;
          this.faHammer = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHammer;
        }

        _createClass(_NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.userSub = this.auth.user.subscribe(function (user) {
              _this22.isAuthenticated = !!user; // EQUIVALENTE A this.isAuthenticated = !user ? false : true;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }, {
          key: "alPerfil",
          value: function alPerfil() {
            this.router.navigate(["usuario/".concat(this.auth.user.getValue().cedula)]);
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.auth.logout();
          }
        }]);

        return _NavbarComponent;
      }();

      _NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || _NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 19,
        vars: 7,
        consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark", "bg-dark", "shadow"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "ps-5"], ["src", "../../../assets/logo.svg", "alt", "Logo", 1, "img-fluid", "me-2", 2, "max-width", "50px", "width", "100%", "margin", "0", "padding", "0"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], ["class", "nav-item ms-5", 4, "ngIf"], [1, "d-flex"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], ["class", "nav-item dropdown me-3", 4, "ngIf"], ["class", "nav-item me-2", 4, "ngIf"], ["class", "nav-item dropdown mx-5 pe-5", 4, "ngIf"], [1, "nav-item", "ms-5"], ["routerLink", "/menu", 1, "nav-link"], [3, "icon"], [1, "sr-only"], [1, "nav-item", "dropdown", "me-3"], ["href", "#", "id", "dropdownInventario", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "dropdownInventario", 1, "dropdown-menu"], ["routerLink", "/inventario", 1, "dropdown-item"], ["routerLink", "/inventario/ingresos", 1, "dropdown-item"], ["routerLink", "/inventario/egresos", 1, "dropdown-item"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/procura/proveedores", 1, "dropdown-item"], ["routerLink", "/procura/productos", 1, "dropdown-item"], ["routerLink", "/administrador/empleados", 1, "dropdown-item"], [1, "nav-item", "me-2"], ["routerLink", "/administrador", 1, "nav-link"], ["routerLink", "/procura", 1, "nav-link"], [1, "nav-item", "dropdown", "mx-5", "pe-5"], ["role", "button", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " GrupoCDV");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavbarComponent_li_9_Template, 6, 1, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavbarComponent_li_13_Template, 17, 4, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_li_14_Template, 13, 3, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavbarComponent_li_15_Template, 9, 2, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavbarComponent_li_16_Template, 4, 1, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavbarComponent_li_17_Template, 4, 1, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NavbarComponent_li_18_Template, 13, 1, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.router.url.includes("administrador"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated && ctx.router.url.includes("procura"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6223: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SinAuthComponent": function SinAuthComponent() {
          return (
            /* binding */
            _SinAuthComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SinAuthComponent = /*#__PURE__*/function () {
        function _SinAuthComponent() {
          _classCallCheck(this, _SinAuthComponent);
        }

        _createClass(_SinAuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SinAuthComponent;
      }();

      _SinAuthComponent.ɵfac = function SinAuthComponent_Factory(t) {
        return new (t || _SinAuthComponent)();
      };

      _SinAuthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SinAuthComponent,
        selectors: [["app-sin-auth"]],
        decls: 3,
        vars: 0,
        consts: [[1, "container"], [1, "card"]],
        template: function SinAuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No tienes autorizaci\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW4tYXV0aC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    5474: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsuarioComponent": function UsuarioComponent() {
          return (
            /* binding */
            _UsuarioComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/usuarios.service */
      1209);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function UsuarioComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Informaci\xF3n personal");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Permisos");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Inventario");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Administraci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Cambiar contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, ctx_r0.usuario.nombre), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 7, ctx_r0.usuario.apellido), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 9, ctx_r0.usuario.cargo));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cedula);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.usuario.correo);
        }
      }

      function UsuarioComponent_p_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Las contrase\xF1as no coinciden");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _UsuarioComponent = /*#__PURE__*/function () {
        function _UsuarioComponent(route, servicioUsuarios, auth, router) {
          _classCallCheck(this, _UsuarioComponent);

          this.route = route;
          this.servicioUsuarios = servicioUsuarios;
          this.auth = auth;
          this.router = router;
          this.cedula = null;
          this.usuario = null;
        }

        _createClass(_UsuarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.cedula = this.route.snapshot.params['id'];
            this.servicioUsuarios.getUsuario(this.cedula).subscribe(function (res) {
              _this23.usuario = res[0];
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "changePass",
          value: function changePass(form) {
            this.auth.changePassword(this.cedula, form.value.password).subscribe(function (resData) {
              console.log(resData);
              form.reset();
            }, function (errorRes) {
              console.log(errorRes);
            });
            ;
          }
        }]);

        return _UsuarioComponent;
      }();

      _UsuarioComponent.ɵfac = function UsuarioComponent_Factory(t) {
        return new (t || _UsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_0__.UsuariosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _UsuarioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _UsuarioComponent,
        selectors: [["app-usuario"]],
        decls: 30,
        vars: 3,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["class", "card shadow", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-warning"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [3, "ngSubmit"], ["passForm", "ngForm"], [1, "modal-body"], [1, "mb-3"], ["for", "exampleFormControlInput1", 1, "form-label"], ["ngModel", "", "required", "", "type", "password", "id", "contrasena", "name", "password", 1, "form-control"], ["pass", "ngModel"], ["ngModel", "", "required", "", "type", "password", "id", "contrasena2", "name", "password2", 1, "form-control"], ["pass2", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "card", "shadow"], [1, "card-header", "bg-info"], [1, "card-body"], [1, "col-5", "col-lg-3"], ["src", "../../../assets/profileGeneric.png", "alt", "profileGeneric"], [1, "col-3"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-warning"], [1, "text-danger"]],
        template: function UsuarioComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UsuarioComponent_div_3_Template, 31, 11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Cambiar contrase\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UsuarioComponent_Template_form_ngSubmit_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);

              return ctx.changePass(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Nueva contrase\xF1a:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Repita la contrase\xF1a:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, UsuarioComponent_p_24_Template, 2, 0, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Cerrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Guardar nueva contrase\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.usuario);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.dirty && _r3.dirty && _r2.value != _r3.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r1.valid || _r2.value != _r3.value);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3VhcmlvLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    2340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        dirBackend: 'http://localhost:3000'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map