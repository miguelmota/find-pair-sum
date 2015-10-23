var test = require('tape');
var findPairSum = require('../find-pair-sum');

test('findPairSum', function (t) {
  'use strict';

  t.plan(9);

  t.deepEqual(findPairSum(), []);
  t.deepEqual(findPairSum(NaN), []);
  t.deepEqual(findPairSum(2, []), []);
  t.deepEqual(findPairSum({}), []);
  t.deepEqual(findPairSum([]), []);
  t.deepEqual(findPairSum([], 8), []);
  t.deepEqual(findPairSum([5,10,4,6,9,1], 8), []);
  t.deepEqual(findPairSum([5,10,3,4,6,9,9], 16),
              [
                [ { index: 4, value: 6 }, { index: 1, value: 10 } ]
              ]
  );
  t.deepEqual(findPairSum([3,5,10,3,4,2,8,4,5,6], 10),
              [
                [ { index: 6, value: 8 }, { index: 5, value: 2 } ],
                [ { index: 8, value: 5 }, { index: 1, value: 5 } ],
                [ { index: 9, value: 6 }, { index: 7, value: 4 } ]
              ]
  );
});
