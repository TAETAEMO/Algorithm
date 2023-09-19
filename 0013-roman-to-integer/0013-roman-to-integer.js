/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanToIntMap[s[i]];

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
    
};

/*
function romanToNum(s) {
  const romeNum = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000 
  }
  let result = 0
  const romeArray = s.split('')
  const numArray = romeArray.map(rome => romeNum[rome])
  
  for (i=0; i<numArray.length; i++) {
    if (numArray[i] < numArray[i+1] ) {
      result -= numArray[i]
    } else {
      result += numArray[i]
    }
  }
  
  return result
}
*/
