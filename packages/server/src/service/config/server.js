import fs from 'fs';
import rootname from '../../../rootname';

const key = fs.readFileSync(`${rootname}/auth/key.pem`);
const cert = fs.readFileSync(`${rootname}/auth/cert.pem`);

export default { key, cert };
