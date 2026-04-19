class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        const n = numbers.length
        let a = 0
        let b = n - 1


        while(a < b) {
            let sum = numbers[a] + numbers[b]

            if (sum === target) return [a + 1, b + 1]
            if (sum > target) {
                b--
            }
            else{
                a++
            }
        }

    }
}
