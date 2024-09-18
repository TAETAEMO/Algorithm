/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    function dfs(a,b,curr){
        if(a<0 || b<0 || a>=image.length || b>=image[0].length || image[a][b] != curr || image[a][b] == newColor) return;
        image[a][b] = newColor;
        dfs(a+1,b,curr);
        dfs(a,b+1,curr);
        dfs(a-1,b,curr);
        dfs(a,b-1,curr);
    }
    
    dfs(sr,sc,image[sr][sc]);
    return image;
};