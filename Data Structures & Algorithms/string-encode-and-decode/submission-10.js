class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for(const str of strs) {
            result += str.length + '#' + str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let j = 0

        while(j < str.length) {
            let i = j
            while(str[j] !== '#') {
                j++
            }
            let sz = parseInt(str.substring(i, j))
            i = j + 1
            j = i + sz
            result.push(str.substring(i, j))
        }
        return result
    }
}
