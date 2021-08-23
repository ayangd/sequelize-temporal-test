import express from 'express';
import path from 'path';
import cors from 'cors';

import { sequelize } from './models';
import routes from './routes';

// Blocking, sync db first then open the server listener
(async () => {
    await sequelize.sync();

    const app = express();
    var corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true,
    };
    app.use(cors(corsOptions));

    app.use(express.json());

    app.use(routes());

    app.get(
        /^\/(?!api).*/,
        express.static(path.join(__dirname, '../../frontend/build'))
    );

    app.get('/api/test', (req, res) => {
        res.send('Yes');
    });

    const port = 8080;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
})();
