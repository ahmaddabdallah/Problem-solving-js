/* Are You Playing Banjo?
   
   Description:
   ------------
   Create a function which answers the question "Are you playing banjo?".
   If your name starts with the letter "R" or lower case "r", you are playing banjo!
   
   Input: A name (string)
   Output: A string indicating whether the person plays banjo based on their name
*/

function areYouPlayingBanjo(name) {
    return name.charAt(0) === "R" || name.charAt(0) === "r"
        ? `${name} ${"plays banjo"}`
        : `${name} ${"does not play banjo"}`;
}

console.log(areYouPlayingBanjo("Ali"));
