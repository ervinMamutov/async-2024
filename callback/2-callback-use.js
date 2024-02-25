'use strict';

// synch operation

{
  const boxes = [{ count: 3 }, { count: 7 }, { count: 0 }];
  const goods = boxes.filter(({ count }) => count > 0);
  console.log({ goods });
}

// named callback
{
  const boxes = [{ count: 3 }, { count: 7 }, { count: 0 }];
  const notEmpty = ({ count }) => count > 0;
  const goods = boxes.filter(notEmpty);
  console.log({ goods });
}

// async callback
{
  const boxes = [{ count: 3 }, { count: 7 }, { count: 0 }];

  const timer = setInterval(() => {
    const next = boxes.shift();
    console.log(`Next element: ${next.count}`);
    if (boxes.length === 0) clearInterval(timer);
  }, 1000);
}

// in async I/O
{
  const fs = require('node:fs');
  fs.readFile('./1-callback.js', 'utf-8', (err, data) => {
    if (err) {
      // const error = new Error(err);
      console.error(err);
      return;
    }
    console.log({ lines: data.split('\n').length });
  });

  console.log('end');
}

// named async callback
{
  const fs = require('node:fs');

  const print = (file, err, data) => {
    console.log({ file, lines: data.split('\n').length });
  };

  const fileName = './1-callback.js';

  const callback = print.bind(null, fileName);

  fs.readFile(fileName, 'utf-8', callback);
}
