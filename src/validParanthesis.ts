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

  const mapping: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
    ">": "<",
  };

  const stack: string[] = [];

  for (const char of s) {
    if (Object.values(mapping).includes(char)) stack.push(char);
    else {
      if (mapping[char] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"), "Output: true");
console.log(isValid("()[]{}"), "Output: true");
console.log(isValid("(]"), "Output: false");
console.log(isValid("([])"), "Output: true");
console.log(isValid("([)]"), "Output: false");
console.log(isValid("([()[])]"), "Output: false");
console.log(isValid("[(){}<>{}([])]"), "Output: true");
console.log(isValid("(){}}{"), "Output: false");
