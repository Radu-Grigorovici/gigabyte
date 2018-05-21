"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent = __decorate([
        core_1.Component({
            selector: 'navi-bar',
            template: "\n                <div class=\"top-bar\">\n                    <div class=\"top-bar-title\">GigaByte Gaming Company</div>\n                    <div>\n                        <ul class=\"menu\">\n                            <li class=\"nav-menu\"><a [routerLink]=\"['/admin']\">Admin Area</a></li>\n                        </ul>\n                    </div>\n                </div>\n    ",
            styleUrls: ['./navbar.component.css']
        })
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=navbar.component.js.map