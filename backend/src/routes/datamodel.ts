import { Router } from 'express';
import { create, get, getAll, remove, update } from '../controllers/datamodel';

function createRouter() {
    const router = Router();
    router.post('/', create);
    router.get('/', getAll);
    router.get('/:id', get);
    router.put('/:id', update);
    router.delete('/:id', remove);

    return router;
}

export default createRouter;
