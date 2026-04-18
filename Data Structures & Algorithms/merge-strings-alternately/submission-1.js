class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let res = []
        let m = word1.length
        let n = word2.length
        let i = 0
        let j = 0

        while(i < m || j < n) {
            if(i < m) res.push(word1[i]); i++
            if(j < n) res.push(word2[j]); j++
        }

        return res.join('')
    }
}
