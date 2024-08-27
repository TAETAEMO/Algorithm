
var matrixReshape = function(mat, r, c) {
  if(!mat || !mat.length) return mat
  const m = mat.length
  const n = mat[0].length
  if(m*n < r*c || m*n > r*c) return mat
  
  const arr = new Array(r).fill(0).map(_=> new Array(c).fill(0))
  let row=0, col=0
  for(let R=0;R<mat.length;R++){
    for(let C=0;C<mat[R].length;C++){
      if(col>= arr[row].length){
        col = 0
        row++
      }
      arr[row][col++] = mat[R][C]
    }
  }
  return arr
};