import 'dotenv/config';

import { app, port, server } from './service/express';

import routes from './routes/index';

import library from '../data/library/library' assert { type: 'json' };
import compiledLibrary from '../data/library/compiledLibrary' assert { type: 'json' };

app.get('/library', await routes.library(library));
app.get('/spotmap/:id', await routes.spotmap(compiledLibrary));
app.get('/ase/:title', await routes.ase(compiledLibrary));
app.get('*', routes.root());

server.listen(port, () => {
  console.log(`http server running on port ${port}`);
});
