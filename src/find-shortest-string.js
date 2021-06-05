"use strict";

/**
 * Find the shortest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 * 
 * @param {string[]} stringArr - array of strings
 * @returns {string} - the shortest string
 */
function findShortestString(stringArr) {
const shortestString = stringArr[0]
for (str of stringArr) {
if (str.length < shortestString.length) {
shortestString = str
}
}
return shortestString
}

console.log(findShortestString(["it", "is", "a", "nice", "day"]), "a");
console.log(findShortestString(["why", "hello", "to", "you"]), "to");
console.log(findShortestString(["brave", "dance"]), "brave");