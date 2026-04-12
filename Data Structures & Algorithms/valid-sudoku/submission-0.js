class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    // Rows
    for (let row = 0; row < 9; row++) {
        let map = new Map()
        for (let col = 0; col < 9; col++) {
            const val = board[row][col]
            if (val === '.') continue
            if (map.get(val)) return false
            map.set(val, true)
        }
    }

    // Cols
    for (let col = 0; col < 9; col++) {
        let map = new Map()
        for (let row = 0; row < 9; row++) {
            const val = board[row][col]
            if (val === '.') continue
            if (map.get(val)) return false
            map.set(val, true)
        }
    }

    // 3x3 boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            let map = new Map()
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const val = board[boxRow * 3 + i][boxCol * 3 + j]
                    if (val === '.') continue
                    if (map.get(val)) return false
                    map.set(val, true)
                }
            }
        }
    }

    return true
    
    }
}
