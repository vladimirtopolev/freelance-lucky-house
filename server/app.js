
import express from 'express';
import path from 'path';

import bootExpress from './boot/express';
import bootRoutes from './routes';

const app = express();

bootExpress(app, __dirname);
bootRoutes(app);


/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/

export default app;