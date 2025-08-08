/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Sort the array to bring shortest string to the front
  const sortedStrs = [...strs].sort((a, b) => a.length - b.length);

  // Take the shortest string as a candidate prefix
  let prefix = sortedStrs[0];

  for (let i = prefix.length; i > 0; i--) {
    const candidate = prefix.slice(0, i);
    const allMatch = sortedStrs.every((str) => str.startsWith(candidate));

    if (allMatch) {
      return candidate;
    }
  }

  return "";
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), 'Output: "fl"');
console.log(longestCommonPrefix(["dog", "racecar", "car"]), 'Output: ""');
