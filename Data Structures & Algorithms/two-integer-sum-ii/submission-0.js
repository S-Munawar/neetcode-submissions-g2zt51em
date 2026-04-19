class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let map = new Map()
        const n = numbers.length

        for(let i = 0; i < n; i++) {

            let diff = target - numbers[i]
            if(map.has(diff)) {
                return [map.get(diff) + 1, i + 1]
            }
            map.set(numbers[i], i)

        }
    }
}
