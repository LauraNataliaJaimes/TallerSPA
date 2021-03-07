import { Router } from 'express'

class PersonasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('this muchhh')); //Especifico la Ruta '/' y en res.send lo que quiero mostrar
    }
}

const personasRoutes = new PersonasRoutes();
export default personasRoutes.router;