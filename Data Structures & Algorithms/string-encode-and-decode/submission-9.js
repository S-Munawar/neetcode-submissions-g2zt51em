class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for(const str of strs) {
            let size = str.length
            result += size + ','
        }
        result += '#'
        for(const str of strs) {
            result += str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let symbol = str.indexOf('#')
        let sizes = str.slice(0, symbol).split(',')
        console.log(sizes)
        let result = []
        
        let i = symbol + 1
        for(let j = 0; j < sizes.length - 1; j++) {
            sizes[j] = Number(sizes[j])
            result.push(str.slice(i, i + sizes[j]))
            i += sizes[j]
        }

        return result
    }
}
