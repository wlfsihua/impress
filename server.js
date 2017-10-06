'use strict';

const fs = require('fs');

fs.access('./tests', (err) => {
  require(err ? 'impress' : './lib/impress');
  impress.start();
});
