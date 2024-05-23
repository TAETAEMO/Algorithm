/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(M, N, A = [...Array(M)].map(_ => Array(N)), k = 0) {
    if (M * N != this.length)
        return [];
    for (let j = 0; j < N; ++j)
        for (let i = (j & 1) ? M - 1 : 0; 0 <= i && i < M; i += (j & 1) ? -1 : 1)
            A[i][j] = this[k++];
    return A;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */