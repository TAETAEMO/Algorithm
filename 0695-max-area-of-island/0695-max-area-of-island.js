/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0
    let dir = [[0,1], [0,-1],[1,0],[-1,0]]

    const m = grid.length
    const n = grid[0].length
    let area = 0
        
    const helper = (i,j) => {
        if(i >=0 && i<m && j>=0 && j<n && grid[i][j] === 1) {
            grid[i][j] = 0
            area ++
            for(let d of dir){
                helper(i+d[0], j+d[1])
            }
        }
    }
    
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] === 1){
                
                helper(i,j)
                max = Math.max(area,max)
                area = 0
            }
        }
    }
    return max
};