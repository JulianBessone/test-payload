"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
var isLoggedIn = function (_a) {
    var user = _a.req.user;
    // Return true if user is logged in, false if not
    return Boolean(user);
};
exports.isLoggedIn = isLoggedIn;
