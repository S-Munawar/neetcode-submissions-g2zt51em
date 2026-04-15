class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {

        function palindrome(l, r) {
            while(l < r) {
                if(s[l] !== s[r]) return false
                l++
                r--
            }
            return true
        }

        let n = s.length
        let l = 0
        let r = n - 1
        
        while(l < r) {
            if(s[l] !== s[r]) {
                 return palindrome(l, r - 1) || palindrome(l + 1, r)
            }
            l++
            r--
        }
        return true
    }
}
