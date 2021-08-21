import express from 'express';
import path from 'path';

const app = express();

app.get(/^\/(?!api).*/, express.static(path.join(__dirname, '../../frontend/build')));

const port = 80;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
