/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false
 */

const isValid = (s: string): boolean => {
  if (!s || s.length === 1) return false;

  const closingPair = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
    [">", "<"],
  ]);

  let valid = false;

  for (let i = 0; i < s.length; i++) {
    const openPair = s[i];

    if (
      openPair === closingPair.get(s[i + 1]!) ||
      openPair === closingPair.get(s[s.length - (i + 1)]!)
    ) {
      valid = true;
    } else {
      break;
    }
  }

  return valid;
};

console.log(isValid("()"), "Output: true");
console.log(isValid("()[]{}"), "Output: true");
console.log(isValid("(]"), "Output: false");
console.log(isValid("([])"), "Output: true");
console.log(isValid("([)]"), "Output: false");
console.log(isValid("([()[])]"), "Output: false");
console.log(isValid("[(){}<>{}([])]"), "Output: true");
