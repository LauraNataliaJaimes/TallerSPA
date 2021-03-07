import { Router } from 'express'

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('I wuv u')); //Especifico la Ruta '/' y en res.send lo que quiero mostrar
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;