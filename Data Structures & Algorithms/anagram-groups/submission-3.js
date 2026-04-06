class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    
    const res = {}
    for(const s of strs) {
        let count = new Array(26).fill(0)
        for(const ch of s) {
            count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        const key = count.join(',')
        if (!res[key]) {
            res[key] = []
        }
        res[key].push(s)
    }
    return Object.values(res)
    }
}
