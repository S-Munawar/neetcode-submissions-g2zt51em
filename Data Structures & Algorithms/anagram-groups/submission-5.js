class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for(let i = 0; i < strs.length; i++) {
            let sortedStr = strs[i].split('').sort().join('')
            if(!map.has(sortedStr)) {
                map.set(sortedStr, [])
            }
            map.get(sortedStr).push(strs[i])
        }
        const result = []
        for(const [, value] of map) {
            result.push(value)
        }
        return result
    }
}
