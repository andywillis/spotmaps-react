import fs from 'fs';
import path, { dirname } from 'path';
import https from 'https';
import express from 'express';
import { fileURLToPath } from 'url';
import DraftLog from 'draftlog';

import 'dotenv/config';

DraftLog(console);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const key = fs.readFileSync(`${__dirname}/auth/key.pem`);
const cert = fs.readFileSync(`${__dirname}/auth/cert.pem`);

const options = { key, cert };

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());

const port = process.env.PORT || 4000;

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.json({ status: 'success' });
});
