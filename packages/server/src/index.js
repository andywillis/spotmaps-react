import 'dotenv/config';

import { app, port, server } from './service/express';

import compileLibrary from './helpers/compileLibrary';

import routes from './routes/index';

import library from '../data/library' assert { type: 'json' };

const compiledLibrary = await compileLibrary(library);

app.get('/library', await routes.library(compiledLibrary));
app.get('*', routes.root());

server.listen(port, () => {
  console.log(`https server running on port ${port}`);
  console.log(`Which means you need to use https://localhost:${port}`);
});
