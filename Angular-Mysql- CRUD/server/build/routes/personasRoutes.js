"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PersonasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('this muchhh')); //Especifico la Ruta '/' y en res.send lo que quiero mostrar
    }
}
const personasRoutes = new PersonasRoutes();
exports.default = personasRoutes.router;
