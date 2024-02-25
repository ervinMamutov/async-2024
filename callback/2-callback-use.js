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
