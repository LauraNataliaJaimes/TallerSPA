import { Router } from 'express';

import { indexController } from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index); //Especifico la Ruta '/' y en res.send lo que quiero mostrar
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;