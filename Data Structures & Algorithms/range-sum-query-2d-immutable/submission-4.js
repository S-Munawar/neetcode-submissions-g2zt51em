class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {

        this.prefix = Array.from({length: matrix.length + 1}, () => Array(matrix[0].length + 1).fill(0))
        for (let i = 1; i < this.prefix.length; i++) {
            for (let j = 1; j < this.prefix[i].length; j++) {
                this.prefix[i][j] =
                    (this.prefix[i][j - 1]) +
                    (this.prefix[i - 1][j]) +
                    matrix[i-1][j-1] -
                    (this.prefix[i - 1][j - 1]);
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
        row1++, col1++, row2++, col2++
        return (
            this.prefix[row2][col2] -
            (this.prefix[row1 - 1][col2]) -
            (this.prefix[row2][col1 - 1]) +
            (this.prefix[row1 - 1][col1 - 1])
        );
        
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
