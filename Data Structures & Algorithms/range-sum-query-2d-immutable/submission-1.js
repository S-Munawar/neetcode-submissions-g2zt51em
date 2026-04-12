class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {

        this.prefix = Array.from({length: matrix.length}, () => Array(matrix[0].length).fill(0))
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                this.prefix[i][j] =
                    (this.prefix[i][j - 1] ?? 0) +
                    (this.prefix[i - 1]?.[j] ?? 0) +
                    matrix[i][j] -
                    (this.prefix[i - 1]?.[j - 1] ?? 0);
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {

        return (
        this.prefix[row2][col2] -
        (this.prefix[row1 - 1]?.[col2] ?? 0) -
        (this.prefix[row2][col1 - 1] ?? 0) +
        (this.prefix[row1 - 1]?.[col1 - 1] ?? 0)
        );
        
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
