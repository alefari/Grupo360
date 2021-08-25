(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkgrupo360"] = self["webpackChunkgrupo360"] || []).push([["common"], {
    /***/
    6802: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AreasService": function AreasService() {
          return (
            /* binding */
            _AreasService
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

      var _AreasService = /*#__PURE__*/function () {
        function _AreasService(http) {
          _classCallCheck(this, _AreasService);

          this.http = http;
          this.API_URI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dirBackend;
        }

        _createClass(_AreasService, [{
          key: "getAreas",
          value: function getAreas() {
            return this.http.get("".concat(this.API_URI, "/areas"));
          }
        }, {
          key: "getArea",
          value: function getArea(id) {
            return this.http.get("".concat(this.API_URI, "/areas/").concat(id));
          }
        }, {
          key: "createAreas",
          value: function createAreas(area) {
            return this.http.post("".concat(this.API_URI, "/areas"), area);
          }
        }, {
          key: "deleteArea",
          value: function deleteArea(id) {
            return this.http["delete"]("".concat(this.API_URI, "/areas/").concat(id));
          }
        }, {
          key: "updateArea",
          value: function updateArea(id, area) {
            return this.http.put("".concat(this.API_URI, "/areas/").concat(id), area);
          }
        }]);

        return _AreasService;
      }();

      _AreasService.ɵfac = function AreasService_Factory(t) {
        return new (t || _AreasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _AreasService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AreasService,
        factory: _AreasService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map