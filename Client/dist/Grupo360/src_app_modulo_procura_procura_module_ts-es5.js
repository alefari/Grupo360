(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkgrupo360"] = self["webpackChunkgrupo360"] || []).push([["src_app_modulo_procura_procura_module_ts"], {
    /***/
    3435: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActualizarProductosComponent": function ActualizarProductosComponent() {
          return (
            /* binding */
            _ActualizarProductosComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_productos_proveedores_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/productos-proveedores.service */
      8745);
      /* harmony import */


      var src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/areas.service */
      6802);
      /* harmony import */


      var src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/proveedores.service */
      3449);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334); //ICONOS FONTAWESOME


      var _c0 = ["fi"];

      function ActualizarProductosComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var area_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", area_r8.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](area_r8.nombre);
        }
      }

      function ActualizarProductosComponent_ng_container_36_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActualizarProductosComponent_ng_container_36_tr_1_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var producto_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.asignarActualizar(producto_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Actualizar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActualizarProductosComponent_ng_container_36_tr_1_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var producto_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r15.asignarDetalles(producto_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Detalles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActualizarProductosComponent_ng_container_36_tr_1_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var producto_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r17.asignarBorrar(producto_r9.id, producto_r9.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var producto_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](producto_r9.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](producto_r9.area);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, producto_r9.precio), " / ", producto_r9.unidad, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 7, producto_r9.fecha));
        }
      }

      function ActualizarProductosComponent_ng_container_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ActualizarProductosComponent_ng_container_36_tr_1_Template, 19, 9, "tr", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (producto_r9.nombre.toLocaleLowerCase().includes(_r0.value.toLowerCase()) || _r0.value == "") && (producto_r9.area.toLocaleLowerCase().includes(_r1.value.toLowerCase()) || _r1.value == ""));
        }
      }

      function ActualizarProductosComponent_tr_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, ctx_r4.datosInfoProducto.precio), " / ", ctx_r4.datosInfoProducto.unidad, "");
        }
      }

      function ActualizarProductosComponent_tr_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Garant\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r5.datosInfoProducto.garantia, " / ", ctx_r5.datosInfoProducto.dias_garantia, " D\xEDas");
        }
      }

      function ActualizarProductosComponent_tr_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fecha Actualizado");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r6.datosInfoProducto.fecha));
        }
      }

      var _ActualizarProductosComponent = /*#__PURE__*/function () {
        function _ActualizarProductosComponent(servicioProductosProveedores, servicioAreas, servicioProveedores, router, route) {
          _classCallCheck(this, _ActualizarProductosComponent);

          this.servicioProductosProveedores = servicioProductosProveedores;
          this.servicioAreas = servicioAreas;
          this.servicioProveedores = servicioProveedores;
          this.router = router;
          this.route = route; //ICONOS FONTAWESOME

          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimesCircle;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPlusCircle;
          this.faMinusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMinusCircle; //VARRIABLES DE BD

          this.productosProveedor = [];
          this.areas = [];
          this.idProducto = null; //VARIABLES DE FUNCIONES COMPONENT

          this.datosInfoProducto = {
            id: null,
            nombre: null,
            area: null,
            unidad: null,
            garantia: null,
            dias_garantia: null,
            proveedor: null,
            fecha_act: null,
            precio: null
          };
          this.datosActualizarProducto = {
            id: null,
            nombre: null,
            area: null,
            unidad: null,
            garantia: null,
            dias_garantia: null,
            proveedor: null,
            fecha_act: null,
            precio: null
          };
          this.datosProveedor = {
            id: null,
            nombre: null,
            id_area: null,
            direccion: null,
            correo: null,
            credito: null,
            dias_credito: null,
            ciudad: null,
            telefono: null,
            celular: null,
            contacto: null,
            rif: null,
            descripcion: null
          };
          this.precioNuevo = null;
          this.productoProveedorBorrar = {
            id: null,
            nombre: null
          };
        }

        _createClass(_ActualizarProductosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.idProducto = this.route.snapshot.params['id'];
            this.servicioProductosProveedores.getProductosProveedoresElegido(this.idProducto).subscribe(function (res) {
              _this.productosProveedor = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioAreas.getAreas().subscribe(function (res) {
              _this.areas = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioProveedores.getProveedorElegido(this.idProducto).subscribe(function (res) {
              _this.datosProveedor = res[0];
            }, function (err) {
              return console.log(err);
            });
          } //FUNCION PARA BOTON DE DETALLES DE PRODUCTO

        }, {
          key: "asignarDetalles",
          value: function asignarDetalles(producto) {
            this.datosInfoProducto = producto;
          } //FUNCION PARA BOTON DE ACTUALIZAR  PRODUCTO

        }, {
          key: "asignarActualizar",
          value: function asignarActualizar(producto) {
            this.datosActualizarProducto = producto;
          } //FUNCION PARA BORRAR PRODUCTO

        }, {
          key: "actualizarProductoPrecio",
          value: function actualizarProductoPrecio() {
            if (this.precioNuevo != null && this.precioNuevo >= 0) {
              this.servicioProductosProveedores.updatePrecioProducto(this.datosActualizarProducto.id, this.precioNuevo).subscribe(function (res) {
                console.log(res);
              }, function (err) {
                console.log(err);
              });
            }

            this.form.reset();
          } //FUNCION PARA BOTON DE BORRAR PRODUCTO (DATOS)

        }, {
          key: "asignarBorrar",
          value: function asignarBorrar(id, nombre) {
            this.productoProveedorBorrar.nombre = nombre;
            this.productoProveedorBorrar.id = id;
          } //FUNCION PARA BORRAR PRODUCTO

        }, {
          key: "eliminarProductoProducto",
          value: function eliminarProductoProducto() {
            this.servicioProductosProveedores.deleteProductoProveedor(this.productoProveedorBorrar.id).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return _ActualizarProductosComponent;
      }();

      _ActualizarProductosComponent.ɵfac = function ActualizarProductosComponent_Factory(t) {
        return new (t || _ActualizarProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_productos_proveedores_service__WEBPACK_IMPORTED_MODULE_0__.ProductosProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_2__.ProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
      };

      _ActualizarProductosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ActualizarProductosComponent,
        selectors: [["app-actualizar-productos"]],
        viewQuery: function ActualizarProductosComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 143,
        vars: 23,
        consts: [[1, "bg-white", "shadow-lg", "container", "body"], [1, "container", "pt-3"], [1, "mx-auto"], [1, "container"], [1, "table-responsive-md", "mt-lg-3"], [1, "table", "table-sm", "shadow", "table-striped"], [1, "table-dark"], ["scope", "col-2"], ["ngModel", "", "name", "filtroNombre", "type", "text", "placeholder", "Filtro por nombre", 1, "w-75", "form-control", "form-control-sm"], ["filtroNombre", "ngModel"], ["ngModel", "", "name", "filtroArea", 1, "form-select", "form-select-sm"], ["filtroArea", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["scope", "col"], ["scope", "col-sm-2"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "routerLink", "/procura/proveedores", 1, "btn", "btn-secondary"], ["id", "modalInfo", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-info"], ["id", "exampleModalLabel", 1, "modal-title", "text-white"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table", "table-sm"], [4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [3, "icon"], ["tabindex", "-1", "id", "modalEliminar", 1, "modal", "fade"], [1, "modal-header", "bg-danger"], [1, "modal-title", "text-white"], [1, "text-danger"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-danger", 3, "click"], ["fi", "ngForm"], ["tabindex", "-1", "id", "modalActualizar", 1, "modal", "fade"], [1, "modal-header", "bg-primary"], [1, "row"], [1, "row", "mb-4", "mt-4"], [1, "col"], [1, "mb-2"], ["for", "exampleInputEmail1"], [1, "input-group"], ["onkeypress", "return event.charCode >= 48", "min", "1", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["disabled", "", "type", "text", "ngModel", "", 1, "form-control", "mt-2", 3, "placeholder", "name"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"], ["class", "bg-light table-sm linea-tabla", "scope", "row", 4, "ngIf"], ["scope", "row", 1, "bg-light", "table-sm", "linea-tabla"], [1, "col-sm-2"], [1, "btn-group"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalActualizar", 1, "btn", "btn-primary", "text-white", "btn-sm", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalInfo", 1, "btn", "btn-info", "text-white", "btn-sm", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalEliminar", 1, "btn", "btn-danger", "btn-sm", 3, "click"]],
        template: function ActualizarProductosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Productos de: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "thead", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Area (Todas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ActualizarProductosComponent_option_20_Template, 2, 2, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "thead", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\xC1rea");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Precio/Unidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Fecha Actualizado");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ActualizarProductosComponent_ng_container_36_Template, 2, 1, "ng-container", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "h5", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "table", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\xC1rea");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, ActualizarProductosComponent_tr_69_Template, 7, 4, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, ActualizarProductosComponent_tr_70_Template, 6, 2, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, ActualizarProductosComponent_tr_71_Template, 7, 3, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "fa-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h5", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Eliminar Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "\xBFEst\xE1s seguro que deseas eliminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "?. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Esta acci\xF3n es irreversible.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActualizarProductosComponent_Template_button_click_99_listener() {
              return ctx.eliminarProductoProducto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " Eliminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "form", null, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "h5", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Actualizar Precio Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Usted esta actualizando el producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, " del proveedor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "?.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Precio actual");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](126, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Precio nuevo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ActualizarProductosComponent_Template_input_ngModelChange_131_listener($event) {
              return ctx.precioNuevo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Esta acci\xF3n es irreversible.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "fa-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActualizarProductosComponent_Template_button_click_141_listener() {
              return ctx.actualizarProductoPrecio();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " Actualizar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosProveedor.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.areas);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productosProveedor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosInfoProducto.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosInfoProducto.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosInfoProducto.area);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosInfoProducto.nombreProveedor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.datosInfoProducto.precio != null && ctx.datosInfoProducto.unidad != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.datosInfoProducto.garantia != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.datosInfoProducto.fecha != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.productoProveedorBorrar.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosActualizarProducto.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosActualizarProducto.nombreProveedor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](126, 21, ctx.datosActualizarProducto.precio), " por ", ctx.datosActualizarProducto.unidad, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.precioNuevo)("name", "precioNuevo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx.datosActualizarProducto.unidad)("name", "unidadesAct");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faTimesCircle);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3R1YWxpemFyLXByb2R1Y3Rvcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    3515: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AgregarProductoComponent": function AgregarProductoComponent() {
          return (
            /* binding */
            _AgregarProductoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_proveedores_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../services/proveedores.service */
      3449);
      /* harmony import */


      var src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/areas.service */
      6802);
      /* harmony import */


      var src_app_services_productos_proveedores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/productos-proveedores.service */
      8745);
      /* harmony import */


      var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/unidades.service */
      9451);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334); //ICONOS FONTAWESOME


      var _c0 = ["f"];

      function AgregarProductoComponent_div_10_small_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingrese un nombre.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AgregarProductoComponent_div_10_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var area_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", area_r20.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r20.nombre);
        }
      }

      function AgregarProductoComponent_div_10_small_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingrese un \xE1rea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AgregarProductoComponent_div_10_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prov_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", prov_r21.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](prov_r21.nombre);
        }
      }

      function AgregarProductoComponent_div_10_small_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingrese un proveedor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AgregarProductoComponent_div_10_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidad_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", unidad_r22.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](unidad_r22.nombre);
        }
      }

      function AgregarProductoComponent_div_10_small_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingrese un precio.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AgregarProductoComponent_div_10_small_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingrese una unidad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function AgregarProductoComponent_div_10_ng_container_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 40, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AgregarProductoComponent_div_10_ng_container_47_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r24.nuevoProducto[i_r3].dias_garantia = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r18.nuevoProducto[i_r3].dias_garantia)("name", "dias" + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, i_r3));
        }
      }

      function AgregarProductoComponent_div_10_small_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Reporte garant\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AgregarProductoComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AgregarProductoComponent_div_10_Template_input_ngModelChange_9_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var i_r3 = restoredCtx.index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r28.nuevoProducto[i_r3].nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AgregarProductoComponent_div_10_small_11_Template, 2, 0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\xC1rea profesional");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AgregarProductoComponent_div_10_Template_select_ngModelChange_15_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var i_r3 = restoredCtx.index;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r30.nuevoProducto[i_r3].area = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AgregarProductoComponent_div_10_option_17_Template, 2, 2, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AgregarProductoComponent_div_10_small_18_Template, 2, 0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Proveedor");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "select", 24, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AgregarProductoComponent_div_10_Template_select_ngModelChange_22_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var i_r3 = restoredCtx.index;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r31.nuevoProducto[i_r3].proveedor = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, AgregarProductoComponent_div_10_option_24_Template, 2, 2, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AgregarProductoComponent_div_10_small_25_Template, 2, 0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Precio y Unidades");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AgregarProductoComponent_div_10_Template_input_ngModelChange_30_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var i_r3 = restoredCtx.index;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r32.nuevoProducto[i_r3].precio = $event;
          })("keyup", function AgregarProductoComponent_div_10_Template_input_keyup_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r33.revisarPrecio();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "select", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AgregarProductoComponent_div_10_Template_select_ngModelChange_32_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var i_r3 = restoredCtx.index;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r34.nuevoProducto[i_r3].unidad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, AgregarProductoComponent_div_10_option_34_Template, 2, 2, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AgregarProductoComponent_div_10_small_35_Template, 3, 0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, AgregarProductoComponent_div_10_small_36_Template, 2, 0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Garant\xEDa y d\xEDas");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "select", 32, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AgregarProductoComponent_div_10_Template_select_ngModelChange_41_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var i_r3 = restoredCtx.index;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r35.nuevoProducto[i_r3].garantia = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Si ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, AgregarProductoComponent_div_10_ng_container_47_Template, 3, 4, "ng-container", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, AgregarProductoComponent_div_10_small_48_Template, 3, 0, "small", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.index;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](42);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Producto ", i_r3 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.nuevoProducto[i_r3].nombre)("name", "nombre" + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.nuevoProducto[i_r3].area)("name", "area" + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.areas);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.nuevoProducto[i_r3].proveedor)("name", "proveedor" + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.proveedores);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.nuevoProducto[i_r3].precio)("name", "precio" + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.nuevoProducto[i_r3].unidad)("name", "unidades" + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](31, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.unidades);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r12.valid && _r12.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r13.valid && _r13.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.nuevoProducto[i_r3].garantia)("name", "garantia" + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](33, _c1, i_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r17.value == "Si");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r17.valid && _r17.touched);
        }
      }

      var _AgregarProductoComponent = /*#__PURE__*/function () {
        function _AgregarProductoComponent(servicioProveedores, servicioAreas, servicioProductosProveedores, servicioUnidades, router) {
          _classCallCheck(this, _AgregarProductoComponent);

          this.servicioProveedores = servicioProveedores;
          this.servicioAreas = servicioAreas;
          this.servicioProductosProveedores = servicioProductosProveedores;
          this.servicioUnidades = servicioUnidades;
          this.router = router; //ICONOS FONTAWESOME

          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimesCircle;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPlusCircle;
          this.faMinusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faMinusCircle; //VARIABLES QUE ALMACENAN DATOS DE BD

          this.areas = [];
          this.proveedores = [];
          this.unidades = []; //VARIABLES DE FUNCIONES

          this.nuevoProducto = [{
            id: null,
            nombre: null,
            area: null,
            unidad: null,
            garantia: null,
            dias_garantia: null,
            proveedor: null,
            fecha_act: null,
            precio: null
          }];
          this.valido = true;
        }

        _createClass(_AgregarProductoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.servicioAreas.getAreas().subscribe(function (res) {
              _this2.areas = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioProveedores.getProveedores().subscribe(function (res) {
              _this2.proveedores = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUnidades.getUnidades().subscribe(function (res) {
              _this2.unidades = res;
            }, function (err) {
              return console.log(err);
            });
          } //FUNCION PARA AGREGAR PRODUCTO A BD

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            var _iterator = _createForOfIteratorHelper(this.nuevoProducto),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var productoCiclo = _step.value;

                if (productoCiclo.nombre != null && productoCiclo.nombre != "" && productoCiclo.area != null && productoCiclo.area != "" && productoCiclo.proveedor != null && productoCiclo.proveedor != "" && productoCiclo.precio != null && productoCiclo.precio != "" && productoCiclo.unidad != null && productoCiclo.unidad != "") {
                  if (productoCiclo.garantia == 'No') {
                    productoCiclo.dias_garantia = 0;
                  }

                  this.servicioProductosProveedores.createProductoProveedor(productoCiclo).subscribe(function (res) {
                    console.log(res);

                    _this3.form.reset();

                    _this3.router.navigate(['procura/productos']);
                  }, function (err) {
                    console.log(err);
                  });
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } //FUNCION PARA BORRAR FORMULARIO AGREGAR

        }, {
          key: "borrarForm",
          value: function borrarForm() {
            this.form.reset();
            this.nuevoProducto = [{
              id: null,
              nombre: null,
              area: null,
              unidad: null,
              garantia: null,
              dias_garantia: null,
              proveedor: null,
              fecha_act: null,
              precio: null
            }];
            this.router.navigate(['procura/productos']);
          } //FUNCION PARA REVISAR EL PRECIO INGRESADO POR EL USUARIO

        }, {
          key: "revisarPrecio",
          value: function revisarPrecio() {
            var _iterator2 = _createForOfIteratorHelper(this.nuevoProducto),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var producto = _step2.value;

                if (producto.precio <= 0) {
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
          } //FUNCIONES DE AGREGAR MULTIPLE

        }, {
          key: "agregarProducto",
          value: function agregarProducto() {
            this.nuevoProducto.push({
              id: null,
              nombre: null,
              area: null,
              unidad: null,
              garantia: null,
              dias_garantia: null,
              proveedor: null,
              fecha_act: null,
              precio: null
            });
          }
        }]);

        return _AgregarProductoComponent;
      }();

      _AgregarProductoComponent.ɵfac = function AgregarProductoComponent_Factory(t) {
        return new (t || _AgregarProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_proveedores_service__WEBPACK_IMPORTED_MODULE_0__.ProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_productos_proveedores_service__WEBPACK_IMPORTED_MODULE_2__.ProductosProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_3__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _AgregarProductoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AgregarProductoComponent,
        selectors: [["app-agregar-producto"]],
        viewQuery: function AgregarProductoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 26,
        vars: 8,
        consts: [[1, "margin-top-form"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-agregar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-2"], ["f", "ngForm"], [4, "ngFor", "ngForOf"], [1, "form-footer-style"], [1, "modal-footer"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "icon"], ["type", "button", 1, "btn", "btn-secondary", 3, "hidden", "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "container", "mt-2"], [1, "row", "mt-3", "mb-4"], [1, "col-3"], ["required", "", "type", "text", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["nombre", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "col-2"], ["for", "exampleFormControlSelect1"], ["required", "", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["area", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["proveedor", "ngModel"], ["for", "exampleInputPassword1"], [1, "input-group"], ["onkeypress", "return event.charCode >= 46", "min", "1", "required", "", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange", "keyup"], ["cantidad", "ngModel"], ["required", "", "type", "text", "placeholder", "0", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["unidadX", "ngModel"], ["garantia", "ngModel"], ["value", "Si"], ["value", "No"], [4, "ngIf"], [1, "text-danger"], [3, "value"], ["onkeypress", "return event.charCode >= 46", "min", "1", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"]],
        template: function AgregarProductoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Agregar Producto de Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AgregarProductoComponent_div_10_Template, 49, 35, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AgregarProductoComponent_Template_button_click_14_listener() {
              return ctx.agregarProducto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " M\xE1s Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AgregarProductoComponent_Template_button_click_17_listener() {
              return ctx.nuevoProducto.pop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Menos Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AgregarProductoComponent_Template_button_click_20_listener() {
              return ctx.borrarForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AgregarProductoComponent_Template_button_click_23_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Ingresar ");

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
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.nuevoProducto);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faPlusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.nuevoProducto.length == 1)("disabled", ctx.nuevoProducto.length == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faMinusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r0.valid || !ctx.valido);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faPlusCircle);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"]],
        styles: [".header-color-agregar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #3b8b4c, #51d17b );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFncmVnYXItcHJvZHVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSxxREFBcUQ7QUFDekQiLCJmaWxlIjoiYWdyZWdhci1wcm9kdWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypIRUFERVIgREUgRk9STVMqL1xyXG4uaGVhZGVyLWNvbG9yLWFncmVnYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzYjhiNGMsICM1MWQxN2IgKTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    2398: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AgregarProveedorComponent": function AgregarProveedorComponent() {
          return (
            /* binding */
            _AgregarProveedorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_proveedores_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../services/proveedores.service */
      3449);
      /* harmony import */


      var src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/areas.service */
      6802);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334); //ICONOS FONTAWESOME


      var _c0 = ["f"];

      function AgregarProveedorComponent_small_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ingrese un nombre.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AgregarProveedorComponent_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var area_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", area_r8.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](area_r8.nombre);
        }
      }

      function AgregarProveedorComponent_small_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ingrese un \xE1rea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AgregarProveedorComponent_ng_container_64_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_ng_container_64_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.nuevoProveedor.dias_credito = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r7.nuevoProveedor.dias_credito)("name", "dias");
        }
      }

      var _AgregarProveedorComponent = /*#__PURE__*/function () {
        function _AgregarProveedorComponent(servicioProveedores, servicioAreas, router, auth) {
          _classCallCheck(this, _AgregarProveedorComponent);

          this.servicioProveedores = servicioProveedores;
          this.servicioAreas = servicioAreas;
          this.router = router;
          this.auth = auth; //ICONOS FONTAWESOME

          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimesCircle;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPlusCircle; //VARIABLES QUE ALMACENAN DATOS DE BD

          this.areas = []; //VARIABLES DE FUNCIONES

          this.nuevoProveedor = {
            id: null,
            nombre: null,
            credito: null,
            dias_credito: null,
            ciudad: null,
            area: null,
            direccion: null,
            correo: null,
            telefono: null,
            celular: null,
            contacto: null,
            rif: null,
            descripcion: null,
            responsable: null
          };
        }

        _createClass(_AgregarProveedorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.servicioAreas.getAreas().subscribe(function (res) {
              _this4.areas = res;
            }, function (err) {
              return console.log(err);
            });
          } //FUNCION PARA AGREGAR PROVEEDOR A BD

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            var proveedorNuevo = this.nuevoProveedor;

            if (proveedorNuevo.nombre != null && proveedorNuevo.nombre != "" && proveedorNuevo.area != null && proveedorNuevo.area != "") {
              if (proveedorNuevo.credito == 'No') {
                proveedorNuevo.dias_credito = 0;
              }

              proveedorNuevo.responsable = this.auth.user.getValue().cedula;
              this.servicioProveedores.createProveedor(proveedorNuevo).subscribe(function (res) {
                console.log(res);

                _this5.form.reset();

                _this5.router.navigate(['procura/proveedores']);
              }, function (err) {
                console.log(err);
              });
            }
          } //FUNCION PARA BORRAR FORMULARIO AGREGAR

        }, {
          key: "borrarForm",
          value: function borrarForm() {
            this.form.reset();
            this.nuevoProveedor = {
              id: null,
              nombre: null,
              area: null,
              direccion: null,
              ciudad: null,
              credito: null,
              dias_credito: null,
              correo: null,
              telefono: null,
              celular: null,
              contacto: null,
              rif: null,
              descripcion: null
            };
            this.router.navigate(['procura/proveedores']);
          }
        }]);

        return _AgregarProveedorComponent;
      }();

      _AgregarProveedorComponent.ɵfac = function AgregarProveedorComponent_Factory(t) {
        return new (t || _AgregarProveedorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_proveedores_service__WEBPACK_IMPORTED_MODULE_0__.ProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
      };

      _AgregarProveedorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AgregarProveedorComponent,
        selectors: [["app-agregar-proveedor"]],
        viewQuery: function AgregarProveedorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 78,
        vars: 29,
        consts: [[1, "margin-top-form"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-agregar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-2"], ["f", "ngForm"], [1, "row", "mt-3", "mb-4"], [1, "col-4"], ["required", "", "type", "text", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["nombre", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "col-2"], ["for", "exampleFormControlSelect1"], ["required", "", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["area", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-3"], ["type", "text", "aria-describedby", "emailHelp", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], [1, "row", "mb-4"], [1, "col"], ["for", "exampleInputPassword1"], [1, "input-group"], ["type", "text", "placeholder", "0", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["credito", "ngModel"], ["value", "Si"], ["value", "No"], [4, "ngIf"], [1, "form-footer-style"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "icon"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-danger"], [3, "value"], ["onkeypress", "return event.charCode >= 46", "min", "1", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["cantidad", "ngModel"]],
        template: function AgregarProveedorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Agregar Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nombre jur\xEDdico del proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.nuevoProveedor.nombre = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AgregarProveedorComponent_small_16_Template, 2, 0, "small", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\xC1rea profesional");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "select", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_select_ngModelChange_20_listener($event) {
              return ctx.nuevoProveedor.area = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AgregarProveedorComponent_option_22_Template, 2, 2, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AgregarProveedorComponent_small_23_Template, 2, 0, "small", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "RIF del proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_input_ngModelChange_27_listener($event) {
              return ctx.nuevoProveedor.rif = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Ciudad y pa\xEDs");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.nuevoProveedor.ciudad = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Correo de contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_input_ngModelChange_36_listener($event) {
              return ctx.nuevoProveedor.correo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Tel\xE9fono fijo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_input_ngModelChange_40_listener($event) {
              return ctx.nuevoProveedor.telefono = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Celular de contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_input_ngModelChange_44_listener($event) {
              return ctx.nuevoProveedor.celular = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Nombre del Vendedor \xF3 Contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_input_ngModelChange_48_listener($event) {
              return ctx.nuevoProveedor.contacto = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Direcci\xF3n fiscal del proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_input_ngModelChange_53_listener($event) {
              return ctx.nuevoProveedor.direccion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Cr\xE9dito y d\xEDas");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "select", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_select_ngModelChange_58_listener($event) {
              return ctx.nuevoProveedor.credito = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Si ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " No ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, AgregarProveedorComponent_ng_container_64_Template, 3, 2, "ng-container", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Descripci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AgregarProveedorComponent_Template_input_ngModelChange_69_listener($event) {
              return ctx.nuevoProveedor.descripcion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgregarProveedorComponent_Template_button_click_72_listener() {
              return ctx.borrarForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "fa-icon", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgregarProveedorComponent_Template_button_click_75_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "fa-icon", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " Ingresar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.nombre)("name", "nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r1.valid && _r1.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.area)("name", "area");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.areas);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r3.valid && _r3.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.rif)("name", "rif");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.ciudad)("name", "ciudad");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.correo)("name", "correo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.telefono)("name", "telefono");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.celular)("name", "celular");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.contacto)("name", "contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.direccion)("name", "direccion");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.credito)("name", "credito");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r6.value == "Si");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nuevoProveedor.descripcion)("name", "descripcion");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faPlusCircle);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor],
        styles: [".header-color-agregar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #3b8b4c, #51d17b );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFncmVnYXItcHJvdmVlZG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0kscURBQXFEO0FBQ3pEIiwiZmlsZSI6ImFncmVnYXItcHJvdmVlZG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkhFQURFUiBERSBGT1JNUyovXHJcbi5oZWFkZXItY29sb3ItYWdyZWdhcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzNiOGI0YywgIzUxZDE3YiApO1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    6456: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GestionProductosComponent": function GestionProductosComponent() {
          return (
            /* binding */
            _GestionProductosComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/productos.service */
      4893);
      /* harmony import */


      var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/unidades.service */
      9451);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334); //ICONOS FONTAWESOME


      var _c0 = ["f"];

      function GestionProductosComponent_div_15_small_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingrese un nombre.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function GestionProductosComponent_div_15_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidad_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", unidad_r15.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](unidad_r15.nombre);
        }
      }

      function GestionProductosComponent_div_15_small_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingrese una unidad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function GestionProductosComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 50, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GestionProductosComponent_div_15_Template_input_ngModelChange_9_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);

            var i_r9 = restoredCtx.index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r16.nuevoProducto[i_r9].nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, GestionProductosComponent_div_15_small_11_Template, 2, 0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Unidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "select", 53, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GestionProductosComponent_div_15_Template_select_ngModelChange_15_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);

            var i_r9 = restoredCtx.index;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.nuevoProducto[i_r9].unidad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, GestionProductosComponent_div_15_option_17_Template, 2, 2, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, GestionProductosComponent_div_15_small_18_Template, 2, 0, "small", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = ctx.index;

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Producto ", i_r9 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.nuevoProducto[i_r9].nombre)("name", "nombre" + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, i_r9));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r10.valid && _r10.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.nuevoProducto[i_r9].unidad)("name", "unidad" + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, i_r9));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.unidades);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r12.valid && _r12.touched);
        }
      }

      function GestionProductosComponent_ng_container_50_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GestionProductosComponent_ng_container_50_tr_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);

            var producto_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r22.asignarModificar(producto_r19.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Modificar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GestionProductosComponent_ng_container_50_tr_1_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);

            var producto_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r25.asignarBorrar(producto_r19.id, producto_r19.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "fa-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var producto_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](producto_r19.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](producto_r19.unidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r21.faPencilAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r21.faTrashAlt);
        }
      }

      function GestionProductosComponent_ng_container_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GestionProductosComponent_ng_container_50_tr_1_Template, 13, 4, "tr", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", producto_r19.nombre.toLocaleLowerCase().includes(_r2.value.toLowerCase()) || _r2.value == "");
        }
      }

      function GestionProductosComponent_option_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidad_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", unidad_r28.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](unidad_r28.nombre);
        }
      }

      var _GestionProductosComponent = /*#__PURE__*/function () {
        function _GestionProductosComponent(servicioProductos, servicioUnidades, router) {
          _classCallCheck(this, _GestionProductosComponent);

          this.servicioProductos = servicioProductos;
          this.servicioUnidades = servicioUnidades;
          this.router = router; //ICONOS FONTAWESOME

          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimesCircle;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlusCircle;
          this.faMinusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMinusCircle;
          this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrashAlt;
          this.faFileDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileDownload;
          this.faSyncAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSyncAlt;
          this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPencilAlt; //VARIABLES DE BD

          this.productos = [];
          this.unidades = []; //VARIABLES DE FUNCIONES

          this.nuevoProducto = [{
            id: null,
            nombre: null,
            unidad: null
          }];
          this.productoModificar = {
            id: null,
            nombre: null,
            unidad: null
          };
          this.productoBorrar = {
            id: null,
            nombre: null
          };
        }

        _createClass(_GestionProductosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.servicioProductos.getProductos().subscribe(function (res) {
              _this6.productos = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUnidades.getUnidades().subscribe(function (res) {
              _this6.unidades = res;
            }, function (err) {
              return console.log(err);
            });
          } //FUNCION PARA AGREGAR PRODUCTO A BD

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            var _iterator3 = _createForOfIteratorHelper(this.nuevoProducto),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var productoCiclo = _step3.value;

                if (productoCiclo.nombre != null && productoCiclo.nombre != "" && productoCiclo.unidad != null && productoCiclo.unidad != "") {
                  console.log(productoCiclo);
                  this.servicioProductos.createProducto(productoCiclo).subscribe(function (res) {
                    console.log(res);

                    _this7.form.reset();

                    _this7.router.navigate(['procura/productos']);
                  }, function (err) {
                    console.log(err);
                  });
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } //FUNCION PARA BORRAR FORMULARIO AGREGAR

        }, {
          key: "borrarForm",
          value: function borrarForm() {
            this.form.reset();
            this.nuevoProducto = [{
              id: null,
              nombre: null,
              unidad: null
            }];
            this.router.navigate(['procura/productos']);
          } //FUNCIONES DE AGREGAR MULTIPLE

        }, {
          key: "agregarProducto",
          value: function agregarProducto() {
            this.nuevoProducto.push({
              id: null,
              nombre: null,
              unidad: null
            });
          } //FUNCION PARA BOTON DE MODIFICAR (DATOS)

        }, {
          key: "asignarModificar",
          value: function asignarModificar(idProducto) {
            this.productoModificar = Object.assign({}, this.productos.find(function (producto) {
              return producto.id == idProducto;
            }));
          } //FUNCION MODIFICAR PRODUCTO

        }, {
          key: "onModificar",
          value: function onModificar() {
            var _this8 = this;

            this.productoModificar.unidad = this.unidades.find(function (unidad) {
              return unidad.nombre == _this8.productoModificar.unidad;
            }).id;
            console.log(this.productoModificar);
            this.servicioProductos.updateProducto(this.productoModificar.id, this.productoModificar).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          } //FUNCION PARA BOTON DE BORRAR PRODUCTO (DATOS)

        }, {
          key: "asignarBorrar",
          value: function asignarBorrar(id, nombre) {
            this.productoBorrar.nombre = nombre;
            this.productoBorrar.id = id;
          } //FUNCION PARA BORRAR PRODUCTO

        }, {
          key: "eliminarProducto",
          value: function eliminarProducto() {
            this.servicioProductos.deleteProducto(this.productoBorrar.id).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return _GestionProductosComponent;
      }();

      _GestionProductosComponent.ɵfac = function GestionProductosComponent_Factory(t) {
        return new (t || _GestionProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_0__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_1__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _GestionProductosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _GestionProductosComponent,
        selectors: [["app-gestion-productos"]],
        viewQuery: function GestionProductosComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 106,
        vars: 18,
        consts: [[1, "margin-top-form"], [1, "container-fluid"], [1, "parent"], [1, "elemento1"], [1, "container"], [1, "body", "form-body-style-agregar"], [1, "container", "pt-3", "form-header-style", "header-color-agregar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-2"], ["f", "ngForm"], [4, "ngFor", "ngForOf"], [1, "form-footer-style"], [1, "modal-footer"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "icon"], ["type", "button", 1, "btn", "btn-secondary", 3, "hidden", "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-agregar", 3, "disabled", "click"], [1, "elemento2"], [1, "container", "especial"], [1, "table-responsive-sm", "special"], [1, "table", "table-sm", "shadow", "table-striped"], [1, "table-dark"], ["colspan", "2", "scope", "col-1"], ["ngModel", "", "type", "text", "placeholder", "Filtro por nombre", 1, "w-75", "form-control", "form-control-sm"], ["filtroNombre", "ngModel"], ["colspan", "2", "scope", "col"], ["tabindex", "-1", "id", "modalEliminar", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-danger"], [1, "modal-title", "text-white"], [1, "modal-body"], [1, "text-danger"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-danger", 3, "click"], ["tabindex", "-1", "id", "modalModificar", 1, "modal", "fade"], [1, "modal-header", "bg-primary"], [1, "container", "mt-3"], [1, "row", "mt-3", "mb-4"], [1, "col"], ["type", "text", "name", "nombre", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], ["nombreModif", "ngModel"], ["for", "exampleFormControlSelect1"], ["name", "unidadModif", 1, "form-select", "mt-2", 3, "ngModel", "ngModelChange"], ["unidadModif", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["data-dismiss", "modal", "type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "container", "mt-2"], ["required", "", "type", "text", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["nombre", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["required", "", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["unidad", "ngModel"], [3, "value"], ["class", "bg-light table-sm linea-tabla", "scope", "row", 4, "ngIf"], ["scope", "row", 1, "bg-light", "table-sm", "linea-tabla"], ["colspan", "1", 1, "col"], ["colspan", "2", 1, "col"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalModificar", 1, "btn", "btn-primary", "text-white", "btn-sm", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalEliminar", 1, "btn", "btn-danger", "btn-sm", 3, "click"]],
        template: function GestionProductosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Gesti\xF3n de productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Agregar Producto Nuevo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, GestionProductosComponent_div_15_Template, 19, 12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GestionProductosComponent_Template_button_click_19_listener() {
              return ctx.agregarProducto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "fa-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " M\xE1s Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GestionProductosComponent_Template_button_click_22_listener() {
              return ctx.nuevoProducto.pop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "fa-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Menos Items ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GestionProductosComponent_Template_button_click_25_listener() {
              return ctx.borrarForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "fa-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Volver ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GestionProductosComponent_Template_button_click_28_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "fa-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Ingresar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "thead", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "thead", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Unidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, GestionProductosComponent_ng_container_50_Template, 2, 1, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h5", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Eliminar Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "\xBFEst\xE1s seguro que deseas eliminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "?. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Esta acci\xF3n es irreversible.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "fa-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GestionProductosComponent_Template_button_click_71_listener() {
              return ctx.eliminarProducto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "fa-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Eliminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "form", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "h5", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Ingrese los datos que desee modificar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "input", 42, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GestionProductosComponent_Template_input_ngModelChange_90_listener($event) {
              return ctx.productoModificar.nombre = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Unidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "select", 45, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GestionProductosComponent_Template_select_ngModelChange_95_listener($event) {
              return ctx.productoModificar.unidad = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, GestionProductosComponent_option_97_Template, 2, 2, "option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "fa-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GestionProductosComponent_Template_button_click_103_listener() {
              return ctx.onModificar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "fa-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " Modificar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.nuevoProducto);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faPlusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.nuevoProducto.length == 1)("disabled", ctx.nuevoProducto.length == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faMinusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faPlusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productos);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.productoBorrar.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTrashAlt);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.productoModificar.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.productoModificar.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.productoModificar.unidad);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.unidades);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faPencilAlt);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]],
        styles: [".header-color-agregar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(80deg, #d87e08, #f7ed61 );\r\n    color: black;\r\n}\r\n\r\n.btn-agregar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #d87e08, #f7ed61 );\r\n    border: none;\r\n    color: black;\r\n}\r\n\r\n.form-body-style-agregar[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n    font-weight:200;\r\n    width: 600px;\r\n    font-size: 17px;\r\n    padding-top: 360;\r\n    background-color: white;\r\n    box-shadow: 4px 4px 18px rgba(0,0,0,0.2), -1px -1px 8px rgba(0,0,0,0.2);\r\n}\r\n.special[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n    margin-top: 23px;\r\n}\r\n.parent[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb24tcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0kscURBQXFEO0lBQ3JELFlBQVk7QUFDaEI7QUFFQSxRQUFRO0FBQ1I7SUFDSSxxREFBcUQ7SUFDckQsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFHQSx1QkFBdUI7QUFDdkI7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix1RUFBdUU7QUFDM0U7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0IiLCJmaWxlIjoiZ2VzdGlvbi1wcm9kdWN0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qSEVBREVSIERFIEZPUk1TKi9cclxuLmhlYWRlci1jb2xvci1hZ3JlZ2Fye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDgwZGVnLCAjZDg3ZTA4LCAjZjdlZDYxICk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qQk9UT04qL1xyXG4uYnRuLWFncmVnYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkODdlMDgsICNmN2VkNjEgKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbi8qRVNUSUxPIERFIEZPUk0gTE9DQUwqL1xyXG4uZm9ybS1ib2R5LXN0eWxlLWFncmVnYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDM2MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxOHB4IHJnYmEoMCwwLDAsMC4yKSwgLTFweCAtMXB4IDhweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi5zcGVjaWFse1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjNweDtcclxufVxyXG4ucGFyZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    9719: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModificarProductoComponent": function ModificarProductoComponent() {
          return (
            /* binding */
            _ModificarProductoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/proveedores.service */
      3449);
      /* harmony import */


      var src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/areas.service */
      6802);
      /* harmony import */


      var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/unidades.service */
      9451);
      /* harmony import */


      var src_app_services_productos_proveedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/productos-proveedores.service */
      8745);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);

      var _c0 = ["f"];

      function ModificarProductoComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var area_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", area_r19.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r19.nombre);
        }
      }

      function ModificarProductoComponent_small_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingrese un \xE1rea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ModificarProductoComponent_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var proveedor_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", proveedor_r20.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r20.nombre);
        }
      }

      function ModificarProductoComponent_small_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingrese un proveedor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ModificarProductoComponent_ng_container_35_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var producto_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", producto_r21.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](producto_r21.nombre);
        }
      }

      function ModificarProductoComponent_ng_container_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ModificarProductoComponent_ng_container_35_option_1_Template, 2, 2, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", producto_r21.area == _r1.value && producto_r21.nombreProveedor == _r4.value);
        }
      }

      function ModificarProductoComponent_small_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingrese un producto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ModificarProductoComponent_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var area_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", area_r24.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r24.nombre);
        }
      }

      function ModificarProductoComponent_option_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var proveedor_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", proveedor_r25.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r25.nombre);
        }
      }

      function ModificarProductoComponent_option_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidad_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", unidad_r26.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](unidad_r26.nombre);
        }
      }

      function ModificarProductoComponent_ng_container_76_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 45, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModificarProductoComponent_ng_container_76_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r28.productoElegido.dias_garantia = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r17.productoElegido.dias_garantia)("name", "dias");
        }
      }

      function ModificarProductoComponent_small_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Reporte garant\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _ModificarProductoComponent = /*#__PURE__*/function () {
        function _ModificarProductoComponent(servicioProveedores, servicioAreas, servicioUnidades, servicioProductosProveedores, router) {
          _classCallCheck(this, _ModificarProductoComponent);

          this.servicioProveedores = servicioProveedores;
          this.servicioAreas = servicioAreas;
          this.servicioUnidades = servicioUnidades;
          this.servicioProductosProveedores = servicioProductosProveedores;
          this.router = router; //ICONOS FONTAWESOME

          this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPencilAlt;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimesCircle; //VARIABLES QUE ALMACEN INFO DE BD

          this.proveedores = [];
          this.areas = [];
          this.unidades = [];
          this.productosProveedores = []; //VARIABLES DE FUNCIONES

          this.productoElegido = {
            id: null,
            nombre: null,
            unidad: null,
            nombreProveedor: null,
            garantia: null,
            dias_garantia: null,
            fecha_act: null,
            precio: null,
            area: null
          };
          this.valido = true;
        }

        _createClass(_ModificarProductoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.servicioAreas.getAreas().subscribe(function (res) {
              _this9.areas = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioProveedores.getProveedores().subscribe(function (res) {
              _this9.proveedores = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioUnidades.getUnidades().subscribe(function (res) {
              _this9.unidades = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioProductosProveedores.getProductosProveedores().subscribe(function (res) {
              _this9.productosProveedores = res;
            }, function (err) {
              return console.log(err);
            });
          } //ENCUENTRA EL ID DEL PRODUCTO A MODIFICAR

        }, {
          key: "alElegirProducto",
          value: function alElegirProducto(idProducto) {
            this.productoElegido = Object.assign({}, this.productosProveedores.find(function (producto) {
              return producto.id == idProducto;
            }));
          } //FUNCION MODIFICAR PRODUCTO

        }, {
          key: "onModificar",
          value: function onModificar() {
            var _this10 = this;

            this.productoElegido.area = this.areas.find(function (area) {
              return area.nombre == _this10.productoElegido.area;
            }).id;
            this.productoElegido.unidad = this.unidades.find(function (unidad) {
              return unidad.nombre == _this10.productoElegido.unidad;
            }).id;
            this.productoElegido.nombreProveedor = this.proveedores.find(function (proveedor) {
              return proveedor.nombre == _this10.productoElegido.nombreProveedor;
            }).id;

            if (this.productoElegido.garantia == 'No') {
              this.productoElegido.dias_garantia = 0;
            }

            this.servicioProductosProveedores.updateProductoProveedor(this.productoElegido.id, this.productoElegido).subscribe(function (res) {
              console.log(res);

              _this10.router.navigate(['procura/productos']);

              _this10.form.reset();
            }, function (err) {
              console.log(err);
            });
          } //FUNCION PARA REVISAR EL PRECIO INGRESADO POR EL USUARIO MODIFICAR

        }, {
          key: "revisarPrecio",
          value: function revisarPrecio() {
            if (this.productoElegido.precio <= 0) {
              this.valido = false;
              return;
            }

            this.valido = true;
          } //FUNCION PARA BORRAR FORMULARIO

        }, {
          key: "borrarForm",
          value: function borrarForm() {
            this.form.reset();
            this.router.navigate(['procura/productos']);
          }
        }]);

        return _ModificarProductoComponent;
      }();

      _ModificarProductoComponent.ɵfac = function ModificarProductoComponent_Factory(t) {
        return new (t || _ModificarProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_0__.ProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_2__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_productos_proveedores_service__WEBPACK_IMPORTED_MODULE_3__.ProductosProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _ModificarProductoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ModificarProductoComponent,
        selectors: [["app-modificar-producto"]],
        viewQuery: function ModificarProductoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 90,
        vars: 25,
        consts: [[1, "margin-top-form"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-modificar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-3"], ["f", "ngForm"], [1, "row", "mt-2", "mb-4"], [1, "col-4"], ["ngModel", "", "required", "", "name", "selectAreaModificar", 1, "form-select", "mt-2"], ["selectAreaModificar", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["ngModel", "", "required", "", "name", "selectProveedorModificar", 1, "form-select", "mt-2"], ["selectProveedorModificar", "ngModel"], ["ngModel", "", "required", "", "name", "item", 1, "form-select", "mt-2", 3, "change"], ["idProducto", "ngModel", "selectProductoModif", "ngModel"], [4, "ngFor", "ngForOf"], [1, "container", "mt-2"], [1, "row", "mt-2", "mb-5"], ["required", "", "type", "text", "name", "nombre", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], [1, "col-3"], ["required", "", "name", "area", 1, "form-select", "mt-2", 3, "ngModel", "ngModelChange"], [1, "col"], ["required", "", "name", "proveedor", 1, "form-select", "mt-2", 3, "ngModel", "ngModelChange"], [1, "row", "mb-4"], ["for", "exampleInputPassword1"], [1, "input-group"], ["onkeypress", "return event.charCode >= 46", "min", "1", "required", "", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange", "keyup"], ["cantidad", "ngModel"], ["required", "", "type", "text", "placeholder", "0", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["unidadX", "ngModel"], ["garantia", "ngModel"], ["value", "Si"], ["value", "No"], [4, "ngIf"], ["type", "date", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], [1, "form-footer-style"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "icon"], ["type", "button", 1, "btn", "btn-primary", "text-white", 3, "disabled", "click"], [3, "value"], [1, "text-danger"], [3, "value", 4, "ngIf"], ["onkeypress", "return event.charCode >= 46", "min", "1", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"]],
        template: function ModificarProductoComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Modificar Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Seleccione el producto a modificar:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\xC1rea profesional");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "select", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ModificarProductoComponent_option_20_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ModificarProductoComponent_small_21_Template, 2, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "select", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ModificarProductoComponent_option_27_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ModificarProductoComponent_small_28_Template, 2, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "select", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ModificarProductoComponent_Template_select_change_32_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);

              return ctx.alElegirProducto(_r7.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ModificarProductoComponent_ng_container_35_Template, 2, 1, "ng-container", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ModificarProductoComponent_small_36_Template, 2, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Modifique los datos que desee:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModificarProductoComponent_Template_input_ngModelChange_45_listener($event) {
              return ctx.productoElegido.nombre = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\xC1rea profesional");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModificarProductoComponent_Template_select_ngModelChange_49_listener($event) {
              return ctx.productoElegido.area = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, ModificarProductoComponent_option_50_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModificarProductoComponent_Template_select_ngModelChange_54_listener($event) {
              return ctx.productoElegido.nombreProveedor = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ModificarProductoComponent_option_55_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Precio y Unidades");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "input", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModificarProductoComponent_Template_input_ngModelChange_61_listener($event) {
              return ctx.productoElegido.precio = $event;
            })("keyup", function ModificarProductoComponent_Template_input_keyup_61_listener() {
              return ctx.revisarPrecio();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "select", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModificarProductoComponent_Template_select_ngModelChange_63_listener($event) {
              return ctx.productoElegido.unidad = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, ModificarProductoComponent_option_65_Template, 2, 2, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Garant\xEDa y d\xEDas");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "select", 30, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModificarProductoComponent_Template_select_ngModelChange_70_listener($event) {
              return ctx.productoElegido.garantia = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Si ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " No ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, ModificarProductoComponent_ng_container_76_Template, 3, 2, "ng-container", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, ModificarProductoComponent_small_77_Template, 3, 0, "small", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Fecha Actualizado");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModificarProductoComponent_Template_input_ngModelChange_81_listener($event) {
              return ctx.productoElegido.fecha_act = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModificarProductoComponent_Template_button_click_84_listener() {
              return ctx.borrarForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "fa-icon", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModificarProductoComponent_Template_button_click_87_listener() {
              return ctx.onModificar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "fa-icon", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, " Modificar ");

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
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.areas);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r1.valid && _r1.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.proveedores);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.productosProveedores);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r8.valid && _r8.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productoElegido.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productoElegido.area);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.areas);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productoElegido.nombreProveedor);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.proveedores);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productoElegido.precio)("name", "precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productoElegido.unidad)("name", "unidades");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.unidades);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productoElegido.garantia)("name", "garantia");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r16.value == "Si");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r16.valid && _r16.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productoElegido.fecha_act)("name", "fechaActualizacion");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r0.valid || !ctx.valido);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faPencilAlt);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent],
        styles: [".header-color-modificar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #314de9, #3ca4d4 );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGlmaWNhci1wcm9kdWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLHFEQUFxRDtBQUN6RCIsImZpbGUiOiJtb2RpZmljYXItcHJvZHVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qSEVBREVSIERFIEZPUk1TKi9cclxuLmhlYWRlci1jb2xvci1tb2RpZmljYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzMTRkZTksICMzY2E0ZDQgKTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    9299: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModificarProveedorComponent": function ModificarProveedorComponent() {
          return (
            /* binding */
            _ModificarProveedorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/proveedores.service */
      3449);
      /* harmony import */


      var src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/areas.service */
      6802);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);

      var _c0 = ["f"];

      function ModificarProveedorComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var area_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", area_r11.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](area_r11.nombre);
        }
      }

      function ModificarProveedorComponent_small_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingrese un \xE1rea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ModificarProveedorComponent_ng_container_28_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var proveedor_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", proveedor_r12.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](proveedor_r12.nombre);
        }
      }

      function ModificarProveedorComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ModificarProveedorComponent_ng_container_28_option_1_Template, 2, 2, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var proveedor_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", proveedor_r12.area == _r1.value);
        }
      }

      function ModificarProveedorComponent_small_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingrese un proveedor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ModificarProveedorComponent_option_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var area_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", area_r15.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](area_r15.nombre);
        }
      }

      function ModificarProveedorComponent_ng_container_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 41, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_ng_container_84_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.proveedorElegido.dias_credito = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.proveedorElegido.dias_credito)("name", "dias");
        }
      }

      var _ModificarProveedorComponent = /*#__PURE__*/function () {
        function _ModificarProveedorComponent(servicioProveedores, servicioAreas, router) {
          _classCallCheck(this, _ModificarProveedorComponent);

          this.servicioProveedores = servicioProveedores;
          this.servicioAreas = servicioAreas;
          this.router = router; //ICONOS FONTAWESOME

          this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPencilAlt;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimesCircle; //VARIABLES QUE ALMACEN INFO DE BD

          this.proveedores = [];
          this.areas = []; //VARIABLES DE FUNCIONES

          this.proveedorElegido = {
            id: null,
            nombre: null,
            area: null,
            direccion: null,
            correo: null,
            telefono: null,
            contacto: null,
            ciudad: null,
            celular: null,
            credito: null,
            dias_credito: null,
            rif: null,
            descripcion: null
          };
        }

        _createClass(_ModificarProveedorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.servicioAreas.getAreas().subscribe(function (res) {
              _this11.areas = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioProveedores.getProveedores().subscribe(function (res) {
              _this11.proveedores = res;
            }, function (err) {
              return console.log(err);
            });
          } //ENCUENTRA EL ID DEL PROVEEDOR A MODIFICAR

        }, {
          key: "alElegirProveedor",
          value: function alElegirProveedor(idProveedor) {
            this.proveedorElegido = Object.assign({}, this.proveedores.find(function (proveedor) {
              return proveedor.id == idProveedor;
            }));
            console.log(this.proveedorElegido);
          } //FUNCION MODIFICAR PROVEEDOR

        }, {
          key: "onModificar",
          value: function onModificar() {
            var _this12 = this;

            if (this.proveedorElegido.credito == 'No') {
              this.proveedorElegido.dias_credito = 0;
            }

            this.proveedorElegido.area = this.areas.find(function (area) {
              return area.nombre == _this12.proveedorElegido.area;
            }).id;
            this.servicioProveedores.updateProveedor(this.proveedorElegido.id, this.proveedorElegido).subscribe(function (res) {
              console.log(res);

              _this12.router.navigate(['procura/proveedores']);

              _this12.form.reset();
            }, function (err) {
              console.log(err);
            });
          } //FUNCION PARA BORRAR FORMULARIO

        }, {
          key: "borrarForm",
          value: function borrarForm() {
            this.form.reset();
            this.router.navigate(['procura/proveedores']);
          }
        }]);

        return _ModificarProveedorComponent;
      }();

      _ModificarProveedorComponent.ɵfac = function ModificarProveedorComponent_Factory(t) {
        return new (t || _ModificarProveedorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_0__.ProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_1__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _ModificarProveedorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ModificarProveedorComponent,
        selectors: [["app-modificar-proveedor"]],
        viewQuery: function ModificarProveedorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 98,
        vars: 27,
        consts: [[1, "margin-top-form"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-modificar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-2"], ["f", "ngForm"], [1, "container", "mt-2"], [1, "row", "mt-2", "mb-4"], [1, "col-6"], ["ngModel", "", "required", "", "name", "selectAreaModificar", 1, "form-select", "mt-2"], ["selectAreaModificar", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["ngModel", "", "required", "", "name", "item", 1, "form-select", "mt-2", 3, "change"], ["idProveedor", "ngModel", "selectProveedorModif", "ngModel"], [4, "ngFor", "ngForOf"], [1, "row", "mb-4"], [1, "col-4"], ["required", "", "type", "text", "name", "nombre", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], [1, "col-3"], ["required", "", "name", "area", 1, "form-select", "mt-2", 3, "ngModel", "ngModelChange"], [1, "col"], ["type", "text", "name", "serial", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "ciudad", 1, "form-control", "mt-2", 3, "ngModel", "ngModelChange"], ["type", "text", "aria-describedby", "emailHelp", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["for", "exampleInputPassword1"], [1, "input-group"], ["type", "text", "placeholder", "0", 1, "form-select", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["credito", "ngModel"], ["value", "Si"], ["value", "No"], [4, "ngIf"], [1, "form-footer-style"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "icon"], ["type", "button", 1, "btn", "btn-primary", "text-white", 3, "disabled", "click"], [3, "value"], [1, "text-danger"], [3, "value", 4, "ngIf"], ["onkeypress", "return event.charCode >= 46", "min", "1", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["cantidad", "ngModel"]],
        template: function ModificarProveedorComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Modificar Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Seleccione el proveedor a modificar:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\xC1rea");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "select", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ModificarProveedorComponent_option_20_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ModificarProveedorComponent_small_21_Template, 2, 0, "small", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "select", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ModificarProveedorComponent_Template_select_change_25_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);

              return ctx.alElegirProveedor(_r4.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ModificarProveedorComponent_ng_container_28_Template, 2, 1, "ng-container", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ModificarProveedorComponent_small_29_Template, 2, 0, "small", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Modifique los datos que desee:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Nombre jur\xEDdico del proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_input_ngModelChange_38_listener($event) {
              return ctx.proveedorElegido.nombre = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\xC1rea profesional");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_select_ngModelChange_42_listener($event) {
              return ctx.proveedorElegido.area = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ModificarProveedorComponent_option_43_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "RIF del proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.proveedorElegido.rif = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Ciudad y pa\xEDs");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_input_ngModelChange_51_listener($event) {
              return ctx.proveedorElegido.ciudad = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Correo de contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_input_ngModelChange_56_listener($event) {
              return ctx.proveedorElegido.correo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Tel\xE9fono fijo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_input_ngModelChange_60_listener($event) {
              return ctx.proveedorElegido.telefono = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Celular de contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_input_ngModelChange_64_listener($event) {
              return ctx.proveedorElegido.celular = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Nombre del Vendedor \xF3 Contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_input_ngModelChange_68_listener($event) {
              return ctx.proveedorElegido.contacto = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Direcci\xF3n fiscal del proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_input_ngModelChange_73_listener($event) {
              return ctx.proveedorElegido.direccion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Cr\xE9dito y d\xEDas");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "select", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_select_ngModelChange_78_listener($event) {
              return ctx.proveedorElegido.credito = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Si ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " No ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, ModificarProveedorComponent_ng_container_84_Template, 3, 2, "ng-container", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Descripci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModificarProveedorComponent_Template_input_ngModelChange_89_listener($event) {
              return ctx.proveedorElegido.descripcion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModificarProveedorComponent_Template_button_click_92_listener() {
              return ctx.borrarForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "fa-icon", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModificarProveedorComponent_Template_button_click_95_listener() {
              return ctx.onModificar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "fa-icon", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " Modificar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.areas);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r1.valid && _r1.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.proveedores);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r5.valid && _r5.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.area);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.areas);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.rif);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.ciudad);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.correo)("name", "correo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.telefono)("name", "telefono");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.celular)("name", "celular");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.contacto)("name", "contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.direccion)("name", "direccion");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.credito)("name", "credito");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.value == "Si");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.proveedorElegido.descripcion)("name", "descripcion");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faPencilAlt);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor],
        styles: [".header-color-modificar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #314de9, #3ca4d4 );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGlmaWNhci1wcm92ZWVkb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSxxREFBcUQ7QUFDekQiLCJmaWxlIjoibW9kaWZpY2FyLXByb3ZlZWRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypIRUFERVIgREUgRk9STVMqL1xyXG4uaGVhZGVyLWNvbG9yLW1vZGlmaWNhcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzMxNGRlOSwgIzNjYTRkNCApO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    5543: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcuraBaseComponent": function ProcuraBaseComponent() {
          return (
            /* binding */
            _ProcuraBaseComponent
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

      var _ProcuraBaseComponent = /*#__PURE__*/function () {
        function _ProcuraBaseComponent() {
          _classCallCheck(this, _ProcuraBaseComponent);
        }

        _createClass(_ProcuraBaseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProcuraBaseComponent;
      }();

      _ProcuraBaseComponent.ɵfac = function ProcuraBaseComponent_Factory(t) {
        return new (t || _ProcuraBaseComponent)();
      };

      _ProcuraBaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ProcuraBaseComponent,
        selectors: [["app-procura-base"]],
        decls: 1,
        vars: 0,
        template: function ProcuraBaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jdXJhLWJhc2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    676: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductosComponent": function ProductosComponent() {
          return (
            /* binding */
            _ProductosComponent
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


      var src_app_services_productos_proveedores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/productos-proveedores.service */
      8745);
      /* harmony import */


      var src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/proveedores.service */
      3449);
      /* harmony import */


      var src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/areas.service */
      6802);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707); //ICONOS FONTAWESOME


      var _c0 = ["f"];

      function ProductosComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductosComponent_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.onGuardarCambios();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Guardar cambios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faPlusCircle);
        }
      }

      function ProductosComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductosComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15.modoActPrecios = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Cancelar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r1.faPlusCircle);
        }
      }

      function ProductosComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductosComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.modoActPreciosOn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Actualizar precios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r2.faPlusCircle);
        }
      }

      function ProductosComponent_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var area_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", area_r19.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r19.nombre);
        }
      }

      function ProductosComponent_th_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Nuevo precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ProductosComponent_ng_container_55_tr_1_td_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", null, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductosComponent_ng_container_55_tr_1_td_10_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);

            var i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r25.preciosNuevos[i_r21].precio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r23.preciosNuevos[i_r21].precio)("name", "nuevoPrecio" + i_r21);
        }
      }

      function ProductosComponent_ng_container_55_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ProductosComponent_ng_container_55_tr_1_td_10_Template, 4, 2, "td", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductosComponent_ng_container_55_tr_1_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);

            var producto_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r29.asignarActualizar(producto_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Actualizar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductosComponent_ng_container_55_tr_1_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);

            var producto_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r32.asignarDetalles(producto_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Detalles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductosComponent_ng_container_55_tr_1_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);

            var producto_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r34.asignarBorrar(producto_r20.id, producto_r20.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var producto_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](producto_r20.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](producto_r20.area);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](producto_r20.nombreProveedor);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 10, producto_r20.precio), " / ", producto_r20.unidad, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r22.modoActPrecios);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 12, producto_r20.fecha));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r22.faSyncAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r22.faInfoCircle);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r22.faTrashAlt);
        }
      }

      function ProductosComponent_ng_container_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductosComponent_ng_container_55_tr_1_Template, 25, 14, "tr", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var producto_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (producto_r20.nombre.toLocaleLowerCase().includes(_r3.value.toLowerCase()) || _r3.value == "") && (producto_r20.area.toLocaleLowerCase().includes(_r4.value.toLowerCase()) || _r4.value == ""));
        }
      }

      function ProductosComponent_tr_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 2, ctx_r8.datosInfoProducto.precio), " / ", ctx_r8.datosInfoProducto.unidad, "");
        }
      }

      function ProductosComponent_tr_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Garant\xEDa del proveedor (d\xEDas)");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r9.datosInfoProducto.garantia, " / ", ctx_r9.datosInfoProducto.dias_garantia, "");
        }
      }

      function ProductosComponent_tr_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Fecha Actualizado");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 1, ctx_r10.datosInfoProducto.fecha));
        }
      }

      function ProductosComponent_ng_container_196_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "currency");

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
          var productoPDF_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](productoPDF_r37.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](productoPDF_r37.area);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](productoPDF_r37.nombreProveedor);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 8, productoPDF_r37.precio), " / ", productoPDF_r37.unidad, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", productoPDF_r37.garantia, " / ", productoPDF_r37.dias_garantia, " D\xEDas");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 10, productoPDF_r37.fecha));
        }
      }

      var _ProductosComponent = /*#__PURE__*/function () {
        function _ProductosComponent(servicioProductosProveedores, servicioProveedores, servicioAreas, router) {
          _classCallCheck(this, _ProductosComponent);

          this.servicioProductosProveedores = servicioProductosProveedores;
          this.servicioProveedores = servicioProveedores;
          this.servicioAreas = servicioAreas;
          this.router = router; //ICONOS FONTAWESOME

          this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSignInAlt;
          this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faListAlt;
          this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSignOutAlt;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimesCircle;
          this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faExclamationCircle;
          this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPencilAlt;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPlusCircle;
          this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faInfoCircle;
          this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrashAlt;
          this.faFileDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFileDownload;
          this.faSyncAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSyncAlt;
          this.faFolderPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFolderPlus; //VARIABLES QUE ALMACENA INFO DE BD

          this.proveedores = [];
          this.productosProveedores = [];
          this.areas = []; //VARIABLES DE FUNCIONES COMPONENT

          this.datosInfoProducto = {
            id: null,
            nombre: null,
            area: null,
            unidad: null,
            nombreProveedor: null,
            garantia: null,
            dias_garantia: null,
            fecha_act: null,
            precio: null
          };
          this.datosActualizarProducto = {
            id: null,
            nombre: null,
            area: null,
            unidad: null,
            garantia: null,
            dias_garantia: null,
            nombreProveedor: null,
            fecha_act: null,
            precio: null
          };
          this.precioNuevo = null;
          this.productoProveedorBorrar = {
            id: null,
            nombre: null
          };
          this.oculto = true;
          this.modoActPrecios = false;
          this.preciosNuevos = [{
            index: null,
            idProductoAct: null,
            precioNuevo: null
          }];
        }

        _createClass(_ProductosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.servicioProveedores.getProveedores().subscribe(function (res) {
              _this13.proveedores = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioProductosProveedores.getProductosProveedores().subscribe(function (res) {
              _this13.productosProveedores = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioAreas.getAreas().subscribe(function (res) {
              _this13.areas = res;
            }, function (err) {
              return console.log(err);
            });
          } //FUNCION PARA BOTON DE DETALLES DE PRODUCTO

        }, {
          key: "asignarDetalles",
          value: function asignarDetalles(producto) {
            this.datosInfoProducto = producto;
          } //FUNCION PARA BOTON DE ACTUALIZAR  PRODUCTO

        }, {
          key: "asignarActualizar",
          value: function asignarActualizar(producto) {
            this.datosActualizarProducto = producto;
            console.log(this.datosActualizarProducto);
          } //FUNCION PARA BORRAR PRODUCTO

        }, {
          key: "actualizarProductoPrecio",
          value: function actualizarProductoPrecio() {
            var _this14 = this;

            if (this.precioNuevo != null && this.precioNuevo >= 0) {
              this.servicioProductosProveedores.updatePrecioProducto(this.datosActualizarProducto.id, this.precioNuevo).subscribe(function (res) {
                console.log(res);

                _this14.form.reset();
              }, function (err) {
                console.log(err);
              });
            }
          } //FUNCION PARA BOTON DE BORRAR PRODUCTO (DATOS)

        }, {
          key: "asignarBorrar",
          value: function asignarBorrar(id, nombre) {
            this.productoProveedorBorrar.nombre = nombre;
            this.productoProveedorBorrar.id = id;
          } //FUNCION PARA BORRAR PRODUCTO

        }, {
          key: "eliminarProductoProducto",
          value: function eliminarProductoProducto() {
            this.servicioProductosProveedores.deleteProductoProveedor(this.productoProveedorBorrar.id).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          } //FUNCION PARA DESCARGAR PDF DE PRODUCTO

        }, {
          key: "descargarPDF",
          value: function descargarPDF() {
            this.oculto = false;
            var opciones = {
              margin: 1,
              filename: 'Productos_Proveedores.pdf',
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
          key: "onGuardarCambios",
          value: function onGuardarCambios() {}
        }, {
          key: "modoActPreciosOn",
          value: function modoActPreciosOn() {
            this.modoActPrecios = true;
          }
        }]);

        return _ProductosComponent;
      }();

      _ProductosComponent.ɵfac = function ProductosComponent_Factory(t) {
        return new (t || _ProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_productos_proveedores_service__WEBPACK_IMPORTED_MODULE_1__.ProductosProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_2__.ProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_3__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _ProductosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ProductosComponent,
        selectors: [["app-productos"]],
        viewQuery: function ProductosComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 197,
        vars: 36,
        consts: [[1, "container-fluid", "mt-lg-3"], [1, "row", "px-4"], [1, "col-3"], [1, "col-9", "mt-lg-3"], ["type", "button", "routerLink", "gestionar", 1, "btn", "cool-btn", "btn-gestionar", "float-end", "ms-5"], [3, "icon"], ["role", "group", 1, "btn-group", "float-end"], ["type", "button", "class", "btn cool-btn btn-success", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn cool-btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn cool-btn btn-primary", "hidden", "", 3, "click", 4, "ngIf"], ["type", "button", "routerLink", "agregar", 1, "btn", "cool-btn", "btn-success"], ["type", "button", "routerLink", "modificar", 1, "btn", "btn-primary", "cool-btn", "text-white"], ["data-bs-toggle", "modal", "data-bs-target", "#pdfProveedores", 1, "btn", "btn-warning", "text-dark", "cool-btn", "float-right"], [1, "table-responsive-md", "mt-lg-3"], [1, "table", "table-sm", "shadow", "table-striped"], [1, "table-dark"], ["scope", "col-2"], ["ngModel", "", "type", "text", "placeholder", "Filtro por nombre", 1, "w-75", "form-control", "form-control-sm"], ["filtroNombre", "ngModel"], ["ngModel", "", "name", "filtroArea", 1, "form-select", "form-select-sm"], ["filtroArea", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["scope", "col"], ["scope", "col-sm-2"], ["scope", "col-sm-2", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "modalInfo", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-info"], ["id", "exampleModalLabel", 1, "modal-title", "text-white"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table", "table-sm"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["tabindex", "-1", "id", "modalEliminar", 1, "modal", "fade"], [1, "modal-header", "bg-danger"], [1, "modal-title", "text-white"], [1, "text-danger"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-danger", 3, "click"], ["f", "ngForm"], ["tabindex", "-1", "id", "modalActualizar", 1, "modal", "fade"], [1, "modal-header", "bg-primary"], [1, "row"], [1, "row", "mb-4", "mt-4"], [1, "col"], [1, "mb-2"], ["for", "exampleInputEmail1"], [1, "input-group"], ["onkeypress", "return event.charCode >= 48", "min", "1", "type", "number", 1, "form-control", "mt-2", 3, "ngModel", "name", "ngModelChange"], ["disabled", "", "type", "text", "ngModel", "", 1, "form-control", "mt-2", 3, "placeholder", "name"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "pdfProveedores", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["role", "group", 1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-secondary"], ["id", "elemento-a-exportar", 1, "modal-body"], [1, "table", "table-sm", "letras"], [1, "thead", "bg-secondary", "text-white"], ["type", "button", 1, "btn", "cool-btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "cool-btn", "btn-danger", 3, "click"], ["type", "button", "hidden", "", 1, "btn", "cool-btn", "btn-primary", 3, "click"], [3, "value"], ["class", "bg-light table-sm linea-tabla", "scope", "row", 4, "ngIf"], ["scope", "row", 1, "bg-light", "table-sm", "linea-tabla"], [1, "col-sm-2"], ["class", "col-sm-2", 4, "ngIf"], [1, "btn-group"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalActualizar", 1, "btn", "btn-primary", "text-white", "btn-sm", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalInfo", 1, "btn", "btn-info", "text-white", "btn-sm", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalEliminar", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "number", 1, "form-control", "form-control-sm", 3, "ngModel", "name", "ngModelChange"]],
        template: function ProductosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Gestionar Productos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ProductosComponent_button_10_Template, 3, 1, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProductosComponent_button_11_Template, 3, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProductosComponent_button_12_Template, 3, 1, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Agregar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Modificar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Exportar a PDF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "thead", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "select", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Area (Todas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ProductosComponent_option_35_Template, 2, 2, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "thead", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\xC1rea");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Precio/Unidad");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, ProductosComponent_th_50_Template, 2, 0, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Fecha Actualizado");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ProductosComponent_ng_container_55_Template, 2, 1, "ng-container", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "h5", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "table", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "\xC1rea");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, ProductosComponent_tr_85_Template, 7, 4, "tr", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, ProductosComponent_tr_86_Template, 6, 2, "tr", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, ProductosComponent_tr_87_Template, 7, 3, "tr", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Eliminar Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "\xBFEst\xE1s seguro que deseas eliminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "?. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Esta acci\xF3n es irreversible.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductosComponent_Template_button_click_116_listener() {
              return ctx.eliminarProductoProducto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, " Eliminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "form", null, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Actualizar Precio Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Usted esta actualizando el producto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, " del proveedor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "?.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Precio actual");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](144, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Precio nuevo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_149_listener($event) {
              return ctx.precioNuevo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](150, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, "Esta acci\xF3n es irreversible.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductosComponent_Template_button_click_159_listener() {
              return ctx.actualizarProductoPrecio();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](160, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, " Actualizar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "h5", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, "Exportar a PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductosComponent_Template_button_click_169_listener() {
              return ctx.descargarPDF();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](170, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, " Exportar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](173, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, " Cerrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "Productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "table", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "thead", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "\xC1rea");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "Precio");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "Garant\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "Fecha Actualizado");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](196, ProductosComponent_ng_container_196_Template, 16, 12, "ng-container", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFolderPlus);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.modoActPrecios);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.modoActPrecios);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.modoActPrecios);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faPlusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faPencilAlt);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.areas);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.modoActPrecios);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.productosProveedores);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.datosInfoProducto.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.datosInfoProducto.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.datosInfoProducto.area);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.datosInfoProducto.nombreProveedor);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfoProducto.precio != null && ctx.datosInfoProducto.unidad != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfoProducto.garantia != null && ctx.datosInfoProducto.garantia != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfoProducto.fecha != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.productoProveedorBorrar.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTrashAlt);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.datosActualizarProducto.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.datosActualizarProducto.nombreProveedor);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](144, 34, ctx.datosActualizarProducto.precio), " por ", ctx.datosActualizarProducto.unidad, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.precioNuevo)("name", "precioNuevo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.datosActualizarProducto.unidad)("name", "unidadesAct");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faSyncAlt);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.productosProveedores);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: [".margen-superior[_ngcontent-%COMP%] {\r\n    margin-top: 120px;\r\n}\r\n.thead-custom[_ngcontent-%COMP%]{\r\n    margin-top: -40px;\r\n    height: 120px;\r\n    background: linear-gradient(-200deg, #232841, #61677c);\r\n    box-shadow: 1px 5px 15px #a2a2a2;\r\n}\r\n.letras[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\r\n.btn-gestionar[_ngcontent-%COMP%]{\r\n    background-color: rgb(223, 117, 19);\r\n    color: aliceblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNEQUFzRDtJQUN0RCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicHJvZHVjdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2VuLXN1cGVyaW9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcbi50aGVhZC1jdXN0b217XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTIwMGRlZywgIzIzMjg0MSwgIzYxNjc3Yyk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggNXB4IDE1cHggI2EyYTJhMjtcclxufVxyXG4ubGV0cmFzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuLmJ0bi1nZXN0aW9uYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxMTcsIDE5KTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    2307: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProveedoresComponent": function ProveedoresComponent() {
          return (
            /* binding */
            _ProveedoresComponent
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


      var _services_proveedores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/proveedores.service */
      3449);
      /* harmony import */


      var src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/areas.service */
      6802);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      4364); //ICONOS FONTAWESOME


      function ProveedoresComponent_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var area_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", area_r15.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](area_r15.nombre);
        }
      }

      function ProveedoresComponent_ng_container_54_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProveedoresComponent_ng_container_54_tr_1_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var proveedor_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r18.asignarDetalles(proveedor_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Detalles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProveedoresComponent_ng_container_54_tr_1_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var proveedor_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r21.aProductos(proveedor_r16.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Productos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProveedoresComponent_ng_container_54_tr_1_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var proveedor_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r23.asignarBorrar(proveedor_r16.id, proveedor_r16.nombre);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var proveedor_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r16.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r16.area);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r16.correo);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r16.telefono);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r16.celular);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r16.contacto);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedor_r16.ciudad);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r17.faInfoCircle);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r17.faListAlt);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r17.faTrashAlt);
        }
      }

      function ProveedoresComponent_ng_container_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProveedoresComponent_ng_container_54_tr_1_Template, 26, 10, "tr", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var proveedor_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (proveedor_r16.nombre.toLocaleLowerCase().includes(_r0.value.toLowerCase()) || _r0.value == "") && (proveedor_r16.area.toLocaleLowerCase().includes(_r1.value.toLowerCase()) || _r1.value == ""));
        }
      }

      function ProveedoresComponent_tr_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "RIF");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r4.datosInfo.rif, " ");
        }
      }

      function ProveedoresComponent_tr_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Ciudad y pa\xEDs");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r5.datosInfo.ciudad, " ");
        }
      }

      function ProveedoresComponent_tr_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Opciones de cr\xE9dito (d\xEDas)");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r6.datosInfo.credito, " / ", ctx_r6.datosInfo.dias_credito, " ");
        }
      }

      function ProveedoresComponent_tr_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Correo de contacto");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.datosInfo.correo);
        }
      }

      function ProveedoresComponent_tr_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Tel\xE9fono fijo");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.datosInfo.telefono);
        }
      }

      function ProveedoresComponent_tr_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Celular de contacto");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.datosInfo.celular);
        }
      }

      function ProveedoresComponent_tr_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nombre del Vendedor \xF3 Contacto");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10.datosInfo.contacto);
        }
      }

      function ProveedoresComponent_tr_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Direcci\xF3n fiscal");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r11.datosInfo.direccion);
        }
      }

      function ProveedoresComponent_tr_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Descripcion");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 1, ctx_r12.datosInfo.descripcion));
        }
      }

      function ProveedoresComponent_tr_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Fecha Creado");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 1, ctx_r13.datosInfo.fecha));
        }
      }

      function ProveedoresComponent_ng_container_155_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var proveedoresPDF_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedoresPDF_r26.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedoresPDF_r26.area);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedoresPDF_r26.rif);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedoresPDF_r26.correo);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedoresPDF_r26.telefono);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedoresPDF_r26.celular);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proveedoresPDF_r26.contacto);
        }
      }

      var _ProveedoresComponent = /*#__PURE__*/function () {
        function _ProveedoresComponent(servicioProveedores, servicioAreas, router, auth) {
          _classCallCheck(this, _ProveedoresComponent);

          this.servicioProveedores = servicioProveedores;
          this.servicioAreas = servicioAreas;
          this.router = router;
          this.auth = auth; //ICONOS FONTAWESOME

          this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSignInAlt;
          this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faListAlt;
          this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSignOutAlt;
          this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimesCircle;
          this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faExclamationCircle;
          this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPencilAlt;
          this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPlusCircle;
          this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faInfoCircle;
          this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrashAlt;
          this.faFileDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFileDownload; //VARIABLES QUE ALMACENAN DATOS DE BD

          this.proveedores = [];
          this.areas = []; //VARIABLES DE FUNCIONES COMPONENT

          this.datosInfo = {
            id: null,
            nombre: null,
            area: null,
            descripcion: null,
            rif: null,
            fecha: null,
            contacto: null,
            telefono: null,
            direccion: null,
            correo: null
          };
          this.proveedorBorrar = {
            id: null,
            nombre: null
          };
          this.oculto = true;
        }

        _createClass(_ProveedoresComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.servicioProveedores.getProveedores().subscribe(function (res) {
              _this15.proveedores = res;
            }, function (err) {
              return console.log(err);
            });
            this.servicioAreas.getAreas().subscribe(function (res) {
              _this15.areas = res;
            }, function (err) {
              return console.log(err);
            });
          } //FUNCION PARA BOTON DE DETALLES DE PROVEEDOR

        }, {
          key: "asignarDetalles",
          value: function asignarDetalles(proveedor) {
            this.datosInfo = proveedor;
          } //FUNCION PARA BOTON DE BORRAR PROVEEDOR (DATOS)

        }, {
          key: "asignarBorrar",
          value: function asignarBorrar(id, nombre) {
            this.proveedorBorrar.nombre = nombre;
            this.proveedorBorrar.id = id;
          } //FUNCION PARA BORRAR PROVEEDOR

        }, {
          key: "eliminarProveedor",
          value: function eliminarProveedor() {
            this.servicioProveedores.deleteProveedor(this.proveedorBorrar.id).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          } //FUNCION PARA DESCARGAR PDF DE PROVEEDORES

        }, {
          key: "descargarPDF",
          value: function descargarPDF() {
            this.oculto = false;
            var opciones = {
              margin: 1,
              filename: 'Proveedores.pdf',
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
          } //FUNCION PARA NAVEGAR A ACTUALIZAR PRODUCTOS

        }, {
          key: "aProductos",
          value: function aProductos(id) {
            this.router.navigate(["/procura/proveedores/".concat(id, "/productos")]);
          }
        }]);

        return _ProveedoresComponent;
      }();

      _ProveedoresComponent.ɵfac = function ProveedoresComponent_Factory(t) {
        return new (t || _ProveedoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_proveedores_service__WEBPACK_IMPORTED_MODULE_1__.ProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_2__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
      };

      _ProveedoresComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ProveedoresComponent,
        selectors: [["app-proveedores"]],
        decls: 156,
        vars: 25,
        consts: [[1, "container-fluid", "mt-lg-3"], [1, "row", "px-4"], [1, "col-3"], [1, "col-9", "mt-lg-3"], ["role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group", "float-end"], ["type", "button", "routerLink", "agregar", 1, "btn", "btn-success", "cool-btn"], [3, "icon"], ["type", "button", "routerLink", "modificar", 1, "btn", "btn-primary", "cool-btn", "text-white"], ["data-bs-toggle", "modal", "data-bs-target", "#pdfProveedores", 1, "btn", "btn-warning", "text-dark", "cool-btn"], [1, "table-responsive-md", "mt-lg-3"], [1, "table", "table-sm", "shadow", "table-striped"], [1, "table-dark"], ["scope", "col-2"], ["ngModel", "", "type", "text", "placeholder", "Filtro por nombre", 1, "w-75", "form-control", "form-control-sm"], ["filtroNombre", "ngModel"], ["ngModel", "", "name", "filtroArea", 1, "form-select", "form-select-sm"], ["filtroArea", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["scope", "col"], ["scope", "col-sm-2"], ["scope", "col-sm-1"], ["scope", "col-sm-3"], [4, "ngFor", "ngForOf"], ["id", "modalInfo", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-info"], ["id", "exampleModalLabel", 1, "modal-title", "text-white"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table", "table-sm"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["tabindex", "-1", "id", "modalEliminar", 1, "modal", "fade"], [1, "modal-header", "bg-danger"], [1, "modal-title", "text-white"], [1, "text-danger"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-danger", 3, "click"], ["id", "pdfProveedores", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["role", "group", 1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-secondary"], ["id", "elemento-a-exportar", 1, "modal-body"], [1, "row"], [1, "table", "table-sm", "letras"], [1, "thead", "bg-secondary", "text-white"], [3, "value"], ["class", "bg-light table-sm linea-tabla", "scope", "row", 4, "ngIf"], ["scope", "row", 1, "bg-light", "table-sm", "linea-tabla"], [1, "col-sm-2"], [1, "col-sm-1"], [1, "col-sm-3"], [1, "btn-group"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalInfo", 1, "btn", "btn-info", "text-white", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalEliminar", 1, "btn", "btn-danger", "btn-sm", 3, "click"]],
        template: function ProveedoresComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Proveedores");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Agregar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Modificar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Exportar a PDF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "thead", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "select", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Area (Todas)");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ProveedoresComponent_option_29_Template, 2, 2, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "thead", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\xC1rea");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Correo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Tel\xE9fono");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Celular");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Ciudad");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, ProveedoresComponent_ng_container_54_Template, 2, 1, "ng-container", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "h5", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "table", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "\xC1rea profesional");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, ProveedoresComponent_tr_78_Template, 6, 1, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, ProveedoresComponent_tr_79_Template, 6, 1, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, ProveedoresComponent_tr_80_Template, 6, 2, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, ProveedoresComponent_tr_81_Template, 6, 1, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, ProveedoresComponent_tr_82_Template, 6, 1, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, ProveedoresComponent_tr_83_Template, 6, 1, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, ProveedoresComponent_tr_84_Template, 6, 1, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, ProveedoresComponent_tr_85_Template, 6, 1, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, ProveedoresComponent_tr_86_Template, 7, 3, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, ProveedoresComponent_tr_87_Template, 7, 3, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " Cerrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "h5", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Eliminar Proveedor");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "\xBFEst\xE1s seguro que deseas eliminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "?. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Esta acci\xF3n es irreversible.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProveedoresComponent_Template_button_click_116_listener() {
              return ctx.eliminarProveedor();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, " Eliminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "h5", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Exportar a PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProveedoresComponent_Template_button_click_126_listener() {
              return ctx.descargarPDF();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, " Exportar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](130, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, " Cerrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "Proveedores");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "table", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "thead", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "\xC1rea");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "RIF");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Correo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "Tel\xE9fono");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Celular");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](155, ProveedoresComponent_ng_container_155_Template, 16, 7, "ng-container", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faPlusCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faPencilAlt);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.areas);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.proveedores);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.datosInfo.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.datosInfo.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.datosInfo.area);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.rif != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.ciudad != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.credito != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.correo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.telefono != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.celular != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.contacto != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.direccion != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.descripcion != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datosInfo.fecha != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.proveedorBorrar.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTrashAlt);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faFileDownload);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTimesCircle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.proveedores);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        styles: [".margen-superior[_ngcontent-%COMP%] {\r\n    margin-top: 120px;\r\n}\r\n.thead-custom[_ngcontent-%COMP%]{\r\n    margin-top: -40px;\r\n    height: 120px;\r\n    background: linear-gradient(-200deg, #232841, #61677c);\r\n    box-shadow: 1px 5px 15px #a2a2a2;\r\n}\r\n.letras[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZlZWRvcmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0RBQXNEO0lBQ3RELGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwcm92ZWVkb3Jlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdlbi1zdXBlcmlvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxufVxyXG4udGhlYWQtY3VzdG9te1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yMDBkZWcsICMyMzI4NDEsICM2MTY3N2MpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDVweCAxNXB4ICNhMmEyYTI7XHJcbn1cclxuLmxldHJhcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    4362: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcuraRoutingModule": function ProcuraRoutingModule() {
          return (
            /* binding */
            _ProcuraRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _components_productos_productos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/productos/productos.component */
      676);
      /* harmony import */


      var _components_procura_base_procura_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/procura-base/procura-base.component */
      5543);
      /* harmony import */


      var _components_proveedores_proveedores_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/proveedores/proveedores.component */
      2307);
      /* harmony import */


      var _components_agregar_proveedor_agregar_proveedor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/agregar-proveedor/agregar-proveedor.component */
      2398);
      /* harmony import */


      var _components_modificar_proveedor_modificar_proveedor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/modificar-proveedor/modificar-proveedor.component */
      9299);
      /* harmony import */


      var _components_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/agregar-producto/agregar-producto.component */
      3515);
      /* harmony import */


      var _components_modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/modificar-producto/modificar-producto.component */
      9719);
      /* harmony import */


      var _components_actualizar_productos_actualizar_productos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/actualizar-productos/actualizar-productos.component */
      3435);
      /* harmony import */


      var _components_gestion_productos_gestion_productos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/gestion-productos/gestion-productos.component */
      6456);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _components_procura_base_procura_base_component__WEBPACK_IMPORTED_MODULE_1__.ProcuraBaseComponent,
        children: [{
          path: '',
          redirectTo: 'proveedores'
        }, {
          path: 'productos',
          component: _components_productos_productos_component__WEBPACK_IMPORTED_MODULE_0__.ProductosComponent
        }, {
          path: 'productos/agregar',
          component: _components_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_5__.AgregarProductoComponent
        }, {
          path: 'productos/modificar',
          component: _components_modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_6__.ModificarProductoComponent
        }, {
          path: 'productos/gestionar',
          component: _components_gestion_productos_gestion_productos_component__WEBPACK_IMPORTED_MODULE_8__.GestionProductosComponent
        }, {
          path: 'proveedores',
          component: _components_proveedores_proveedores_component__WEBPACK_IMPORTED_MODULE_2__.ProveedoresComponent
        }, {
          path: 'proveedores/agregar',
          component: _components_agregar_proveedor_agregar_proveedor_component__WEBPACK_IMPORTED_MODULE_3__.AgregarProveedorComponent
        }, {
          path: 'proveedores/modificar',
          component: _components_modificar_proveedor_modificar_proveedor_component__WEBPACK_IMPORTED_MODULE_4__.ModificarProveedorComponent
        }, {
          path: 'proveedores/:id/productos',
          component: _components_actualizar_productos_actualizar_productos_component__WEBPACK_IMPORTED_MODULE_7__.ActualizarProductosComponent
        }]
      }];

      var _ProcuraRoutingModule = function _ProcuraRoutingModule() {
        _classCallCheck(this, _ProcuraRoutingModule);
      };

      _ProcuraRoutingModule.ɵfac = function ProcuraRoutingModule_Factory(t) {
        return new (t || _ProcuraRoutingModule)();
      };

      _ProcuraRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _ProcuraRoutingModule
      });
      _ProcuraRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_ProcuraRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    8738: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcuraModule": function ProcuraModule() {
          return (
            /* binding */
            _ProcuraModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _procura_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./procura-routing.module */
      4362);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _components_procura_base_procura_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/procura-base/procura-base.component */
      5543);
      /* harmony import */


      var _components_productos_productos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/productos/productos.component */
      676);
      /* harmony import */


      var _components_proveedores_proveedores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/proveedores/proveedores.component */
      2307);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _components_agregar_proveedor_agregar_proveedor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/agregar-proveedor/agregar-proveedor.component */
      2398);
      /* harmony import */


      var _components_modificar_proveedor_modificar_proveedor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/modificar-proveedor/modificar-proveedor.component */
      9299);
      /* harmony import */


      var _components_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/agregar-producto/agregar-producto.component */
      3515);
      /* harmony import */


      var _components_modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/modificar-producto/modificar-producto.component */
      9719);
      /* harmony import */


      var _components_actualizar_productos_actualizar_productos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/actualizar-productos/actualizar-productos.component */
      3435);
      /* harmony import */


      var _components_gestion_productos_gestion_productos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/gestion-productos/gestion-productos.component */
      6456);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ProcuraModule = function _ProcuraModule() {
        _classCallCheck(this, _ProcuraModule);
      };

      _ProcuraModule.ɵfac = function ProcuraModule_Factory(t) {
        return new (t || _ProcuraModule)();
      };

      _ProcuraModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _ProcuraModule
      });
      _ProcuraModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _procura_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcuraRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_ProcuraModule, {
          declarations: [_components_procura_base_procura_base_component__WEBPACK_IMPORTED_MODULE_1__.ProcuraBaseComponent, _components_productos_productos_component__WEBPACK_IMPORTED_MODULE_2__.ProductosComponent, _components_proveedores_proveedores_component__WEBPACK_IMPORTED_MODULE_3__.ProveedoresComponent, _components_agregar_proveedor_agregar_proveedor_component__WEBPACK_IMPORTED_MODULE_4__.AgregarProveedorComponent, _components_modificar_proveedor_modificar_proveedor_component__WEBPACK_IMPORTED_MODULE_5__.ModificarProveedorComponent, _components_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_6__.AgregarProductoComponent, _components_modificar_producto_modificar_producto_component__WEBPACK_IMPORTED_MODULE_7__.ModificarProductoComponent, _components_actualizar_productos_actualizar_productos_component__WEBPACK_IMPORTED_MODULE_8__.ActualizarProductosComponent, _components_gestion_productos_gestion_productos_component__WEBPACK_IMPORTED_MODULE_9__.GestionProductosComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _procura_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcuraRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule]
        });
      })();
      /***/

    },

    /***/
    8745: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductosProveedoresService": function ProductosProveedoresService() {
          return (
            /* binding */
            _ProductosProveedoresService
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

      var _ProductosProveedoresService = /*#__PURE__*/function () {
        function _ProductosProveedoresService(http) {
          _classCallCheck(this, _ProductosProveedoresService);

          this.http = http;
          this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_ProductosProveedoresService, [{
          key: "getProductosProveedores",
          value: function getProductosProveedores() {
            return this.http.get("".concat(this.API_URI, "/productosProveedores"));
          }
        }, {
          key: "getProductosProveedoresElegido",
          value: function getProductosProveedoresElegido(id_Proveedor) {
            return this.http.get("".concat(this.API_URI, "/productosProveedores/").concat(id_Proveedor));
          }
        }, {
          key: "createProductoProveedor",
          value: function createProductoProveedor(producto) {
            var productoProveedorNuevo = {
              nombre: producto.nombre,
              id_area_producto: +producto.area,
              id_unidad_producto: +producto.unidad,
              garantia: producto.garantia,
              dias_garantia: +producto.dias_garantia,
              id_proveedor_producto: +producto.proveedor,
              fecha_act: new Date().toISOString().slice(0, 19).replace('T', ' '),
              precio: producto.precio
            };
            return this.http.post("".concat(this.API_URI, "/productosProveedores"), productoProveedorNuevo);
          }
        }, {
          key: "deleteProductoProveedor",
          value: function deleteProductoProveedor(id) {
            return this.http["delete"]("".concat(this.API_URI, "/productosProveedores/").concat(id));
          }
        }, {
          key: "updateProductoProveedor",
          value: function updateProductoProveedor(id, producto) {
            var productoProveedorNuevo = {
              nombre: producto.nombre,
              id_area_producto: +producto.area,
              id_unidad_producto: +producto.unidad,
              garantia: producto.garantia,
              dias_garantia: +producto.dias_garantia,
              id_proveedor_producto: +producto.nombreProveedor,
              precio: producto.precio
            };
            return this.http.put("".concat(this.API_URI, "/productosProveedores/").concat(id), productoProveedorNuevo);
          }
        }, {
          key: "updatePrecioProducto",
          value: function updatePrecioProducto(id, precioAct) {
            var productoPrecioNuevo = {
              precio: precioAct
            };
            console.log(productoPrecioNuevo);
            return this.http.put("".concat(this.API_URI, "/productosProveedores/").concat(id), productoPrecioNuevo);
          }
        }]);

        return _ProductosProveedoresService;
      }();

      _ProductosProveedoresService.ɵfac = function ProductosProveedoresService_Factory(t) {
        return new (t || _ProductosProveedoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ProductosProveedoresService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ProductosProveedoresService,
        factory: _ProductosProveedoresService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4893: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductosService": function ProductosService() {
          return (
            /* binding */
            _ProductosService
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

      var _ProductosService = /*#__PURE__*/function () {
        function _ProductosService(http) {
          _classCallCheck(this, _ProductosService);

          this.http = http;
          this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_ProductosService, [{
          key: "getProductos",
          value: function getProductos() {
            return this.http.get("".concat(this.API_URI, "/productos"));
          }
        }, {
          key: "getProducto",
          value: function getProducto(id) {
            return this.http.get("".concat(this.API_URI, "/productos/").concat(id));
          }
        }, {
          key: "createProducto",
          value: function createProducto(producto) {
            var productoNuevo = {
              nombre: producto.nombre,
              id_unidad: +producto.unidad
            };
            return this.http.post("".concat(this.API_URI, "/productos"), productoNuevo);
          }
        }, {
          key: "deleteProducto",
          value: function deleteProducto(id) {
            return this.http["delete"]("".concat(this.API_URI, "/productos/").concat(id));
          }
        }, {
          key: "updateProducto",
          value: function updateProducto(id, producto) {
            var productoModificar = {
              nombre: producto.nombre,
              id_unidad: +producto.unidad
            };
            return this.http.put("".concat(this.API_URI, "/productos/").concat(id), productoModificar);
          }
        }]);

        return _ProductosService;
      }();

      _ProductosService.ɵfac = function ProductosService_Factory(t) {
        return new (t || _ProductosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ProductosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ProductosService,
        factory: _ProductosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    3449: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProveedoresService": function ProveedoresService() {
          return (
            /* binding */
            _ProveedoresService
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

      var _ProveedoresService = /*#__PURE__*/function () {
        function _ProveedoresService(http) {
          _classCallCheck(this, _ProveedoresService);

          this.http = http;
          this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_ProveedoresService, [{
          key: "getProveedores",
          value: function getProveedores() {
            return this.http.get("".concat(this.API_URI, "/proveedores"));
          }
        }, {
          key: "getProveedorElegido",
          value: function getProveedorElegido(id) {
            return this.http.get("".concat(this.API_URI, "/proveedores/").concat(id));
          }
        }, {
          key: "createProveedor",
          value: function createProveedor(proveedor) {
            var proveedorNuevo = {
              nombre: proveedor.nombre,
              id_area: +proveedor.area,
              direccion: proveedor.direccion,
              correo: proveedor.correo,
              credito: proveedor.credito,
              dias_credito: +proveedor.dias_credito,
              ciudad: proveedor.ciudad,
              telefono: proveedor.telefono,
              celular: proveedor.celular,
              contacto: proveedor.contacto,
              rif: proveedor.rif,
              descripcion: proveedor.descripcion,
              responsable: proveedor.responsable
            };
            return this.http.post("".concat(this.API_URI, "/proveedores"), proveedorNuevo);
          }
        }, {
          key: "deleteProveedor",
          value: function deleteProveedor(id) {
            return this.http["delete"]("".concat(this.API_URI, "/proveedores/").concat(id));
          }
        }, {
          key: "updateProveedor",
          value: function updateProveedor(id, proveedor) {
            var proveedorNuevo = {
              id_proveedor: id,
              nombre: proveedor.nombre,
              id_area: +proveedor.area,
              direccion: proveedor.direccion,
              credito: proveedor.credito,
              dias_credito: +proveedor.dias_credito,
              ciudad: proveedor.ciudad,
              correo: proveedor.correo,
              telefono: proveedor.telefono,
              celular: proveedor.celular,
              contacto: proveedor.contacto,
              rif: proveedor.rif,
              descripcion: proveedor.descripcion
            };
            return this.http.put("".concat(this.API_URI, "/proveedores/").concat(id), proveedorNuevo);
          }
        }]);

        return _ProveedoresService;
      }();

      _ProveedoresService.ɵfac = function ProveedoresService_Factory(t) {
        return new (t || _ProveedoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ProveedoresService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ProveedoresService,
        factory: _ProveedoresService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modulo_procura_procura_module_ts-es5.js.map