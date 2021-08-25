"use strict";
(self["webpackChunkgrupo360"] = self["webpackChunkgrupo360"] || []).push([["src_app_modulo_administrador_administrador_module_ts"],{

/***/ 8294:
/*!**********************************************************************!*\
  !*** ./src/app/modulo_administrador/administrador-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministradorRoutingModule": function() { return /* binding */ AdministradorRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_admin_empleados_admin_empleados_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/admin-empleados/admin-empleados.component */ 9077);
/* harmony import */ var _components_admin_inventario_admin_inventario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin-inventario/admin-inventario.component */ 2716);
/* harmony import */ var _components_admin_parametros_admin_parametros_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin-parametros/admin-parametros.component */ 6821);
/* harmony import */ var _components_administrador_base_administrador_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/administrador-base/administrador-base.component */ 5761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    { path: '', component: _components_administrador_base_administrador_base_component__WEBPACK_IMPORTED_MODULE_3__.AdministradorBaseComponent,
        children: [
            { path: '', redirectTo: 'empleados' },
            { path: 'empleados', component: _components_admin_empleados_admin_empleados_component__WEBPACK_IMPORTED_MODULE_0__.AdminEmpleadosComponent },
            { path: 'gestion-interna/gestion-inv', component: _components_admin_inventario_admin_inventario_component__WEBPACK_IMPORTED_MODULE_1__.AdminInventarioComponent },
            { path: 'gestion-interna/parametros', component: _components_admin_parametros_admin_parametros_component__WEBPACK_IMPORTED_MODULE_2__.AdminParametrosComponent },
        ]
    }
];
class AdministradorRoutingModule {
}
AdministradorRoutingModule.ɵfac = function AdministradorRoutingModule_Factory(t) { return new (t || AdministradorRoutingModule)(); };
AdministradorRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdministradorRoutingModule });
AdministradorRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdministradorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 4988:
/*!**************************************************************!*\
  !*** ./src/app/modulo_administrador/administrador.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministradorModule": function() { return /* binding */ AdministradorModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _administrador_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administrador-routing.module */ 8294);
/* harmony import */ var _components_admin_empleados_admin_empleados_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin-empleados/admin-empleados.component */ 9077);
/* harmony import */ var _components_administrador_base_administrador_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/administrador-base/administrador-base.component */ 5761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _components_admin_inventario_admin_inventario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-inventario/admin-inventario.component */ 2716);
/* harmony import */ var _components_admin_parametros_admin_parametros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-parametros/admin-parametros.component */ 6821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);










class AdministradorModule {
}
AdministradorModule.ɵfac = function AdministradorModule_Factory(t) { return new (t || AdministradorModule)(); };
AdministradorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AdministradorModule });
AdministradorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _administrador_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministradorRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdministradorModule, { declarations: [_components_administrador_base_administrador_base_component__WEBPACK_IMPORTED_MODULE_2__.AdministradorBaseComponent,
        _components_admin_empleados_admin_empleados_component__WEBPACK_IMPORTED_MODULE_1__.AdminEmpleadosComponent,
        _components_admin_inventario_admin_inventario_component__WEBPACK_IMPORTED_MODULE_3__.AdminInventarioComponent,
        _components_admin_parametros_admin_parametros_component__WEBPACK_IMPORTED_MODULE_4__.AdminParametrosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _administrador_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministradorRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule] }); })();


/***/ }),

/***/ 9077:
/*!**********************************************************************************************!*\
  !*** ./src/app/modulo_administrador/components/admin-empleados/admin-empleados.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminEmpleadosComponent": function() { return /* binding */ AdminEmpleadosComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/usuarios.service */ 1209);
/* harmony import */ var src_app_services_cargos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cargos.service */ 4501);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);






function AdminEmpleadosComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminEmpleadosComponent_tr_26_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const usuario_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onSetAcciones(usuario_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](usuario_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](usuario_r7.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](usuario_r7.cedula);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](usuario_r7.cargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](usuario_r7.correo);
} }
function AdminEmpleadosComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx_r2.usuarioAcciones.nombre), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 7, ctx_r2.usuarioAcciones.apellido), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.buscarCargoById(ctx_r2.usuarioAcciones.cargo));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.usuarioAcciones.cedula);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.usuarioAcciones.correo);
} }
function AdminEmpleadosComponent_div_45_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cargo_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", cargo_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cargo_r11.nombre);
} }
function AdminEmpleadosComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminEmpleadosComponent_div_45_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.usuarioAcciones.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminEmpleadosComponent_div_45_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.usuarioAcciones.apellido = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminEmpleadosComponent_div_45_Template_select_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.usuarioAcciones.cargo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AdminEmpleadosComponent_div_45_option_15_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminEmpleadosComponent_div_45_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.usuarioAcciones.correo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.usuarioAcciones.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.usuarioAcciones.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.usuarioAcciones.cargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.cargos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.usuarioAcciones.correo);
} }
function AdminEmpleadosComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminEmpleadosComponent_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.onAceptarEdicion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guardar Cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminEmpleadosComponent_button_56_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminEmpleadosComponent_button_56_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.onEditar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Editar empleado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminEmpleadosComponent_button_57_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminEmpleadosComponent_button_57_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.eliminarUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eliminar empleado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AdminEmpleadosComponent {
    constructor(servicioUsuarios, servicioCargos, router) {
        this.servicioUsuarios = servicioUsuarios;
        this.servicioCargos = servicioCargos;
        this.router = router;
        this.editarMode = false;
        this.usuarioAcciones = {
            nombre: null,
            apellido: null,
            cedula: null,
            cargo: null,
            correo: null,
            roles: null,
        };
    }
    ngOnInit() {
        this.servicioUsuarios.getUsuarios().subscribe(res => { this.usuarios = res; }, err => console.log(err));
        this.servicioCargos.getCargos().subscribe(res => {
            this.cargos = res;
        }, err => console.log(err));
    }
    onSetAcciones(usr) {
        this.editarMode = false;
        this.usuarioAcciones = usr;
    }
    eliminarUser() {
    }
    onEditar() {
        this.editarMode = !this.editarMode;
    }
    onAceptarEdicion() {
        // var cedula = this.usuarioAcciones.cedula;
        this.usuarioAcciones.id_cargo = this.usuarioAcciones.cargo;
        delete this.usuarioAcciones.roles;
        delete this.usuarioAcciones.cargo;
        // delete this.usuarioAcciones.cedula;
        console.log(this.usuarioAcciones);
        this.servicioUsuarios.updateUsuario(this.usuarioAcciones.cedula, this.usuarioAcciones).subscribe(res => { console.log(res); }, err => console.log(err));
    }
    onSalir() {
        this.editarMode = false;
    }
    buscarCargoById(id) {
        if (id)
            return this.cargos.find(cargo => cargo.id == id).nombre;
    }
}
AdminEmpleadosComponent.ɵfac = function AdminEmpleadosComponent_Factory(t) { return new (t || AdminEmpleadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_0__.UsuariosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cargos_service__WEBPACK_IMPORTED_MODULE_1__.CargosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AdminEmpleadosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminEmpleadosComponent, selectors: [["app-admin-empleados"]], decls: 80, vars: 13, consts: [[1, "container"], [1, "row", "px-4"], [1, "col-3"], [1, "col-9"], [1, "btn-group", "float-end"], ["type", "button", "routerLink", "ingresar", 1, "btn", "btn-success", "cool-btn"], [1, "table-responsive"], [1, "table", "table-sm", "shadow", "table-striped"], [1, "table-dark"], ["scope", "col"], ["class", "table-sm", "scope", "row", "class", "bg-light linea-tabla", 4, "ngFor", "ngForOf"], ["tabindex", "-1", "id", "modalInfo", 1, "modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "bg-info"], [1, "modal-title", "text-white"], [1, "modal-body"], [1, "row"], [1, "col"], [1, "card-body"], ["f", "ngForm"], ["src", "../../../assets/profileGeneric.png", "alt", "profileGeneric", 1, "h-25"], ["class", "col", 4, "ngIf"], ["class", "col-5", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["data-bs-dismiss", "modal", "type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["tabindex", "-1", "id", "modalEliminar", 1, "modal"], [1, "modal-dialog"], [1, "modal-header", "bg-danger"], [1, "text-danger"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-bs-dismiss", "modal", "type", "button", 1, "btn", "btn-danger", 3, "click"], ["scope", "row", 1, "bg-light", "linea-tabla"], ["data-bs-toggle", "modal", "data-bs-target", "#modalInfo", 1, "btn", "btn-info", "btn-sm", "text-white", 3, "click"], [1, "col-5"], [1, "row", "mb-2"], ["for", "nombre", 1, "form-label"], ["ngModel", "", "type", "text", "id", "nombre", "name", "nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "apellido", 1, "form-label"], ["ngModel", "", "type", "text", "id", "apellido", "name", "apellido", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "cargo", 1, "form-label"], ["name", "cargo", "ngModel", "", "aria-label", "Default select example", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "Correo", 1, "form-label"], ["ngModel", "", "type", "text", "id", "correo", "name", "Correo", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AdminEmpleadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Empleados");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "A\u00F1adir Empleado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "thead", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "C\u00E9dula");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AdminEmpleadosComponent_tr_26_Template, 14, 5, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "form", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, AdminEmpleadosComponent_div_44_Template, 12, 9, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, AdminEmpleadosComponent_div_45_Template, 21, 5, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Permisos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Administraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, AdminEmpleadosComponent_button_55_Template, 2, 0, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, AdminEmpleadosComponent_button_56_Template, 2, 0, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, AdminEmpleadosComponent_button_57_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminEmpleadosComponent_Template_button_click_58_listener() { return ctx.onSalir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Eliminar Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "\u00BFEst\u00E1s seguro que deseas eliminar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "?. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Esta acci\u00F3n es irreversible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminEmpleadosComponent_Template_button_click_78_listener() { return ctx.eliminarUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.usuarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Empleado: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 9, ctx.usuarioAcciones.nombre), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 11, ctx.usuarioAcciones.apellido), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.editarMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editarMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editarMode && _r1.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.editarMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.editarMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.editarMode ? "Cancelar" : "Salir");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1lbXBsZWFkb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2716:
/*!************************************************************************************************!*\
  !*** ./src/app/modulo_administrador/components/admin-inventario/admin-inventario.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminInventarioComponent": function() { return /* binding */ AdminInventarioComponent; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/inventario-sql.service */ 526);
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categorias.service */ 5772);
/* harmony import */ var src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/subcategorias.service */ 9786);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 697);
/* harmony import */ var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/unidades.service */ 9451);
/* harmony import */ var src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/estados.service */ 1472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
//ICONOS FONTAWESOME














const _c0 = ["f"];
function AdminInventarioComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", categoria_r12.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](categoria_r12.nombre);
} }
function AdminInventarioComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Seleccione un categor\u00EDa.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminInventarioComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcategoria_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", subcategoria_r13.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](subcategoria_r13.nombre);
} }
function AdminInventarioComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Seleccione un subcategor\u00EDa.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminInventarioComponent_ng_container_30_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r14.nombre);
} }
function AdminInventarioComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminInventarioComponent_ng_container_30_ng_container_1_Template, 3, 2, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r14.categoria == _r1.value && item_r14.estado != "En Obra" && item_r14.subcategoria == _r4.value);
} }
function AdminInventarioComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Seleccione un item.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminInventarioComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminInventarioComponent_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r17.reportarReparado(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Reportar Reparado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r10.faExclamationCircle);
} }
function AdminInventarioComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminInventarioComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.reportarAveria(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Reportar Da\u00F1ado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r11.faExclamationCircle);
} }
class AdminInventarioComponent {
    constructor(servicioInventarioSQL, servicioCategorias, servicioSubcategorias, servicioUbicaciones, servicioUnidades, servicioEstados, router) {
        this.servicioInventarioSQL = servicioInventarioSQL;
        this.servicioCategorias = servicioCategorias;
        this.servicioSubcategorias = servicioSubcategorias;
        this.servicioUbicaciones = servicioUbicaciones;
        this.servicioUnidades = servicioUnidades;
        this.servicioEstados = servicioEstados;
        this.router = router;
        //ICONOS FONTAWESOME
        this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTimesCircle;
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPlusCircle;
        this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faExclamationCircle;
        //VARIABLES QUE CONTIENEN BASES DE DATOS
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
        //VARIABLE PARA MODEL DE AVERIA
        this.itemAveriado = {
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
            precio: null,
        };
    }
    ngOnInit() {
        this.servicioInventarioSQL.getInventario().subscribe(res => { this.inventarioSQL = res; }, err => console.log(err));
        this.servicioCategorias.getCategorias().subscribe(res => { this.categorias = res; }, err => console.log(err));
        this.servicioSubcategorias.getSubcategorias().subscribe(res => { this.subcategorias = res; }, err => console.log(err));
        this.servicioUbicaciones.getUbicaciones().subscribe(res => { this.ubicaciones = res; }, err => console.log(err));
        this.servicioUnidades.getUnidades().subscribe(res => { this.unidades = res; }, err => console.log(err));
        this.servicioEstados.getEstados().subscribe(res => { this.estados = res; }, err => console.log(err));
    }
    //FUNCIONES DE MODAL REPORTE
    reportarAveria() {
        this.itemAveriado.estado = "Dañado";
        this.itemAveriado.estado = this.estados.find(est => est.nombre == this.itemAveriado.estado).id;
        this.itemAveriado.categoria = this.categorias.find(cat => cat.nombre == this.itemAveriado.categoria).id;
        this.itemAveriado.subcategoria = this.subcategorias.find(subcat => subcat.nombre == this.itemAveriado.subcategoria).id;
        this.itemAveriado.ubicacion = this.ubicaciones.find(ubic => ubic.nombre == this.itemAveriado.ubicacion).id;
        this.itemAveriado.unidades = this.unidades.find(und => und.nombre == this.itemAveriado.unidades).id;
        //MODIFICA ITEM EN BD
        this.servicioInventarioSQL.updateItem(this.itemAveriado.id, this.itemAveriado, true).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
        this.router.navigate(['administrador/gestion-interna']);
        this.form.reset();
    }
    reportarReparado() {
        this.itemAveriado.estado = "Disponible";
        this.itemAveriado.estado = this.estados.find(est => est.nombre == this.itemAveriado.estado).id;
        this.itemAveriado.categoria = this.categorias.find(cat => cat.nombre == this.itemAveriado.categoria).id;
        this.itemAveriado.subcategoria = this.subcategorias.find(subcat => subcat.nombre == this.itemAveriado.subcategoria).id;
        this.itemAveriado.ubicacion = this.ubicaciones.find(ubic => ubic.nombre == this.itemAveriado.ubicacion).id;
        this.itemAveriado.unidades = this.unidades.find(und => und.nombre == this.itemAveriado.unidades).id;
        //MODIFICA ITEM EN BD
        this.servicioInventarioSQL.updateItem(this.itemAveriado.id, this.itemAveriado, true).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
        this.router.navigate(['administrador/gestion-interna']);
        this.form.reset();
    }
    //CREA ITEM TEMPORAL EN DONDE COLOCARA NUEVOS ESTADOS
    alElegirItem(idItem) {
        this.itemAveriado = Object.assign({}, this.inventarioSQL.find(itemInv => itemInv.id == idItem));
    }
    //BUSCA ITEM PARA REPORTAR AVERIA
    regresarItem(id) {
        return this.inventarioSQL.find(item => item.id == id);
    }
    //FUNCION PARA BORRAR FORMULARIO REPORTE
    borrarForm() {
        this.form.reset();
        this.router.navigate(['administrador/gestion-interna']);
    }
}
AdminInventarioComponent.ɵfac = function AdminInventarioComponent_Factory(t) { return new (t || AdminInventarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_0__.InventarioSQLService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_1__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_2__.SubcategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__.UbicacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__.EstadosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
AdminInventarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AdminInventarioComponent, selectors: [["app-admin-inventario"]], viewQuery: function AdminInventarioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 39, vars: 9, consts: [[1, "margin-top-form-reporte"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-reportar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-2"], ["f", "ngForm"], [1, "row", "mt-3", "mb-4"], [1, "col"], ["ngModel", "", "required", "", "name", "selectCategoriaReporte", 1, "form-select", "mt-2"], ["selectCategoriaReporte", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["ngModel", "", "required", "", "name", "selectSubcategoriaReporte", 1, "form-select", "mt-2"], ["selectSubcategoriaReporte", "ngModel"], ["required", "", "ngModel", "", "name", "id", 1, "form-select", "mt-2", 3, "change"], ["idItem", "ngModel"], [4, "ngFor", "ngForOf"], [1, "form-footer-style"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "icon"], ["data-dismiss", "modal", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], [3, "value"], [1, "text-danger"], [4, "ngIf"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function AdminInventarioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Reportar item inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, AdminInventarioComponent_option_16_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AdminInventarioComponent_small_17_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Subcategor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AdminInventarioComponent_option_23_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AdminInventarioComponent_small_24_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "select", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AdminInventarioComponent_Template_select_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29); return ctx.alElegirItem(_r7.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AdminInventarioComponent_ng_container_30_Template, 2, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, AdminInventarioComponent_small_31_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminInventarioComponent_Template_button_click_34_listener() { return ctx.borrarForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " Cerrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, AdminInventarioComponent_button_37_Template, 3, 1, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, AdminInventarioComponent_button_38_Template, 3, 1, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](22);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r1.valid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.subcategorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.inventarioSQL);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faTimesCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r7.value && ctx.regresarItem(_r7.value).estado == "Da\u00F1ado");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r7.value && ctx.regresarItem(_r7.value).estado == "Disponible");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"]], styles: [".header-color-reportar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #be3b24, #f0cd5d );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWludmVudGFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSxxREFBcUQ7QUFDekQiLCJmaWxlIjoiYWRtaW4taW52ZW50YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypIRUFERVIgREUgRk9STVMqL1xyXG4uaGVhZGVyLWNvbG9yLXJlcG9ydGFye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYmUzYjI0LCAjZjBjZDVkICk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6821:
/*!************************************************************************************************!*\
  !*** ./src/app/modulo_administrador/components/admin-parametros/admin-parametros.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminParametrosComponent": function() { return /* binding */ AdminParametrosComponent; }
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/inventario-sql.service */ 526);
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categorias.service */ 5772);
/* harmony import */ var src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/subcategorias.service */ 9786);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 697);
/* harmony import */ var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/unidades.service */ 9451);
/* harmony import */ var src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/estados.service */ 1472);
/* harmony import */ var src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/areas.service */ 6802);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
//ICONOS FONTAWESOME














const _c0 = ["f"];
class AdminParametrosComponent {
    constructor(servicioInventarioSQL, servicioCategorias, servicioSubcategorias, servicioUbicaciones, servicioUnidades, servicioEstados, servicioArea, router) {
        this.servicioInventarioSQL = servicioInventarioSQL;
        this.servicioCategorias = servicioCategorias;
        this.servicioSubcategorias = servicioSubcategorias;
        this.servicioUbicaciones = servicioUbicaciones;
        this.servicioUnidades = servicioUnidades;
        this.servicioEstados = servicioEstados;
        this.servicioArea = servicioArea;
        this.router = router;
        //ICONOS FONTAWESOME
        this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTimesCircle;
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPlusCircle;
        this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faExclamationCircle;
        //VARIABLES QUE CONTIENEN BASES DE DATOS
        this.inventarioSQL = [];
        this.categorias = [];
        this.subcategorias = [];
        this.ubicaciones = [];
        this.unidades = [];
        this.estados = [];
        this.areas = [];
    }
    ngOnInit() {
        this.servicioInventarioSQL.getInventario().subscribe(res => { this.inventarioSQL = res; }, err => console.log(err));
        this.servicioCategorias.getCategorias().subscribe(res => { this.categorias = res; }, err => console.log(err));
        this.servicioSubcategorias.getSubcategorias().subscribe(res => { this.subcategorias = res; }, err => console.log(err));
        this.servicioUbicaciones.getUbicaciones().subscribe(res => { this.ubicaciones = res; }, err => console.log(err));
        this.servicioUnidades.getUnidades().subscribe(res => { this.unidades = res; }, err => console.log(err));
        this.servicioEstados.getEstados().subscribe(res => { this.estados = res; }, err => console.log(err));
        this.servicioArea.getAreas().subscribe(res => { this.estados = res; }, err => console.log(err));
    }
    //FUNCION AGREGAR UNIDAD
    unidadAgregar(nombreUnidad) {
        let nuevaUnidad = { nombre: nombreUnidad };
        this.servicioUnidades.createUnidad(nuevaUnidad).subscribe(res => { console.log(res); }, err => { console.log(err); });
        this.form.reset();
    }
    //FUNCION AGREGAR CATEGORIA
    categoriaAgregar(nombreCategoria) {
        let nuevaCategoria = { nombre: nombreCategoria };
        this.servicioCategorias.createCategoria(nuevaCategoria).subscribe(res => { console.log(res); }, err => { console.log(err); });
        this.form.reset();
    }
    //FUNCION AGREGAR UBICACION
    ubicacionAgregar(nombreUbicacion) {
        let nuevaUbicacion = { nombre: nombreUbicacion };
        this.servicioUbicaciones.createUbicacion(nuevaUbicacion).subscribe(res => { console.log(res); }, err => { console.log(err); });
        this.form.reset();
    }
    //FUNCION AGREGAR SUBCATEGORIA
    subcategoriaAgregar(nombreSubcategoria) {
        let nuevaSubcategoria = { nombre: nombreSubcategoria };
        this.servicioSubcategorias.createSubcategoria(nuevaSubcategoria).subscribe(res => { console.log(res); }, err => { console.log(err); });
        this.form.reset();
    }
    //FUNCION AGREGAR AREA
    areaAgregar(nombreArea) {
        let nuevaArea = { nombre: nombreArea };
        this.servicioArea.createAreas(nuevaArea).subscribe(res => { console.log(res); }, err => { console.log(err); });
        this.form.reset();
    }
    //FUNCION PARA BORRAR FORMULARIO AGREGAR
    borrarForm() {
        this.form.reset();
        this.router.navigate(['administrador/gestion-interna']);
    }
}
AdminParametrosComponent.ɵfac = function AdminParametrosComponent_Factory(t) { return new (t || AdminParametrosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_inventario_sql_service__WEBPACK_IMPORTED_MODULE_0__.InventarioSQLService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_1__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_subcategorias_service__WEBPACK_IMPORTED_MODULE_2__.SubcategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__.UbicacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__.UnidadesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_estados_service__WEBPACK_IMPORTED_MODULE_5__.EstadosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_areas_service__WEBPACK_IMPORTED_MODULE_6__.AreasService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
AdminParametrosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AdminParametrosComponent, selectors: [["app-admin-parametros"]], viewQuery: function AdminParametrosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 79, vars: 11, consts: [[1, "margin-top-form"], [1, "container"], [1, "body", "form-body-style"], [1, "container", "pt-3", "form-header-style", "header-color-agregar"], [1, "mx-auto"], [1, "container", "pe-5", "ps-5", "pt-2"], ["f", "ngForm"], [1, "row", "mt-3", "mb-4"], [1, "col"], [1, "form-floating"], ["ngModel", "", "name", "nombreUbicacionNueva", "required", "", "type", "text", 1, "form-control", "mt-2"], ["nombreUbicacion", "ngModel"], ["for", "floatingInput"], ["ngModel", "", "name", "nombreCategoriaNueva", "required", "", "type", "text", 1, "form-control", "mt-2"], ["nombreCategoria", "ngModel"], ["ngModel", "", "name", "nombreSubcategoriaNueva", "required", "", "type", "text", 1, "form-control", "mt-2"], ["nombreSubcategoria", "ngModel"], [1, "row", "mb-4"], [1, "col", "text-center"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "icon"], [1, "col-4"], ["ngModel", "", "name", "nombreUnidadNueva", "required", "", "type", "text", 1, "form-control", "mt-2"], ["nombreUnidad", "ngModel"], ["ngModel", "", "name", "nombreAreaNueva", "required", "", "type", "text", 1, "form-control", "mt-2"], ["nombreArea", "ngModel"], [1, "col-4", "text-center"], [1, "form-footer-style"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]], template: function AdminParametrosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Ubicaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Categor\u00EDa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Subcategor\u00EDa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminParametrosComponent_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16); return ctx.ubicacionAgregar(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, " Ubicaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminParametrosComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](24); return ctx.categoriaAgregar(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, " Categor\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminParametrosComponent_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](32); return ctx.subcategoriaAgregar(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, " Subcategor\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Unidad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Area:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminParametrosComponent_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](54); return ctx.unidadAgregar(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, " Unidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminParametrosComponent_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](62); return ctx.areaAgregar(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](72, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, " Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminParametrosComponent_Template_button_click_76_listener() { return ctx.borrarForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](77, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, " Cerrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](24);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](32);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](54);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faPlusCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !_r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faPlusCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !_r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faPlusCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !_r4.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faPlusCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !_r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faPlusCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faTimesCircle);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent], styles: [".header-color-agregar[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #2533f5, #4498f8 );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBhcmFtZXRyb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSxxREFBcUQ7QUFDekQiLCJmaWxlIjoiYWRtaW4tcGFyYW1ldHJvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypIRUFERVIgREUgRk9STVMqL1xyXG4uaGVhZGVyLWNvbG9yLWFncmVnYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyNTMzZjUsICM0NDk4ZjggKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5761:
/*!****************************************************************************************************!*\
  !*** ./src/app/modulo_administrador/components/administrador-base/administrador-base.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministradorBaseComponent": function() { return /* binding */ AdministradorBaseComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AdministradorBaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdministradorBaseComponent.ɵfac = function AdministradorBaseComponent_Factory(t) { return new (t || AdministradorBaseComponent)(); };
AdministradorBaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdministradorBaseComponent, selectors: [["app-administrador-base"]], decls: 1, vars: 0, template: function AdministradorBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhZG9yLWJhc2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4501:
/*!********************************************!*\
  !*** ./src/app/services/cargos.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargosService": function() { return /* binding */ CargosService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);



class CargosService {
    constructor(http) {
        this.http = http;
        this.API_URI = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
    }
    getCargos() {
        return this.http.get(`${this.API_URI}/cargos`);
    }
}
CargosService.ɵfac = function CargosService_Factory(t) { return new (t || CargosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CargosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CargosService, factory: CargosService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modulo_administrador_administrador_module_ts-es2015.js.map