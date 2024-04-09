/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length === 0) return;
    const yLength = board.length;
    const xLength = board[0].length;
    
    //Mark borders
    for (let y = 0; y < yLength; y++) {
        for (let x = 0; x < xLength; x++) {
            if (board[y][x] === "O") dfs(x, y);
            if (y > 0 && y < yLength - 1 && x === 0) x = xLength - 2;
        }   
    }
    
    //Flip O to X and 1 to 0
    for (let y = 0; y < yLength; y++) {
        for (let x = 0; x < xLength; x++) {
            if (board[y][x] === "O") board[y][x] = "X";
            else if (board[y][x] === "1") board[y][x] = "O";            
        }   
    }
    
    function dfs(x, y) {
        if (!board[y] || board[y][x] !== "O") return;
        board[y][x] = "1";
        
        dfs(x+1, y);
        dfs(x-1, y);
        dfs(x, y+1);
        dfs(x, y-1);
    }
};