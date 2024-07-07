/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let lastArray = [1]
  if(rowIndex === 0){
    return lastArray
  }
  rowIndex++
  for(let i=1; i<rowIndex; i++){
    let eachArray = []
    for(let j=0; j<i+1; j++){
      if(j === 0 || j === i){
        eachArray[j] = 1
      }else{
        eachArray[j] = lastArray[j-1] + lastArray[j]
      }
    }
    lastArray = eachArray
  }
  return lastArray
};