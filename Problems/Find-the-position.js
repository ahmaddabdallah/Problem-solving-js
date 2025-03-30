/* Find the position! */

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

/* Solution */

/*
    -- Create a String that contain a whole Letters in English
    -- Loop for this string
    -- Check if the looping character = the provided letter
    -- Return the position
*/
function position(letter) {
    const alphabetLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    for (let i = 0; i < alphabetLetters.length; i++) {
        if (alphabetLetters[i] === letter) {
            return i + 1;
        }
    }
}

console.log(position("a"));
