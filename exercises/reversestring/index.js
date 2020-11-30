// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// *********** SOLUTION 1 ************

// function reverse(str) {
//     return str.split("").reverse().join(""); // solution 1
// }

// *********** SOLUTION 2 ************

// function reverse(str) {

// let reversed = ''

// for (let i = 0; i < str.length; i++) {
//     let char = str[i]

//     reversed = char + reversed
// }

// return reversed
// }

function reverse(str) {

    // TURN INTO ARRAY, USE REDUCER HELPER

    return  str.split('').reduce((reversed, character) => {
        return character + reversed
    }, '')
}


module.exports = reverse;
