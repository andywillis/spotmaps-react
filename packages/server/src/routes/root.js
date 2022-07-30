import path from 'path';

import rootname from '../../rootname';

export default function root() {
  return function (req, res) {
    res.sendFile(path.join(rootname, '../client/build', 'index.html'));
  };
}
