/*
    Your start-up's BA has told marketing that your website has a large audience in Scandinavia and 
    surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own 
    language. Luckily you already use an API that detects the user's location, so this is an easy win.

    The Task
    - Think of a way to store the languages as a database. The languages are listed below so you can copy   
    and 
    - paste!
    - Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a 
    - greeting - if you have it in your database. It should default to English if the language is not in 
    the 
    - database, or in the event of an invalid input.
*/

// Search about hasOwnProperty

/* Solution */

/*
    1 - Create the object to collect the Database
    2 - Check if the language exist in Database 
    3 - If exists , return the language for the current language
    4- If not exists , return the default welcome from the English
*/

function greet(language) {
    const languages = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso",
    };

    // if (languages.hasOwnProperty(language)) {
    //     return languages[language];
    // } else {
    //     return language["english"];
    // }
    return languages[language] || languages["english"];
}

console.log(greet("fsd"));