'use strict';

// synch operation

{
  const boxes = [{ count: 3 }, { count: 7 }, { count: 0 }];
  const goods = boxes.filter(({ count }) => count > 0);
  console.log({ goods });
}
