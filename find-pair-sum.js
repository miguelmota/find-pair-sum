(function(root) {
  'use strict';

  function findPairSum(numbers, target) {
    var cache = {};
    var results = [];

    if (Array.isArray(numbers)) {
      for (var i = 0; i < numbers.length; i++) {
        var current = numbers[i];
        var difference = target - current;

        if (current in cache) {
          results.push([
            {
              index: i,
              value: current,
            },
            {
              index: cache[current],
              value: difference
            }
          ]);
        }

        cache[difference] = i;
      }
    }

    return results;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = findPairSum;
    }
    exports.findPairSum = findPairSum;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return findPairSum;
    });
  } else {
    root.findPairSum = findPairSum;
  }

})(this);
