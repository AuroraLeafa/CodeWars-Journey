/* 
    Day 69 - Code Wars Challenge
    Link : https://www.codewars.com/kata/577ff15ad648a14b780000e7/
    CLEAR!!
*/

function greet(language) {
  const languages = {
      "english": "Welcome",
      "czech": "Vitejte",
      "danish": "Velkomst",
      "dutch": "Welkom",
      "estonian": "Tere tulemast",
      "finnish": "Tervetuloa",
      "flemish": "Welgekomen",
      "french": "Bienvenue",
      "german": "Willkommen",
      "irish": "Failte",
      "italian": "Benvenuto",
      "latvian": "Gaidits",
      "lithuanian": "Laukiamas",
      "polish": "Witamy",
      "spanish": "Bienvenido",
      "swedish": "Valkommen",
      "welsh": "Croeso"
    };
    return languages[language.toLowerCase()] || "Welcome"
}

console.log(greet("czech"));
console.log(greet("english"));
console.log(greet("irish"));
console.log(greet("invalid"));