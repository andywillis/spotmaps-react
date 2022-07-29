import path from 'path';
import express from 'express';
import https from 'https';
import http from 'http';
import compression from 'compression';

import dirname from '../helpers/dirname';
import serverOptions from './config/server';

const app = express();

app.use(express.static(path.join(dirname, '../../client/build')));
app.use(express.json());
app.use(compression());

const port = process.env.PORT || 4000;

const server = process.env.NODE_ENV === 'production'
  ? http.createServer(app)
  : https.createServer(serverOptions, app);

export { app, port, server };
