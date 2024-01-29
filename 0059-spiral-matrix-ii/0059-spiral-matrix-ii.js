/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const total = n * n;    
    
    const matrix = new Array(n).fill(1).map(() => new Array(n).fill(0));
        
    let row = 0;
    let col = 0;

    let dirIndex = 0;    
    function getDir() { // Could be a util function
        let dir = DIRECTIONS[dirIndex];
        let nextRow = row + dir[0];
        let nextCol = col + dir[1];
        
        if(nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || matrix[nextRow][nextCol] !== 0) {
            dirIndex = (dirIndex + 1) % DIRECTIONS.length;
            dir = DIRECTIONS[dirIndex];
        }
        
        return dir;
    }
    
    for(let i = 1; i <= total; i++) {
        matrix[row][col] = i;
        
        const dir = getDir();
        
        row += dir[0];
        col += dir[1];
    }
    
    return matrix;
};