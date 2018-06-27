webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/@core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_security__ = __webpack_require__("./node_modules/@nebular/security/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_import_guard__ = __webpack_require__("./src/app/@core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_data_module__ = __webpack_require__("./src/app/@core/data/data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'socicon-github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'socicon-facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'socicon-twitter',
    },
];
var NB_CORE_PROVIDERS = __WEBPACK_IMPORTED_MODULE_6__data_data_module__["a" /* DataModule */].forRoot().providers.concat(__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["d" /* NbAuthModule */].forRoot({
    providers: {
        email: {
            service: __WEBPACK_IMPORTED_MODULE_2__nebular_auth__["g" /* NbDummyAuthProvider */],
            config: {
                delay: 3000,
                login: {
                    rememberMe: true,
                },
            },
        },
    },
    forms: {
        login: {
            socialLinks: socialLinks,
        },
        register: {
            socialLinks: socialLinks,
        },
    },
}).providers, [
    __WEBPACK_IMPORTED_MODULE_3__nebular_security__["c" /* NbSecurityModule */].forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: __WEBPACK_IMPORTED_MODULE_3__nebular_security__["b" /* NbRoleProvider */],
        useValue: {
            getRole: function () {
                return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])('guest'); // here you could provide any role based on any auth flow
            },
        },
    },
    __WEBPACK_IMPORTED_MODULE_7__utils_analytics_service__["a" /* AnalyticsService */],
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_5__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__nebular_auth__["d" /* NbAuthModule */],
            ],
            declarations: [],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_service__ = __webpack_require__("./src/app/@core/data/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_2__state_service__["a" /* StateService */],
];
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule_1 = DataModule;
    DataModule.forRoot = function () {
        return {
            ngModule: DataModule_1,
            providers: SERVICES.slice(),
        };
    };
    DataModule = DataModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            providers: SERVICES.slice(),
        })
    ], DataModule);
    return DataModule;
    var DataModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StateService = /** @class */ (function () {
    function StateService() {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Left Sidebar',
                icon: 'nb-layout-sidebar-left',
                id: 'left',
                selected: true,
            },
            {
                name: 'Right Sidebar',
                icon: 'nb-layout-sidebar-right',
                id: 'right',
            },
        ];
        this.layoutState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.layouts[0]);
        this.sidebarState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.sidebars[0]);
    }
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    StateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/@core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/@core/utils/analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["a" /* filter */].call(this.router.events, function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/auth-block/auth-block.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n@media (max-width: 550px) {\n  :host /deep/ .accept-group {\n    font-size: 12px;\n    padding: 0; } }\n:host /deep/ form {\n  width: 100%; }\n:host /deep/ .alert {\n  text-align: center; }\n:host /deep/ .title {\n  margin-bottom: 0.75rem;\n  text-align: center; }\n:host /deep/ .sub-title {\n  margin-bottom: 2rem;\n  text-align: center; }\n:host /deep/ .checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px;\n  font-weight: normal; }\n:host /deep/ .form-group.accept-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 2rem 0; }\n:host /deep/ .form-group.accept-group .forgot-password {\n    line-height: 2; }\n:host /deep/ .links {\n  text-align: center;\n  margin-top: 1.75rem; }\n:host /deep/ .links .socials {\n    margin: 1.5rem 0 2.5rem; }\n:host /deep/ .links .socials a {\n    margin: 0 1rem;\n    text-decoration: none;\n    font-size: 1rem;\n    vertical-align: middle; }\n:host /deep/ .links .socials a.with-icon {\n      font-size: 2rem; }\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/auth-block/auth-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbAuthBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EbAuthBlockComponent = /** @class */ (function () {
    function EbAuthBlockComponent() {
    }
    EbAuthBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-eb-auth-block',
            styles: [__webpack_require__("./src/app/@theme/components/auth/auth-block/auth-block.component.scss")],
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], EbAuthBlockComponent);
    return EbAuthBlockComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/auth.component.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ {\n  /* custom below */ }\n  :host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n    padding: 2.5rem; }\n  :host /deep/ nb-card {\n    height: calc(100vh - 2 * 2.5rem); }\n  :host /deep/ nb-card {\n    margin: 0; }\n  :host /deep/ .flex-centered {\n    margin: auto; }\n  :host /deep/ nb-card-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  @media (max-width: 550px) {\n    :host /deep/ /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n      padding: 0; }\n    :host /deep/ nb-card {\n      border-radius: 0;\n      height: 100vh; } }\n  :host /deep/ h2.title {\n    font-weight: 400; }\n  :host /deep/ h2.title > span {\n    font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbAuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var EbAuthComponent = /** @class */ (function () {
    // showcase of how to use the onAuthenticationChange method
    function EbAuthComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.alive = true;
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_takeWhile__["a" /* takeWhile */])(function () { return _this.alive; }))
            .subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    EbAuthComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    EbAuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-eb-auth',
            styles: [__webpack_require__("./src/app/@theme/components/auth/auth.component.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-body>\n            <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n              <router-outlet></router-outlet>\n            </div>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_auth__["f" /* NbAuthService */]])
    ], EbAuthComponent);
    return EbAuthComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_component__ = __webpack_require__("./src/app/@theme/components/auth/auth.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_block_auth_block_component__ = __webpack_require__("./src/app/@theme/components/auth/auth-block/auth-block.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_block_auth_block_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/@theme/components/auth/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__("./src/app/@theme/components/auth/logout/logout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/@theme/components/auth/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a"]; });







/***/ }),

/***/ "./src/app/@theme/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ngx-eb-auth-block>\n  <h2 class=\"title\">Sign In to <span>Easy</span>Biz</h2>\n  <small class=\"form-text sub-title\">Hello! Please provide your email and your password.</small>\n\n  <form (ngSubmit)=\"login()\" #form=\"ngForm\" autocomplete=\"nope\">\n\n    <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n         class=\"alert alert-danger\" role=\"alert\">\n      <div><strong>Oh snap!</strong></div>\n      <div *ngFor=\"let error of errors\">{{ error }}</div>\n    </div>\n\n    <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n         class=\"alert alert-success\" role=\"alert\">\n      <div><strong>Hooray!</strong></div>\n      <div *ngFor=\"let message of messages\">{{ message }}</div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"input-email\" class=\"sr-only\">Email address</label>\n      <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" pattern=\".+@.+..+\"\n             class=\"form-control\" placeholder=\"Email address\" #email=\"ngModel\"\n             [class.form-control-danger]=\"email.invalid && email.dirty\" autofocus\n             [required]=\"getConfigValue('forms.validation.email.required')\">\n      <small class=\"form-text error\" *ngIf=\"email.invalid && email.dirty && email.errors?.required\">\n        Email is required!\n      </small>\n      <small class=\"form-text error\"\n             *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n        Email should be the real one!\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"input-password\" class=\"sr-only\">Password</label>\n      <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n             class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n             [class.form-control-danger]=\"password.invalid && password.touched\"\n             [required]=\"getConfigValue('forms.validation.password.required')\"\n             [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n             [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n      <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n        Password is required!\n      </small>\n      <small\n        class=\"form-text error\"\n        *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n        Password should contains\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </small>\n    </div>\n\n    <!--\n    <div class=\"form-group accept-group col-sm-12\">\n      <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\">Remember me</nb-checkbox>\n      <a class=\"forgot-password\" routerLink=\"../request-password\">Forgot Password?</a>\n    </div>\n    -->\n\n    <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"\n            [class.btn-pulse]=\"submitted\">\n      Sign In\n    </button>\n  </form>\n\n  <div class=\"links\">\n\n    <!--\n    <ng-container *ngIf=\"socialLinks && socialLinks.length > 0\">\n      <small class=\"form-text\">Or connect with:</small>\n\n      <div class=\"socials\">\n        <ng-container *ngFor=\"let socialLink of socialLinks\">\n          <a *ngIf=\"socialLink.link\"\n             [routerLink]=\"socialLink.link\"\n             [attr.target]=\"socialLink.target\"\n             [attr.class]=\"socialLink.icon\"\n             [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n          <a *ngIf=\"socialLink.url\"\n             [attr.href]=\"socialLink.url\"\n             [attr.target]=\"socialLink.target\"\n             [attr.class]=\"socialLink.icon\"\n             [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n        </ng-container>\n      </div>\n    </ng-container>\n    -->\n    <small class=\"form-text\">\n      Don't have an account? <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n    </small>\n  </div>\n</ngx-eb-auth-block>\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_auth_helpers__ = __webpack_require__("./node_modules/@nebular/auth/helpers.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var EbLoginComponent = /** @class */ (function () {
    function EbLoginComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.provider = this.getConfigValue('forms.login.provider');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    EbLoginComponent.prototype.login = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.authenticate(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    EbLoginComponent.prototype.getConfigValue = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__nebular_auth_helpers__["b" /* getDeepFromObject */])(this.config, key, null);
    };
    EbLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-eb-login',
            template: __webpack_require__("./src/app/@theme/components/auth/login/login.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["a" /* NB_AUTH_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["f" /* NbAuthService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], EbLoginComponent);
    return EbLoginComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbLogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_auth_helpers__ = __webpack_require__("./node_modules/@nebular/auth/helpers.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var EbLogoutComponent = /** @class */ (function () {
    function EbLogoutComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.provider = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.provider = this.getConfigValue('forms.logout.provider');
    }
    EbLogoutComponent.prototype.ngOnInit = function () {
        this.logout(this.provider);
    };
    EbLogoutComponent.prototype.logout = function (provider) {
        var _this = this;
        this.service.logout(provider).subscribe(function (result) {
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    EbLogoutComponent.prototype.getConfigValue = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__nebular_auth_helpers__["b" /* getDeepFromObject */])(this.config, key, null);
    };
    EbLogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-eb-logout',
            template: "\n    <div>Logging out, please wait...</div>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["a" /* NB_AUTH_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["f" /* NbAuthService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], EbLogoutComponent);
    return EbLogoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-eb-auth-block>\n  <h2 class=\"title\">Sign Up to <span>Easy</span>Biz</h2>\n  <form (ngSubmit)=\"register()\" #form=\"ngForm\">\n\n    <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n         class=\"alert alert-danger\" role=\"alert\">\n      <div><strong>Oh snap!</strong></div>\n      <div *ngFor=\"let error of errors\">{{ error }}</div>\n    </div>\n    <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n         class=\"alert alert-success\" role=\"alert\">\n      <div><strong>Hooray!</strong></div>\n      <div *ngFor=\"let message of messages\">{{ message }}</div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"input-firstname\" class=\"sr-only\">First name</label>\n      <input name=\"firstname\" [(ngModel)]=\"user.firstname\" id=\"input-firstname\" #firstname=\"ngModel\"\n             class=\"form-control\" placeholder=\"First name\"\n             [class.form-control-danger]=\"firstname.invalid && firstname.touched\"\n             [required]=\"getConfigValue('forms.validation.firstname.required')\"\n             [minlength]=\"getConfigValue('forms.validation.firstname.minLength')\"\n             [maxlength]=\"getConfigValue('forms.validation.firstname.maxLength')\"\n             autofocus>\n      <small class=\"form-text error\" *ngIf=\"firstname.invalid && firstname.touched && firstname.errors?.required\">\n        First name is required!\n      </small>\n      <small\n        class=\"form-text error\"\n        *ngIf=\"firstname.invalid && firstname.touched && (firstname.errors?.minlength || firstname.errors?.maxlength)\">\n        First name should contains\n        from {{getConfigValue('forms.validation.firstname.minLength')}}\n        to {{getConfigValue('forms.validation.firstname.maxLength')}}\n        characters\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"input-lastname\" class=\"sr-only\">Last name</label>\n      <input name=\"lastname\" [(ngModel)]=\"user.lastname\" id=\"input-lastname\" #lastname=\"ngModel\"\n             class=\"form-control\" placeholder=\"Last name\"\n             [class.form-control-danger]=\"lastname.invalid && lastname.touched\"\n             [required]=\"getConfigValue('forms.validation.lastname.required')\"\n             [minlength]=\"getConfigValue('forms.validation.lastname.minLength')\"\n             [maxlength]=\"getConfigValue('forms.validation.lastname.maxLength')\"\n             autofocus>\n      <small class=\"form-text error\" *ngIf=\"lastname.invalid && lastname.touched && lastname.errors?.required\">\n        Last name is required!\n      </small>\n      <small\n        class=\"form-text error\"\n        *ngIf=\"lastname.invalid && lastname.touched && (lastname.errors?.minlength || lastname.errors?.maxlength)\">\n        Last name should contains\n        from {{getConfigValue('forms.validation.lastname.minLength')}}\n        to {{getConfigValue('forms.validation.lastname.maxLength')}}\n        characters\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"input-username\" class=\"sr-only\">Username</label>\n      <input name=\"username\" [(ngModel)]=\"user.username\" id=\"input-username\" #username=\"ngModel\"\n             class=\"form-control\" placeholder=\"Username\"\n             [class.form-control-danger]=\"username.invalid && username.touched\"\n             [required]=\"getConfigValue('forms.validation.username.required')\"\n             [minlength]=\"getConfigValue('forms.validation.username.minLength')\"\n             [maxlength]=\"getConfigValue('forms.validation.username.maxLength')\"\n             autofocus>\n      <small class=\"form-text error\" *ngIf=\"username.invalid && username.touched && username.errors?.required\">\n        Last name is required!\n      </small>\n      <small\n        class=\"form-text error\"\n        *ngIf=\"username.invalid && username.touched && (username.errors?.minlength || username.errors?.maxlength)\">\n        Username should contains\n        from {{getConfigValue('forms.validation.username.minLength')}}\n        to {{getConfigValue('forms.validation.username.maxLength')}}\n        characters\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"input-email\" class=\"sr-only\">Email address</label>\n      <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" #email=\"ngModel\" (keyup)=\"onMailChanged($event, email.errors)\"\n             class=\"form-control\" placeholder=\"Email address\" pattern=\".+@.+..+\"\n             [class.form-control-danger]=\"(email.invalid && email.touched) || emailIsTaken\"\n             [required]=\"getConfigValue('forms.validation.email.required')\"\n      >\n      <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n        Email is required!\n      </small>\n      <small class=\"form-text error\"\n             *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n        Please enter a valid email format!\n      </small>\n      <small class=\"form-text error\"\n             *ngIf=\"!email.errors && emailIsTaken\">\n        Email already taken! Please enter another email!\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"input-password\" class=\"sr-only\">Password</label>\n      <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n             class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n             [class.form-control-danger]=\"password.invalid && password.touched\"\n             [required]=\"getConfigValue('forms.validation.password.required')\"\n             [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n             [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n      <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n        Password is required!\n      </small>\n      <small\n        class=\"form-text error\"\n        *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n        Password should contains\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"input-re-password\" class=\"sr-only\">Repeat password</label>\n      <input\n        name=\"rePass\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\"\n        class=\"form-control\" placeholder=\"Confirm Password\" #rePass=\"ngModel\"\n        [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\"\n        [required]=\"getConfigValue('forms.validation.password.required')\">\n      <small class=\"form-text error\"\n             *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\n        Password confirmation is required!\n      </small>\n      <small\n        class=\"form-text error\"\n        *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </small>\n    </div>\n\n    <div class=\"form-group accept-group col-sm-12\" *ngIf=\"getConfigValue('forms.register.terms')\">\n      <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n        Agree to <a routerLink=\"/tac\"><strong>Terms & Conditions</strong></a>\n      </nb-checkbox>\n    </div>\n\n    <button [disabled]=\"submitted || !form.valid || emailIsTaken\" class=\"btn btn-block btn-hero-success\"\n            [class.btn-pulse]=\"submitted\">\n      Register\n    </button>\n  </form>\n\n  <div class=\"links\">\n\n    <ng-container *ngIf=\"socialLinks && socialLinks.length > 0\">\n      <small class=\"form-text\">Or connect with:</small>\n\n      <div class=\"socials\">\n        <ng-container *ngFor=\"let socialLink of socialLinks\">\n          <a *ngIf=\"socialLink.link\"\n             [routerLink]=\"socialLink.link\"\n             [attr.target]=\"socialLink.target\"\n             [attr.class]=\"socialLink.icon\"\n             [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n          <a *ngIf=\"socialLink.url\"\n             [attr.href]=\"socialLink.url\"\n             [attr.target]=\"socialLink.target\"\n             [attr.class]=\"socialLink.icon\"\n             [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n        </ng-container>\n      </div>\n    </ng-container>\n\n    <small class=\"form-text\">\n      Already have an account? <a routerLink=\"../login\"><strong>Sign in</strong></a>\n    </small>\n  </div>\n</ngx-eb-auth-block>\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .title {\n  margin-bottom: 2rem; }\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_auth_helpers__ = __webpack_require__("./node_modules/@nebular/auth/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_async_email_validator_async_email_validator__ = __webpack_require__("./src/app/@theme/providers/async-email-validator/async-email-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_models__ = __webpack_require__("./src/models/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












var EbRegisterComponent = /** @class */ (function () {
    function EbRegisterComponent(service, config, router, route, asyncEmailValidation) {
        if (config === void 0) { config = {}; }
        var _this = this;
        this.service = service;
        this.config = config;
        this.router = router;
        this.route = route;
        this.asyncEmailValidation = asyncEmailValidation;
        this.redirectDelay = 0;
        this.asyncEmail = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_models__["e" /* User */]();
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.provider = this.getConfigValue('forms.register.provider');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.asyncEmail
            .debounceTime(500) // wait 700ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(function (email) { return _this.asyncEmailValidation.checkIfMailTaken(email).then(function (isTaken) {
            isTaken ? _this.emailIsTaken = true : _this.emailIsTaken = false;
        }); });
    }
    EbRegisterComponent.prototype.register = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.register(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    EbRegisterComponent.prototype.getConfigValue = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__nebular_auth_helpers__["b" /* getDeepFromObject */])(this.config, key, null);
    };
    EbRegisterComponent.prototype.onMailChanged = function (event, emailErr) {
        !emailErr ? this.asyncEmail.next(event.target.value) : null;
    };
    EbRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-eb-register',
            styles: [__webpack_require__("./src/app/@theme/components/auth/register/register.component.scss")],
            template: __webpack_require__("./src/app/@theme/components/auth/register/register.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["a" /* NB_AUTH_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["f" /* NbAuthService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__providers_async_email_validator_async_email_validator__["a" /* AsyncEmailValidatorProvider */]])
    ], EbRegisterComponent);
    return EbRegisterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        return this.auth.getToken()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["f" /* switchMap */])(function (token) {
            if (token.isValid()) {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Bearer " + token.getValue(),
                    },
                });
            }
            return next.handle(request);
        }));
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_auth__["f" /* NbAuthService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n:host-context(.nb-theme-default) .socials {\n    font-size: 2rem; }\n:host-context(.nb-theme-default) .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n:host-context(.nb-theme-default) .socials a:hover {\n        color: #2a2a2a; }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-default) .socials {\n      font-size: 1.5rem; } }\n:host-context(.nb-theme-cosmic) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n:host-context(.nb-theme-cosmic) .socials {\n    font-size: 2rem; }\n:host-context(.nb-theme-cosmic) .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n:host-context(.nb-theme-cosmic) .socials a:hover {\n        color: #ffffff; }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-cosmic) .socials {\n      font-size: 1.5rem; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-footer',
            styles: [__webpack_require__("./src/app/@theme/components/footer/footer.component.scss")],
            template: "\n    <span class=\"created-by\">Created by AIM17 2018</span>\n    <!--<div class=\"socials\">\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-github\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-facebook\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-twitter\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-linkedin\"></a>\n    </div>-->\n  ",
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\"\n     [class.left]=\"position === 'normal'\"\n     [class.right]=\"position === 'inverse'\">\n  <div class=\"logo-containter\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"navigation\"><i class=\"nb-menu\"></i></a>\n    <div class=\"logo\"><a href=\"#\" (click)=\"goToHome()\"><img src=\"../../../../assets/easybizlogo.png\" alt=\"EasyBiz\" class=\"logo\"></a></div>\n  </div>\n\n</div>\n\n<div *ngIf=\"authenticated; else login\"\n     class=\"header-container\"\n     [class.right]=\"position === 'normal'\"\n     [class.left]=\"position === 'inverse'\">\n<nb-actions>\n  <!--<nb-action icon=\"nb-grid-b\" class=\"toggle-layout\" (click)=\"toggleSettings()\"></nb-action>-->\n  <nb-action *nbIsGranted=\"['view', 'profile']\">\n    <nb-user [nbContextMenu]=\"userMenu\" [name]=\"user?.email\"></nb-user>\n  </nb-action>\n</nb-actions>\n</div>\n\n<ng-template #login>\n<div class=\"header-container\"\n     [class.right]=\"position === 'normal'\"\n     [class.left]=\"position === 'inverse'\">\n  <a routerLink=\"/auth/login\">Sign In</a>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  /* custom */ }\n:host-context(.nb-theme-default) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n:host-context(.nb-theme-default) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n:host-context(.nb-theme-default) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n:host-context(.nb-theme-default) .control-item {\n    display: block; }\n:host-context(.nb-theme-default) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n:host-context(.nb-theme-default) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n:host-context(.nb-theme-default) .header-container .navigation i {\n        display: block; }\n:host-context(.nb-theme-default) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #ebeef2;\n      white-space: nowrap;\n      width: 200px; }\n:host-context(.nb-theme-default) .header-container .logo span {\n        font-weight: 400; }\n:host-context(.nb-theme-default) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n:host-context(.nb-theme-default) .toggle-layout /deep/ a i {\n      color: #40dc7e;\n      font-size: 2.25rem; }\n@media (max-width: 991.98px) {\n    :host-context(.nb-theme-default) {\n      /*\n    .control-item {\n      display: none;\n    }\n    */ }\n      :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n        border: none; }\n      :host-context(.nb-theme-default) .toggle-layout {\n        padding: 0; } }\n@media (max-width: 767.98px) {\n    :host-context(.nb-theme-default) nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-default) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-default) .right /deep/ {\n      display: none; } }\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  /* custom */ }\n:host-context(.nb-theme-cosmic) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n:host-context(.nb-theme-cosmic) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n:host-context(.nb-theme-cosmic) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n:host-context(.nb-theme-cosmic) .control-item {\n    display: block; }\n:host-context(.nb-theme-cosmic) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n:host-context(.nb-theme-cosmic) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n:host-context(.nb-theme-cosmic) .header-container .navigation i {\n        display: block; }\n:host-context(.nb-theme-cosmic) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #342e73;\n      white-space: nowrap;\n      width: 200px; }\n:host-context(.nb-theme-cosmic) .header-container .logo span {\n        font-weight: 400; }\n:host-context(.nb-theme-cosmic) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n:host-context(.nb-theme-cosmic) .toggle-layout /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem; }\n@media (max-width: 991.98px) {\n    :host-context(.nb-theme-cosmic) {\n      /*\n    .control-item {\n      display: none;\n    }\n    */ }\n      :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n        border: none; }\n      :host-context(.nb-theme-cosmic) .toggle-layout {\n        padding: 0; } }\n@media (max-width: 767.98px) {\n    :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-cosmic) .right /deep/ {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, analyticsService, authService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.analyticsService = analyticsService;
        this.authService = authService;
        this.position = 'normal';
        this.user = {};
        this.userMenu = [
            { title: 'Profile', data: 'user-details', link: '/user-details' },
            { title: 'Log out', data: 'logout', link: '/auth/logout' },
        ];
        this.authenticated = false;
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                _this.user = token.getPayload();
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.onItemClick().subscribe(function (event) {
            _this.onItemSelection(event.item.data);
        });
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    HeaderComponent.prototype.onItemSelection = function (item) {
        switch (item) {
            case 'logout': {
                this.authService.logout('email');
                break;
            }
            case 'profile': {
                break;
            }
            default: break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "position", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-header',
            styles: [__webpack_require__("./src/app/@theme/components/header/header.component.scss")],
            template: __webpack_require__("./src/app/@theme/components/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbSidebarService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["i" /* NbMenuService */],
            __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["f" /* NbAuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("./src/app/@theme/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__("./src/app/@theme/components/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_input_search_input_component__ = __webpack_require__("./src/app/@theme/components/search-input/search-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__search_input_search_input_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_settings_theme_settings_component__ = __webpack_require__("./src/app/@theme/components/theme-settings/theme-settings.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__theme_settings_theme_settings_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_switcher_theme_switcher_component__ = __webpack_require__("./src/app/@theme/components/theme-switcher/theme-switcher.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__theme_switcher_theme_switcher_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tac_tac_component__ = __webpack_require__("./src/app/@theme/components/tac/tac.component.ts");
/* unused harmony namespace reexport */








/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host i.control-icon::before {\n    font-size: 2.3rem; }\n  :host i.control-icon:hover {\n    cursor: pointer; }\n  :host input {\n    border: none;\n    outline: none;\n    margin-left: 1rem;\n    width: 15rem;\n    -webkit-transition: width 0.2s ease;\n    transition: width 0.2s ease; }\n  :host input.hidden {\n      width: 0;\n      margin: 0; }\n  :host /deep/ search-input input {\n    background: transparent; }\n"

/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SearchInputComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SearchInputComponent.prototype, "search", void 0);
    SearchInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-search-input',
            styles: [__webpack_require__("./src/app/@theme/components/search-input/search-input.component.scss")],
            template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/tac/tac.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nb-card>\n    <nb-card-body>Hier kommen die Terms & Conditions hin</nb-card-body>\n  </nb-card>\n</div>\n"

/***/ }),

/***/ "./src/app/@theme/components/tac/tac.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbTacComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var EbTacComponent = /** @class */ (function () {
    function EbTacComponent() {
    }
    EbTacComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-eb-tac',
            template: __webpack_require__("./src/app/@theme/components/tac/tac.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], EbTacComponent);
    return EbTacComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) h6 {\n  margin-bottom: 0.5rem; }\n:host-context(.nb-theme-default) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n:host-context(.nb-theme-default) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a4abb3; }\n:host-context(.nb-theme-default) .settings-row a.selected {\n      color: #40dc7e; }\n:host-context(.nb-theme-cosmic) h6 {\n  margin-bottom: 0.5rem; }\n:host-context(.nb-theme-cosmic) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n:host-context(.nb-theme-cosmic) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00d977; }\n:host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00f9a6; }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_state_service__ = __webpack_require__("./src/app/@core/data/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeSettingsComponent = /** @class */ (function () {
    function ThemeSettingsComponent(stateService) {
        var _this = this;
        this.stateService = stateService;
        this.layouts = [];
        this.sidebars = [];
        this.stateService.getLayoutStates()
            .subscribe(function (layouts) { return _this.layouts = layouts; });
        this.stateService.getSidebarStates()
            .subscribe(function (sidebars) { return _this.sidebars = sidebars; });
    }
    ThemeSettingsComponent.prototype.layoutSelect = function (layout) {
        this.layouts = this.layouts.map(function (l) {
            l.selected = false;
            return l;
        });
        layout.selected = true;
        this.stateService.setLayoutState(layout);
        return false;
    };
    ThemeSettingsComponent.prototype.sidebarSelect = function (sidebars) {
        this.sidebars = this.sidebars.map(function (s) {
            s.selected = false;
            return s;
        });
        sidebars.selected = true;
        this.stateService.setSidebarState(sidebars);
        return false;
    };
    ThemeSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-theme-settings',
            styles: [__webpack_require__("./src/app/@theme/components/theme-settings/theme-settings.component.scss")],
            template: "\n    <h6>LAYOUTS</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let layout of layouts\"\n         href=\"#\"\n         [class.selected]=\"layout.selected\"\n         [attr.title]=\"layout.name\"\n         (click)=\"layoutSelect(layout)\">\n        <i [attr.class]=\"layout.icon\"></i>\n      </a>\n    </div>\n    <h6>SIDEBAR</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let sidebar of sidebars\"\n         href=\"#\"\n         [class.selected]=\"sidebar.selected\"\n         [attr.title]=\"sidebar.name\"\n         (click)=\"sidebarSelect(sidebar)\">\n        <i [attr.class]=\"sidebar.icon\"></i>\n      </a>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_state_service__["a" /* StateService */]])
    ], ThemeSettingsComponent);
    return ThemeSettingsComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n:host-context(.nb-theme-default) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n:host-context(.nb-theme-default) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      -webkit-transition: opacity 0.3s ease;\n      transition: opacity 0.3s ease; }\n:host-context(.nb-theme-default) .theme-switch > span.light {\n        color: #4b4b4b;\n        padding-right: 10px; }\n:host-context(.nb-theme-default) .theme-switch > span.cosmic {\n        color: #a4abb3;\n        padding-left: 10px; }\n:host-context(.nb-theme-default) .theme-switch > span:active {\n        opacity: 0.78; }\n:host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n:host-context(.nb-theme-default) .switch input {\n      display: none; }\n:host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n:host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #ebeff5; }\n:host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #40dc7e;\n      -webkit-transition: 0.2s;\n      transition: 0.2s;\n      -webkit-box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4);\n              box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n:host-context(.nb-theme-cosmic) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n:host-context(.nb-theme-cosmic) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      -webkit-transition: opacity 0.3s ease;\n      transition: opacity 0.3s ease; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #d1d1ff;\n        padding-right: 10px; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #a1a1e5;\n        padding-left: 10px; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #ffffff; }\n:host-context(.nb-theme-cosmic) .theme-switch > span:active {\n        opacity: 0.78; }\n:host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n:host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n:host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n:host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n:host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #00d977;\n      -webkit-transition: 0.2s;\n      transition: 0.2s;\n      -webkit-box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n              box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: -webkit-gradient(linear, left top, right top, from(#ad59ff), to(#7659ff));\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSwitcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeSwitcherComponent = /** @class */ (function () {
    function ThemeSwitcherComponent(themeService, analyticsService) {
        this.themeService = themeService;
        this.analyticsService = analyticsService;
    }
    ThemeSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeService.getJsTheme()
            .subscribe(function (theme) { return _this.theme = theme; });
    };
    ThemeSwitcherComponent.prototype.toggleTheme = function (theme) {
        var boolTheme = this.boolToTheme(theme);
        this.themeService.changeTheme(boolTheme);
        this.analyticsService.trackEvent('switchTheme');
    };
    ThemeSwitcherComponent.prototype.currentBoolTheme = function () {
        return this.themeToBool(this.theme);
    };
    ThemeSwitcherComponent.prototype.themeToBool = function (theme) {
        return theme.name === 'cosmic';
    };
    ThemeSwitcherComponent.prototype.boolToTheme = function (theme) {
        return theme ? 'cosmic' : 'default';
    };
    ThemeSwitcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-theme-switcher',
            styles: [__webpack_require__("./src/app/@theme/components/theme-switcher/theme-switcher.component.scss")],
            template: "\n    <label class=\"theme-switch\">\n      <span class=\"light\">Light</span>\n      <div class=\"switch\">\n        <input type=\"checkbox\" [checked]=\"currentBoolTheme()\" (change)=\"toggleTheme(theme.checked)\" #theme>\n        <span class=\"slider\"></span>\n      </div>\n      <span class=\"cosmic\">Cosmic</span>\n    </label>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["r" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__["a" /* AnalyticsService */]])
    ], ThemeSwitcherComponent);
    return ThemeSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__ = __webpack_require__("./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__ = __webpack_require__("./src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__ = __webpack_require__("./src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_sample_layout__ = __webpack_require__("./src/app/@theme/layouts/sample/sample.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__sample_sample_layout__["a"]; });






/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneColumnLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var OneColumnLayoutComponent = /** @class */ (function () {
    function OneColumnLayoutComponent() {
    }
    OneColumnLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-one-column-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/one-column/one-column.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
        })
    ], OneColumnLayoutComponent);
    return OneColumnLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__ = __webpack_require__("./src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe(function (layout) { return _this.layout = layout; });
        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .withLatestFrom(this.themeService.onMediaQueryChange())
            .delay(20)
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
    }
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    };
    SampleLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-sample-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/sample/sample.layout.scss")],
            template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'left' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [right]=\"sidebar.id === 'right'\">\n        <!--<nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>-->\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column left class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column right class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n      <nb-sidebar class=\"settings-sidebar\"\n                   tag=\"settings-sidebar\"\n                   state=\"collapsed\"\n                   fixed\n                   [right]=\"sidebar.id !== 'right'\">\n        <ngx-theme-settings></ngx-theme-settings>\n      </nb-sidebar>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["i" /* NbMenuService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["r" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["g" /* NbMediaBreakpointsService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbSidebarService */]])
    ], SampleLayoutComponent);
    return SampleLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeColumnsLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var ThreeColumnsLayoutComponent = /** @class */ (function () {
    function ThreeColumnsLayoutComponent() {
    }
    ThreeColumnsLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-three-columns-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/three-columns/three-columns.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
        })
    ], ThreeColumnsLayoutComponent);
    return ThreeColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoColumnsLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var TwoColumnsLayoutComponent = /** @class */ (function () {
    function TwoColumnsLayoutComponent() {
    }
    TwoColumnsLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-two-columns-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/two-columns/two-columns.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
        })
    ], TwoColumnsLayoutComponent);
    return TwoColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__ = __webpack_require__("./src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plural_pipe__ = __webpack_require__("./src/app/@theme/pipes/plural.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__plural_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__round_pipe__ = __webpack_require__("./src/app/@theme/pipes/round.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__round_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timing_pipe__ = __webpack_require__("./src/app/@theme/pipes/timing.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__timing_pipe__["a"]; });






/***/ }),

/***/ "./src/app/@theme/pipes/plural.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/timing.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "./src/app/@theme/providers/async-email-validator/async-email-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncEmailValidatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_server_serverconfig__ = __webpack_require__("./src/app/@theme/providers/backend-server/serverconfig.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsyncEmailValidatorProvider = /** @class */ (function () {
    function AsyncEmailValidatorProvider(http, serverConfig) {
        var _this = this;
        this.http = http;
        this.serverConfig = serverConfig;
        this.checkIfMailTaken = function (email) {
            return _this.http.post(_this.serverConfig.checkIfMailTaken, { email: email }, {})
                .toPromise()
                .then(function (res) { return res.isTaken; });
        };
    }
    AsyncEmailValidatorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__backend_server_serverconfig__["a" /* ServerConfigProvider */]])
    ], AsyncEmailValidatorProvider);
    return AsyncEmailValidatorProvider;
}());



/***/ }),

/***/ "./src/app/@theme/providers/auth/email-pass-auth.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbEmailPassAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_catchError__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var EbEmailPassAuthProvider = /** @class */ (function (_super) {
    __extends(EbEmailPassAuthProvider, _super);
    function EbEmailPassAuthProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EbEmailPassAuthProvider.prototype.register = function (data) {
        var _this = this;
        var method = this.getConfigValue('register.method');
        var url = this.getActionEndpoint('register');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (res) {
            if (_this.getConfigValue('register.alwaysFail')) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), 
        // this.validateToken('register'),
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_5__nebular_auth__["e" /* NbAuthResult */](true, res, _this.getConfigValue('register.redirect.success'), [], _this.getConfigValue('messages.getter')('register', res));
            // this.getConfigValue('token.getter')('register', res));
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_catchError__["a" /* catchError */])(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                errors = _this.getConfigValue('errors.getter')('register', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__nebular_auth__["e" /* NbAuthResult */](false, res, _this.getConfigValue('register.redirect.failure'), errors));
        }));
    };
    EbEmailPassAuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], EbEmailPassAuthProvider);
    return EbEmailPassAuthProvider;
}(__WEBPACK_IMPORTED_MODULE_5__nebular_auth__["h" /* NbEmailPassAuthProvider */]));



/***/ }),

/***/ "./src/app/@theme/providers/backend-server/gateway.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatewayProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serverconfig__ = __webpack_require__("./src/app/@theme/providers/backend-server/serverconfig.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GatewayProvider = /** @class */ (function () {
    function GatewayProvider(http, serverConfig) {
        this.http = http;
        this.serverConfig = serverConfig;
    }
    /**
     * EXAMPLE: Here we can define all methods which are connecting the frontend to the backend
     * i.e. => getAllProcesses or saveNewProcess or searchForProcess etc...
     */
    /*getAllProcesses = (): Promise<Array<any>> =>
      this.http.get<Array<any>>(null, {})
        .toPromise()
        .then(processes => processes);
    */
    // gets the current user
    GatewayProvider.prototype.getUser = function () {
        return this.http.get(this.serverConfig.getUser)
            .toPromise();
    };
    GatewayProvider.prototype.createProcess = function (process) {
        return this.http.post(this.serverConfig.createProcess, process).toPromise();
    };
    GatewayProvider.prototype.uploadOWLModel = function (processId, owlFile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */]();
        headers.append('Content-Type', 'multipart/form-data');
        var formData = new FormData();
        formData.append('file', owlFile);
        return this.http.post(this.serverConfig.uploadOWL + processId + '/uploadProcessFile', formData, { 'headers': headers }).toPromise();
    };
    GatewayProvider.prototype.getApprovedProcessesByUser = function () {
        return this.http.get(this.serverConfig.getApprovedProcessesByUser)
            .toPromise();
    };
    GatewayProvider.prototype.getNotApprovedProcessesByUser = function () {
        return this.http.get(this.serverConfig.getNotApprovedProcessesByUser)
            .toPromise();
    };
    GatewayProvider.prototype.createNewOrganisation = function (organization) {
        return this.http.post(this.serverConfig.createOrganizaion, { 'organizationName': organization.organizationName, 'organizationDescription': organization.description })
            .toPromise();
    };
    GatewayProvider.prototype.getStoreProcesses = function () {
        return this.http.get(this.serverConfig.getStoreProcesses)
            .toPromise();
    };
    GatewayProvider.prototype.getStoreProcessRatings = function (processId) {
        return this.http.get(this.serverConfig.getStoreProcessRatings + '/' + processId)
            .toPromise();
    };
    GatewayProvider.prototype.postStoreProcessRatings = function (processId, rating) {
        var url = this.serverConfig.postStoreProcessRating + '/' + processId + '/add';
        this.http.post(url, rating).toPromise();
    };
    GatewayProvider.prototype.getUnapprovedStoreProcesses = function () {
        return this.http.get(this.serverConfig.getUnapprovedStoreProcesses)
            .toPromise();
    };
    GatewayProvider.prototype.getApprovedStoreProcesses = function () {
        return this.http.get(this.serverConfig.getApprovedProcesses)
            .toPromise();
    };
    GatewayProvider.prototype.postStoreProcessApproved = function (processId) {
        var url = this.serverConfig.postStoreProcessApproved + '/' + processId + '/approve';
        this.http.post(url, processId).toPromise();
    };
    GatewayProvider.prototype.postStoreProcessUnapproved = function (processId) {
        var url = this.serverConfig.postStoreProcessUnapproved + '/' + processId + '/unapprove';
        this.http.post(url, processId).toPromise();
    };
    GatewayProvider.prototype.getStoreProcessById = function (processId) {
        var url = this.serverConfig.getStoreProcessById + '/' + processId;
        return this.http.get(url)
            .toPromise();
    };
    GatewayProvider.prototype.postStoreProcessComment = function (comment, processId) {
        var url = this.serverConfig.postStoreProcessApproved + '/' + processId + '/updateApprovalComment';
        this.http.post(url, comment).toPromise();
    };
    // gets a process by its Id
    GatewayProvider.prototype.getProcessById = function (processId) {
        return this.http.get(this.serverConfig.getProcess + processId)
            .toPromise();
    };
    // adds a process to an organization
    GatewayProvider.prototype.addProcessToOrganization = function (processId, orgId, uid) {
        return this.http.post(this.serverConfig.getProcess + processId + '/buy', { 'orgaId': orgId, 'userId': uid })
            .toPromise();
    };
    // get all processes of an organization
    GatewayProvider.prototype.getProcessesByOrgId = function (orgId) {
        return this.http.get(this.serverConfig.getOrgProcesses + orgId)
            .toPromise();
    };
    GatewayProvider.prototype.getAverageRating = function (processId) {
        var url = this.serverConfig.getAverageRating + '/' + processId + '/getAverageAndCount';
        return this.http.get(url).toPromise();
    };
    GatewayProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__serverconfig__["a" /* ServerConfigProvider */]])
    ], GatewayProvider);
    return GatewayProvider;
}());



/***/ }),

/***/ "./src/app/@theme/providers/backend-server/serverconfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServerConfigProvider = /** @class */ (function () {
    function ServerConfigProvider() {
        this._host = 'http://localhost:10000/';
        this._checkIfMailTaken = this._host + "user/register/checkIfMailTaken/";
        this._getUser = this._host + "api/me/";
        this._getProcess = this._host + "api/store/process/";
        this._getOrgProcesses = this._host + "api/store/processes/byOrga/";
        this._getStoreProcesses = this._host + "api/store/processes";
        this._getOrPostStoreProcessRatings = this._host + "api/store/processRating";
        this._uploadOWL = this._host + "api/store/process/";
        this._createProcess = this._host + "api/store/process/create";
        this._getUserProcesses = this._host + "api/store/processes/byUser";
        this._getProcessById = this._host + "api/store/process/{processId}";
        this._getApprovedProcessesByUser = this._host + "api/store/processes/approved";
        this._getNotApprovedProcessesByUser = this._host + "api/store/processes/notApproved";
        this._getApprovedProcesses = this._host + "api/store/processes/approved";
        this._createOrganization = this._host + "api/organization";
        this._getOrgaProcesses = this._host + "api/store/processes/byOrga";
        this._getUnapprovedStoreProcesses = this._host + "api/store/processes/notApproved";
        this._postStoreProcessApproved = this._host + "api/store/process";
        this._postStoreProcessUnapproved = this._host + "api/store/process";
        this._getStoreProcessById = this._host + "api/store/process";
        this._postStoreProcessComment = this._host + "api/store/process";
        this._getAverageRating = this._host + "api/store/processRating";
    }
    Object.defineProperty(ServerConfigProvider.prototype, "checkIfMailTaken", {
        get: function () { return this._checkIfMailTaken; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getUser", {
        get: function () { return this._getUser; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getProcess", {
        get: function () { return this._getProcess; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getOrgProcesses", {
        get: function () { return this._getOrgProcesses; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getStoreProcesses", {
        get: function () { return this._getStoreProcesses; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getStoreProcessRatings", {
        get: function () { return this._getOrPostStoreProcessRatings; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "postStoreProcessRating", {
        get: function () { return this._getOrPostStoreProcessRatings; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "uploadOWL", {
        get: function () { return this._uploadOWL; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "createProcess", {
        get: function () { return this._createProcess; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getUserProcesses", {
        get: function () { return this._getUserProcesses; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getProcessById", {
        get: function () { return this._getProcessById; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getApprovedProcessesByUser", {
        get: function () { return this._getApprovedProcessesByUser; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getApprovedProcesses", {
        get: function () { return this._getApprovedProcesses; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getNotApprovedProcessesByUser", {
        get: function () { return this._getNotApprovedProcessesByUser; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "createOrganizaion", {
        get: function () { return this._createOrganization; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getOrgaProcesses", {
        get: function () { return this._getOrgaProcesses; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getUnapprovedStoreProcesses", {
        get: function () { return this._getUnapprovedStoreProcesses; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "postStoreProcessApproved", {
        get: function () { return this._postStoreProcessApproved; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "postStoreProcessUnapproved", {
        get: function () { return this._postStoreProcessUnapproved; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "getStoreProcessById", {
        get: function () { return this._getStoreProcessById; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConfigProvider.prototype, "postStoreProcessComment", {
        get: function () { return this._postStoreProcessComment; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerConfigProvider.prototype, "getAverageRating", {
        get: function () { return this._getAverageRating; },
        enumerable: true,
        configurable: true
    });
    ;
    ServerConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ServerConfigProvider);
    return ServerConfigProvider;
}());



/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nebular_security__ = __webpack_require__("./node_modules/@nebular/security/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("./src/app/@theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes__ = __webpack_require__("./src/app/@theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts__ = __webpack_require__("./src/app/@theme/layouts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_theme_default__ = __webpack_require__("./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_theme_cosmic__ = __webpack_require__("./src/app/@theme/styles/theme.cosmic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_auth__ = __webpack_require__("./src/app/@theme/components/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_email_pass_auth_provider__ = __webpack_require__("./src/app/@theme/providers/auth/email-pass-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tac_tac_component__ = __webpack_require__("./src/app/@theme/components/tac/tac.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_backend_server_gateway__ = __webpack_require__("./src/app/@theme/providers/backend-server/gateway.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_backend_server_serverconfig__ = __webpack_require__("./src/app/@theme/providers/backend-server/serverconfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_auth_token_interceptor__ = __webpack_require__("./src/app/@theme/components/auth/token.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var BASE_MODULES = [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */]];
var NB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["c" /* NbCardModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["f" /* NbLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["p" /* NbTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["k" /* NbRouteTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["h" /* NbMenuModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["s" /* NbUserModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["a" /* NbActionsModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["l" /* NbSearchModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["m" /* NbSidebarModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["d" /* NbCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["j" /* NbPopoverModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["e" /* NbContextMenuModule */],
    __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
    __WEBPACK_IMPORTED_MODULE_5__nebular_security__["c" /* NbSecurityModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_router__["d" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["b" /* NbBadgeModule */],
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__components__["e" /* ThemeSwitcherComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["b" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["c" /* SearchInputComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["d" /* ThemeSettingsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__layouts__["a" /* OneColumnLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_8__layouts__["b" /* SampleLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_8__layouts__["c" /* ThreeColumnsLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_8__layouts__["d" /* TwoColumnsLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_auth__["b" /* EbAuthComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_auth__["a" /* EbAuthBlockComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_auth__["c" /* EbLoginComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_auth__["e" /* EbRegisterComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_auth__["d" /* EbLogoutComponent */],
    __WEBPACK_IMPORTED_MODULE_14__components_tac_tac_component__["a" /* EbTacComponent */],
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_7__pipes__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_7__pipes__["b" /* PluralPipe */],
    __WEBPACK_IMPORTED_MODULE_7__pipes__["c" /* RoundPipe */],
    __WEBPACK_IMPORTED_MODULE_7__pipes__["d" /* TimingPipe */],
];
var NB_THEME_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_13__providers_auth_email_pass_auth_provider__["a" /* EbEmailPassAuthProvider */],
    __WEBPACK_IMPORTED_MODULE_15__providers_backend_server_gateway__["a" /* GatewayProvider */],
    __WEBPACK_IMPORTED_MODULE_16__providers_backend_server_serverconfig__["a" /* ServerConfigProvider */],
    [
        {
            provide: __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
            useClass: __WEBPACK_IMPORTED_MODULE_18__components_auth_token_interceptor__["a" /* TokenInterceptor */],
            multi: true,
        },
    ]
].concat(__WEBPACK_IMPORTED_MODULE_4__nebular_theme__["q" /* NbThemeModule */].forRoot({
    name: 'default',
}, [__WEBPACK_IMPORTED_MODULE_9__styles_theme_default__["a" /* DEFAULT_THEME */], __WEBPACK_IMPORTED_MODULE_10__styles_theme_cosmic__["a" /* COSMIC_THEME */]]).providers, __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["m" /* NbSidebarModule */].forRoot().providers, __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["h" /* NbMenuModule */].forRoot().providers);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule_1 = ThemeModule;
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    ThemeModule = ThemeModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: BASE_MODULES.concat(NB_MODULES),
            exports: BASE_MODULES.concat(NB_MODULES, COMPONENTS, PIPES),
            declarations: COMPONENTS.concat(PIPES),
        })
    ], ThemeModule);
    return ThemeModule;
    var ThemeModule_1;
}());



/***/ }),

/***/ "./src/app/allProcesses.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_models__ = __webpack_require__("./src/models/models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProcessesService = /** @class */ (function () {
    function ProcessesService(_authHttp, _user) {
        this._authHttp = _authHttp;
        this._user = _user;
        this.restApi = window.location.protocol + '//' + window.location.hostname + ':10000/api';
    }
    ProcessesService.prototype.getProcessModels = function () {
        return this._authHttp.get(this.restApi + '/processes/toStart?page=0');
    };
    ProcessesService.prototype.startProcess = function (pmId) {
        return this._authHttp.post(this.restApi + '/processes/startProcess', {
            'pmId': pmId,
            'startUserId': this._user.getUid(),
        });
    };
    ProcessesService.prototype.getAmountOfActiveProcesses = function () {
        return this._authHttp.get(this.restApi + '/processes/amountOfActiveProcesses');
    };
    ProcessesService.prototype.getAmountOfActiveProcessesForUser = function (userId) {
        return this._authHttp.get(this.restApi + '/processes/amountOfActiveProcessesPerUser/' + userId);
    };
    ProcessesService.prototype.getPossibleUsersForProcessModel = function (rules) {
        return this._authHttp.get(this.restApi + '/processes/users/rule/' + rules);
    };
    ProcessesService.prototype.getProcessState = function (piId) {
        return this._authHttp.get(this.restApi + '/processes/state/' + piId);
    };
    ProcessesService.prototype.getActiveProcesses = function () {
        return this._authHttp.get(this.restApi + '/processes/active?page=0');
    };
    ProcessesService.prototype.getTerminatedProcesses = function () {
        return this._authHttp.get(this.restApi + '/processes/finished?page=0');
    };
    ProcessesService.prototype.getActiveProcessesForUser = function () {
        return this._authHttp.get(this.restApi + '/processes/active/' + this._user.getUid() + '?page=0');
    };
    ProcessesService.prototype.getTerminatedProcessesForUser = function () {
        return this._authHttp.get(this.restApi + '/processes/finished/' + this._user.getUid() + '?page=0');
    };
    ProcessesService.prototype.getUserById = function (userId) {
        return this._authHttp.get(this.restApi + '/user/' + userId);
    };
    ProcessesService.prototype.stopProcess = function (piId) {
        return this._authHttp.post(this.restApi + '/processes/stop/' + piId, {});
    };
    ProcessesService.prototype.getProcessTasksForUser = function (userId) {
        if (!userId) {
            userId = this._user.getUid();
        }
        return this._authHttp.get(this.restApi + '/processes/tasks/' + userId);
    };
    ProcessesService.prototype.getTasksForProcessForUser = function (piId) {
        return this._authHttp.get(this.restApi + '/processes/task/' + piId + '/' + this._user.getUid());
    };
    ProcessesService.prototype.submitBusinessObjectsAndNextStateAndUserAssignments = function (piId, objectsAndStateAndUserAssignments) {
        return this._authHttp.post(this.restApi + '/processes/task/' + piId + '/' + this._user.getUid(), objectsAndStateAndUserAssignments);
    };
    ProcessesService.prototype.uploadOWLModel = function (body) {
        return this._authHttp.post(this.restApi + '/owlprocessmodel/', body);
    };
    ProcessesService.prototype.getRules = function () {
        return this._authHttp.get(this.restApi + '/rules/');
    };
    ProcessesService.prototype.getProcessesThatStartedHoursAgo = function (hoursBefore) {
        return this._authHttp.get(this.restApi + '/processes/count/started/' + hoursBefore);
    };
    ProcessesService.prototype.getProcessesThatStartedHoursAgoForUser = function (hoursBefore) {
        return this._authHttp.get(this.restApi + '/processes/count/started/' + hoursBefore + '/' + this._user.getUid());
    };
    ProcessesService.prototype.getProcessesThatFinishedHoursAgo = function (hoursBefore) {
        return this._authHttp.get(this.restApi + '/processes/count/finished/' + hoursBefore);
    };
    ProcessesService.prototype.getProcessesThatFinishedHoursAgoForUser = function (hoursBefore) {
        return this._authHttp.get(this.restApi + '/processes/count/finished/' + hoursBefore + '/' + this._user.getUid());
    };
    ProcessesService.prototype.getProcessesInState = function (state) {
        return this._authHttp.get(this.restApi + '/processes/count/' + state);
    };
    ProcessesService.prototype.getProcessesInStateForUser = function (state) {
        return this._authHttp.get(this.restApi + '/processes/count/' + state + '/' + this._user.getUid());
    };
    ProcessesService.prototype.importProcessModel = function (processModel) {
        return this._authHttp.post(this.restApi + '/import', processModel);
    };
    ProcessesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__models_models__["e" /* User */]])
    ], ProcessesService);
    return ProcessesService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__ = __webpack_require__("./src/app/@theme/components/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_components_tac_tac_component__ = __webpack_require__("./src/app/@theme/components/tac/tac.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { AuthGuard } from './auth-guard.service';


var routes = [
    { path: '',
        loadChildren: 'app/pages/pages.module#PagesModule',
    },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["b" /* EbAuthComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["c" /* EbLoginComponent */],
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["c" /* EbLoginComponent */],
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["e" /* EbRegisterComponent */],
            },
            {
                path: 'logout',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["d" /* EbLogoutComponent */],
            },
        ],
    },
    {
        path: 'tac',
        component: __WEBPACK_IMPORTED_MODULE_3__theme_components_tac_tac_component__["a" /* EbTacComponent */],
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes, config)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var AppComponent = /** @class */ (function () {
    function AppComponent(analytics, titleService) {
        this.analytics = analytics;
        this.titleService = titleService;
    }
    AppComponent.prototype.setTitle = function (title) {
        var completeTitle = title ? 'EasyBiz | ' + title : 'EasyBiz';
        this.titleService.setTitle(completeTitle);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.trackPageViews();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-app',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__["a" /* AnalyticsService */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/@core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nebular_security__ = __webpack_require__("./node_modules/@nebular/security/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__role_provider__ = __webpack_require__("./src/app/role.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__theme_providers_auth_email_pass_auth_provider__ = __webpack_require__("./src/app/@theme/providers/auth/email-pass-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__theme_providers_async_email_validator_async_email_validator__ = __webpack_require__("./src/app/@theme/providers/async-email-validator/async-email-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__theme_providers_backend_server_serverconfig__ = __webpack_require__("./src/app/@theme/providers/backend-server/serverconfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__evntLogger_service__ = __webpack_require__("./src/app/evntLogger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__allProcesses_service__ = __webpack_require__("./src/app/allProcesses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__models_models__ = __webpack_require__("./src/models/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__approval_auth_guard_service__ = __webpack_require__("./src/app/approval-auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__theme_theme_module__["a" /* ThemeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__nebular_auth__["d" /* NbAuthModule */].forRoot({
                    providers: {
                        email: {
                            service: __WEBPACK_IMPORTED_MODULE_15__theme_providers_auth_email_pass_auth_provider__["a" /* EbEmailPassAuthProvider */],
                            config: {
                                // baseEndpoint: 'http://localhost:10000',
                                login: {
                                    endpoint: 'http://localhost:10000/user/login',
                                    redirect: {
                                        success: 'dashboard',
                                    },
                                },
                                logout: {
                                    endpoint: '',
                                },
                                register: {
                                    endpoint: 'http://localhost:10000/user/register',
                                    redirect: {
                                        success: '/auth/login',
                                    },
                                },
                                token: {
                                    key: 'token',
                                },
                            },
                        },
                    },
                    // don't delete
                    forms: {
                        validation: {},
                    },
                }),
                __WEBPACK_IMPORTED_MODULE_12__nebular_security__["c" /* NbSecurityModule */].forRoot({
                    accessControl: {
                        USER: {
                            view: ['profile', 'processes', 'home'],
                        },
                        ORG_EMP: {
                            parent: 'USER',
                            view: 'org',
                        },
                        ORG_CEO: {
                            parent: 'ORG_EMP',
                            view: 'ceo_org',
                        },
                        SYS_ADMIN: {
                            parent: 'USER',
                            view: '*',
                            create: '*',
                            delete: '*',
                        },
                        SYS_APPROVER: {
                            parent: 'USER',
                            view: ['new_processes', 'approvals'],
                        },
                    },
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__theme_providers_async_email_validator_async_email_validator__["a" /* AsyncEmailValidatorProvider */],
                __WEBPACK_IMPORTED_MODULE_17__theme_providers_backend_server_serverconfig__["a" /* ServerConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_21__approval_auth_guard_service__["a" /* ApprovalAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_18__evntLogger_service__["a" /* EventLoggerService */],
                __WEBPACK_IMPORTED_MODULE_19__allProcesses_service__["a" /* ProcessesService */],
                __WEBPACK_IMPORTED_MODULE_13__role_provider__["a" /* RoleProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
                { provide: __WEBPACK_IMPORTED_MODULE_11__nebular_auth__["b" /* NB_AUTH_TOKEN_CLASS */], useValue: __WEBPACK_IMPORTED_MODULE_11__nebular_auth__["c" /* NbAuthJWTToken */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__nebular_security__["b" /* NbRoleProvider */], useClass: __WEBPACK_IMPORTED_MODULE_13__role_provider__["a" /* RoleProvider */] },
                { provide: __WEBPACK_IMPORTED_MODULE_20__models_models__["e" /* User */], useClass: __WEBPACK_IMPORTED_MODULE_20__models_models__["e" /* User */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/approval-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_providers_backend_server_gateway__ = __webpack_require__("./src/app/@theme/providers/backend-server/gateway.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApprovalAuthGuard = /** @class */ (function () {
    function ApprovalAuthGuard(authService, router, gateway) {
        this.authService = authService;
        this.router = router;
        this.gateway = gateway;
    }
    ApprovalAuthGuard.prototype.canActivate = function () {
        var _this = this;
        // only SYS_APPROVER are allowed to see approval page
        return this.authService.isAuthenticated()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (authenticated) {
            _this.gateway.getUser().then(function (user) {
                if (user.roles.find(function (role) { return role.name === 'SYS_APPROVER'; }) === undefined) {
                    _this.router.navigate(['home']);
                }
            });
        }));
    };
    ApprovalAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["f" /* NbAuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__theme_providers_backend_server_gateway__["a" /* GatewayProvider */]])
    ], ApprovalAuthGuard);
    return ApprovalAuthGuard;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['auth/login']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["f" /* NbAuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/evntLogger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventLoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {User} from '../models/models';
var EventLoggerService = /** @class */ (function () {
    function EventLoggerService(_authHttp /*, private _user: User*/) {
        this._authHttp = _authHttp; /*, private _user: User*/
        this.restApi = window.location.protocol + '//' + window.location.hostname + ':10000/ev';
    }
    EventLoggerService.prototype.getEventLog = function (pmId, subject) {
        return this._authHttp.get(this.restApi + '/eventlog/' + pmId + '/' + subject);
    };
    EventLoggerService.prototype.getEventLogDownloadLink = function (pmId, subject) {
        return this.restApi + '/eventlogCSV/' + pmId + '/' + subject;
    };
    EventLoggerService.prototype.manipulatePNML = function (pnmlFile, csvFile) {
        var data = {
            'pnmlContent': pnmlFile,
            'csvLog': csvFile,
        };
        var body = JSON.stringify(data);
        return this._authHttp.post(this.restApi + '/manipulatePNML/', body);
    };
    EventLoggerService.prototype.generateOWL = function (processModelName, pnmlFiles) {
        return this._authHttp.post(this.restApi + '/generateOWL/', { processModelName: processModelName, pnmlFiles: pnmlFiles });
    };
    EventLoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] /*, private _user: User*/])
    ], EventLoggerService);
    return EventLoggerService;
}());



/***/ }),

/***/ "./src/app/role.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleProvider = /** @class */ (function () {
    function RoleProvider(authService) {
        this.authService = authService;
    }
    RoleProvider.prototype.getRole = function () {
        return this.authService.onTokenChange()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__["a" /* map */])(function (token) {
            // temporary using first role
            // todo: implement proper role array utilization
            return token.isValid() ? token.getPayload()['roles'][0] : 'guest';
        }));
    };
    RoleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["f" /* NbAuthService */]])
    ], RoleProvider);
    return RoleProvider;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Process */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StoreProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StoreProcessRating; });
/* unused harmony export AverageRating */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Review; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Organization; });
/* unused harmony export Role */
/* unused harmony export Rule */
// Define all models (i.e. User JSON Structure or Process from process store strucutre as class)
var Process = /** @class */ (function () {
    function Process() {
    }
    return Process;
}());

var StoreProcess = /** @class */ (function () {
    function StoreProcess() {
    }
    return StoreProcess;
}());

var StoreProcessRating = /** @class */ (function () {
    function StoreProcessRating() {
    }
    return StoreProcessRating;
}());

var AverageRating = /** @class */ (function () {
    function AverageRating() {
    }
    return AverageRating;
}());

var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());

var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getUid = function () {
        return this.uid;
    };
    ;
    return User;
}());

var Organization = /** @class */ (function () {
    function Organization() {
    }
    return Organization;
}());

var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());

var Rule = /** @class */ (function () {
    function Rule() {
    }
    return Rule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map