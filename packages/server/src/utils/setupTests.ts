import path = require('path');

void (async function () {
  await import('dotenv').then((mod) =>
    mod.config({
      path: path.resolve(__dirname, '../../../../.env.test.local'),
    }),
  );
})();
