"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routerBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            console.log(target);
            console.log(target[key]);
            console.log(path);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, target[key]);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routerBinder(Methods_1.Methods.get);
exports.put = routerBinder(Methods_1.Methods.put);
exports.patch = routerBinder(Methods_1.Methods.patch);
exports.post = routerBinder(Methods_1.Methods.post);
exports.del = routerBinder(Methods_1.Methods.del);
