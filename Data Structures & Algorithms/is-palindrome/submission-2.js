class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let newStr = ""
        for(const ch of s) {
            if(this.isAlphanumeric(ch)) {
                newStr += ch.toLowerCase()
            }
        }

        return newStr === newStr.split('').reverse().join('')

    }

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

}
