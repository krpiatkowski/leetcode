/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (40.39%)
 * Total Accepted:    350.7K
 * Total Submissions: 866.5K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

let mapping = [
    [],
    [                  ], ["a", "b", "c"], ["d", "e", "f"     ],
    ["g", "h", "i"     ], ["j", "k", "l"], ["m", "n", "o"     ],
    ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"],
]

var letterCombinations = function(digits) {
    let result = []
    for(let i = 0; i < digits.length; i++) {
        let d = parseInt(digits[i])

        let button = mapping[d]

        if(result.length == 0){
            result = [...button]
        } else {
            let newResult = []
            for(let j = 0; j < button.length; j++) {
                for(let k = 0; k < result.length; k++) {
                    newResult.push(result[k] + button[j])
                }
            }
            result = newResult;
        }       
    }    
    return result
};

if (process.env.local) {
    let input = "23";
    console.log(JSON.stringify(letterCombinations(input)));
  }

