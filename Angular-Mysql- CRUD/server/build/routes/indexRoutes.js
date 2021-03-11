"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index); //Especifico la Ruta '/' y en res.send lo que quiero mostrar
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
