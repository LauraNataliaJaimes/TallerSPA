"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('I wuv u')); //Especifico la Ruta '/' y en res.send lo que quiero mostrar
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
