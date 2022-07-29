import 'dotenv/config';
import { app, port, server } from './service/express';
import dirname from './helpers/dirname';

import routes from './routes/index'

import library from './data/library.json' assert { type: 'json' };

app.get('/library', routes.followings(library));
app.get('*', routes.root());

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
