class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return ''
        let res = ''
        for(const s of strs) {
            res += `${s.length},`
        }
        res += '#'
        for(const s of strs) {
            res += s
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === null) return []
        let res = []
        let separatorIndex = str.indexOf('#')
        let sizePart = str.substring(0, separatorIndex)
        let words = str.substring(separatorIndex + 1)
        let sizes = sizePart.split(',').filter(s => s.length > 0)
        let index = 0
        for(const sz of sizes) {
            let len = parseInt(sz)
            res.push(words.substr(index, len))
            index += len
        }
        return res
    }
}
