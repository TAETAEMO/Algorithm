/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix){

    const tempMatrix = JSON.parse(JSON.stringify(matrix));

    const colZeroRecord = Array(matrix[0].length).fill(1);

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 0){
                tempMatrix[row] = Array(matrix[0].length).fill(0);
                colZeroRecord[col] = 0; 
            }
        }
    }

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(colZeroRecord[col] === 0){  
                tempMatrix[row][col] = 0;
            }
        }
    }

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            matrix[row][col] = tempMatrix[row][col]
        }
    }

    return matrix;
}