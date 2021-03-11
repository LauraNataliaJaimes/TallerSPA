import { Request, Response } from 'express';

import pool from '../database';

class PersonasController {

    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM crud_persona', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('SELECT * FROM crud_persona WHERE id = ?', [id], (error, result) => {
            if (error) throw error;
            res.json(result);
        });
    }

    public async create(req: Request, res: Response): Promise<void> {
        /* const result = await pool.query('INSERT INTO persona set ?', [req.body]); */
        await pool.query('INSERT INTO crud_persona SET ?', req.body, (error, result) => {
            if (error) throw error;
    
            res.json({ message: 'Persona Saved' });
        }); 
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM crud_persona WHERE id = ?', [id]);
        res.json({text:'La persona se ha Eliminado '});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE crud_persona SET ? WHERE id = ?', [req.body, id]);
        res.json({text:'La persona se ha actulizado '});
    }
}

const personasController = new PersonasController();

export default personasController;