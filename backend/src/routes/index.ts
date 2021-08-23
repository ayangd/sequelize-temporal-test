import { Router } from 'express';
import createDataModelRouter from './datamodel';

function createRouter() {
    const masterRouter = Router();
    masterRouter.use('/api/datamodel', createDataModelRouter());

    return masterRouter;
}

export default createRouter;
