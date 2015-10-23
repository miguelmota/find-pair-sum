# find-pair-sum

> Find all the pair of numbers that when summed equal the target value in O(N) time complexity.

# Install

```bash
npm install find-pair-sum
```

```bash
bower install find-pair-sum
```

# Usage

```javascript
var findPairSum = require('find-pair-sum');

console.log(findPairSum([5,10,3,4,6,9,9], 16));
/*
  [
    [ { index: 4, value: 6 }, { index: 1, value: 10 } ]
  ]
*/

console.log(findPairSum([3,5,10,3,4,2,8,4,5,6], 10));
/*
[
  [ { index: 6, value: 8 }, { index: 5, value: 2 } ],
  [ { index: 8, value: 5 }, { index: 1, value: 5 } ],
  [ { index: 9, value: 6 }, { index: 7, value: 4 } ]
]
*/

console.log(findPairSum([5,10,4,6,9,1], 8)); // []
```

# Test

```bash
npm test
```

# License

MIT
