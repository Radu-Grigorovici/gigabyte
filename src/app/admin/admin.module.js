"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var admin_component_1 = require("./adminComponent/admin.component");
var admin_menu_component_1 = require("./adminMenu/admin-menu.component");
var login_component_1 = require("./login/login.component");
var sign_up_component_1 = require("./signUp/sign-up.component");
var user_service_1 = require("./adminShared/user.service");
var AdminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        children: [
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'signup', component: sign_up_component_1.SignUpComponent },
            { path: '', component: admin_menu_component_1.AdminMenuComponent, canActivate: [user_service_1.UserService] }
        ]
    },
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(AdminRoutes)
            ],
            exports: [
                router_1.RouterModule
            ],
            declarations: [
                admin_component_1.AdminComponent,
                admin_menu_component_1.AdminMenuComponent,
                login_component_1.LoginComponent,
                sign_up_component_1.SignUpComponent
            ],
            providers: [
                user_service_1.UserService,
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map