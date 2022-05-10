/* Author: Drew Gilliland
Purpose: This file is to house all of the functions needed to generate and check 
        passwords. 
*/


// Variable set up to use in the main generator function.
let symbolLimit = 10;

const symbols = [
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z", "A", "B", "C", "D",
    "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "P",
    "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z", 1, 2,
    3, 4, 5, 6, 7, 8,
    9, 0, "!", "?", "[", "&"
];

const capitals = [
    "A", "B", "C", "D",
    "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "P",
    "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z"
];

const numbers = [
    1, 2,
    3, 4, 5, 6, 7, 8,
    9, 0
];

const specialChar = [
    "!", "?", "[", "_", "-", "&"
];

// Main function to generate passwords. Has 4 input variables: capitalCheck,
// numberCheck, and specialCheck being boolean values to dictate what requirements
// the users password will need.

function password_gen(capitalCheck, numberCheck, specialCheck, symbolLimit) {
    let i = 0;
    let password_list = [];
    let length = symbols.length;

    while (i < symbolLimit) {
        rand = getRandomInt(length);
        password_list.push(symbols[rand]);
        i++;
    }

    let password = password_list.join("");


    if (capitalCheck === true) {
        if (containCaps(password) === true) {
            console.log("Capital check passed.");
        }
        if (containCaps(password) === false) {
            console.log("Password does not contain capital letters.");
            console.log(password);
            password = capitalReplace(password);
        }
    }

    if (numberCheck === true) {
        if (containNumbers(password) === true) {
            console.log("Number check passed.");
        }
        if (containNumbers(password) === false) {
            console.log("Password does not contain a number.");
            console.log(password);
            password = numberReplace(password);
        }
    }

    if (specialCheck === true) {
        if (containsSpecialChars(password) === true) {
            console.log("Special character check passed");
        }
        if (containsSpecialChars(password) === false) {
            console.log("Password does not contain a special character.");
            password = specialReplace(password);
        }
    }

    return password;
}

// Function that generate a random integer between 0 and the input "max".

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function that checks if the password contains a capital letter.

function containCaps(word) {
    let wordArray = word.split("");
    let length = word.length;
    for (let i = 0; i < length; i++) {
        if (wordArray[i] == wordArray[i].toUpperCase()) {
            return true;
        }
    }

    return false;
}

// Function that checks if the password contains a number.

function containNumbers(word) {
    let wordArray = word.split("");
    let length = word.length;
    for (let i = 0; i < length; i++) {
        if (!isNaN(wordArray[i] * 1)) {
            return true;
        }
    }

    return false;
}

// Function that checks if the password contains a special Character

function containsSpecialChars(str) {
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    return specialChar.test(str);
}

// Sample function that checks if a value is a number, lowercase, or uppercase

function checkCase(ch) {
    if (!isNaN(ch * 1)) {
        return 'ch is numeric';
    }
    else {
        if (ch == ch.toUpperCase()) {
            return true;
        }
        if (ch == ch.toLowerCase()) {
            return false;
        }
    }
}

let capitalReplace = (word) => {
    wordArray = word.split("");
    console.log(wordArray);
    for (let i = 0;i < word.length; i++) {
        if (wordArray[i] == wordArray[i].toLowerCase()) {
            wordArray[i] = capitals[getRandomInt(capitals.length)];
            word = wordArray.join("");
            return word;
        }
    }
}

let numberReplace = (word) => {
    wordArray = word.split("");
    for (let i = 0; i < word.length; i++) {
        if (!isNaN(wordArray[i] * 1)) {
            break;
        }
        if (wordArray[i] == wordArray[i].toLowerCase()) {
            wordArray[i] = numbers[getRandomInt(numbers.length)]
            word = wordArray.join("");
            return word;
        }
    }

}

let specialReplace = (word) => {
    wordArray = word.split("");
    for (let i = 0; i < word.length; i++) {
        if (wordArray[i] == wordArray[i].toLowerCase()) {
            wordArray[i] = specialChar[getRandomInt(specialChar.length)]
            word = wordArray.join("");
            return word;
        }
    }
}