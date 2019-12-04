"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email) {
        res.send(email.toUpperCase());
    }
    else {
        res.send("you must provide an email");
    }
});
