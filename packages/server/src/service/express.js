import path from 'path';
import express from 'express';
import http from 'http';
import helmet from 'helmet';
import compression from 'compression';

import rootname from '../../rootname';

const app = express();

app.use(express.static(path.join(rootname, '../client/build')));
app.use(helmet());
app.use(express.json());
app.use(compression());

const port = process.env.PORT || 4000;

const server = http.createServer(app);

export { app, port, server };
