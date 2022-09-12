import 'dotenv/config';
import { app, port, server } from './service/express';

import routes from './routes/index';

import library from '../data/library' assert { type: 'json' };

app.get('/library', await routes.library(library));
app.get('*', routes.root());

server.listen(port, () => {
  console.log(`https server running on port ${port}`);
  console.log(`Which means you need to use https://localhost:${port}`);
});
