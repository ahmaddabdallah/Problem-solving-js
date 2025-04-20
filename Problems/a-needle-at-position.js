/* A Needle at Position
   
   Description:
   ------------
   Write a function findNeedle() that takes an array full of junk but containing one "needle"
   After your function finds the needle it should return a message (as a string) that says:
   "found the needle at position X" where X is the index the needle was found at.
   
   Example:
   findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
   should return "found the needle at position 5"
*/

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == "needle") {
            return "found the needle at position " + i;
        }
    }

    return "found the needle at position " + haystack.indexOf("needle");
}

console.log(
    findNeedle([
        "hay",
        "junk",
        "hay",
        "hay",
        "moreJunk",
        "needle",
        "randomJunk",
    ])
);
