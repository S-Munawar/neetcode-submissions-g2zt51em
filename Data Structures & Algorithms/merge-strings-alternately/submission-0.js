class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let res = []

        for(let i = 0; i < word1.length; i++) {

            res.push(word1[i])
            if(word2[i]) res.push(word2[i])

        }

        res.push(word2.slice(word1.length))

        return res.join('')
    }
}
