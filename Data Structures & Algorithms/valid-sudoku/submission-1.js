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
    for(let rowBox = 0; rowBox < 3; rowBox++) {
        for(let colBox = 0; colBox < 3; colBox++) {
            let map = new Map()
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++) {
                    let row = rowBox * 3 + i
                    let col = colBox * 3 + j
                    let val = board[row][col]
                    if(val === '.') continue
                    if(map.get(val)) return false
                    map.set(val, true)
                }
            }
        }
    }

    return true

    }
}
