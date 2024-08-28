/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = A => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let scale = (i, j, sum = A[i][j], cnt = 1) => {
        for (let [u, v] of [[i - 1, j], [i - 1, j + 1], [i, j + 1], [i + 1, j + 1], [i + 1, j], [i + 1, j - 1], [i, j - 1], [i - 1, j - 1]])
            if (0 <= u && u < M && 0 <= v && v < N)
                sum += A[u][v], ++cnt;
        return Math.floor(sum / cnt);
    };
    return A.map((row, i) => row.map((col, j) => scale(i, j)));
};