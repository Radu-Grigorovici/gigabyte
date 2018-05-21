"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase = require("firebase");
var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
        this.userLoggedIn = false;
        firebase.initializeApp({
            apiKey: "AIzaSyAJZ94g_Gn5R-TNzgVUjIdrjw1QzQiVg64",
            authDomain: "gigabytegames-2824c.firebaseapp.com",
            databaseURL: "https://gigabytegames-2824c.firebaseio.com",
            projectId: "gigabytegames-2824c",
            storageBucket: "gigabytegames-2824c.appspot.com",
            messagingSenderId: "866058336830"
        });
    }
    UserService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.verifyLogin(url);
    };
    UserService.prototype.verifyLogin = function (url) {
        if (this.userLoggedIn) {
            return true;
        }
        this.router.navigate(['/admin/login']);
        return false;
    };
    UserService.prototype.register = function (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
            alert(error.message + " Please Try Again!");
        });
    };
    UserService.prototype.verifyUser = function () {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {
            alert("Welcome " + this.authUser.email);
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/admin']);
        }
    };
    UserService.prototype.login = function (loginEmail, loginPassword) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .catch(function (error) {
            alert(error.message + " Unable to login. Try again!");
        });
    };
    UserService.prototype.logout = function () {
        this.userLoggedIn = false;
        firebase.auth().signOut().then(function () {
            alert("Logged Out!");
        }, function (error) {
            alert(error.message + " Unable to logout. Try again!");
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map