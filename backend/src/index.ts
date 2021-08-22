import express from 'express';
import path from 'path';

const app = express();

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
