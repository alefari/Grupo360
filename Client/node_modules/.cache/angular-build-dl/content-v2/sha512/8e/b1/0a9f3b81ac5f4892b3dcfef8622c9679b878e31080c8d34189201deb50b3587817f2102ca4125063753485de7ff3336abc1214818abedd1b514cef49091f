"use strict";
(self["webpackChunkgrupo360"] = self["webpackChunkgrupo360"] || []).push([["common"],{

/***/ 6802:
/*!*******************************************!*\
  !*** ./src/app/services/areas.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreasService": function() { return /* binding */ AreasService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);



class AreasService {
    constructor(http) {
        this.http = http;
        this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
    }
    getAreas() {
        return this.http.get(`${this.API_URI}/areas`);
    }
    getArea(id) {
        return this.http.get(`${this.API_URI}/areas/${id}`);
    }
    createAreas(area) {
        return this.http.post(`${this.API_URI}/areas`, area);
    }
    deleteArea(id) {
        return this.http.delete(`${this.API_URI}/areas/${id}`);
    }
    updateArea(id, area) {
        return this.http.put(`${this.API_URI}/areas/${id}`, area);
    }
}
AreasService.ɵfac = function AreasService_Factory(t) { return new (t || AreasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AreasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AreasService, factory: AreasService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map