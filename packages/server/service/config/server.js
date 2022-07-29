import fs from 'fs';
import dirname from '../../helpers/dirname';

const key = fs.readFileSync(`${dirname}/../auth/key.pem`);
const cert = fs.readFileSync(`${dirname}/../auth/cert.pem`);

export default { key, cert };
