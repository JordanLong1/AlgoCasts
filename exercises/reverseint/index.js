// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// gotchas: we can turn a number into string using .toString()
// Math.sign() pass in a number, if its positive itll return 1, if negative itll return -1
//parseInt(MyNumber.toString()) convert string back into integer

function reverseInt(n) {

    let reversed = ''

    n = n.toString()

    for (let i = 0; i < n.length; i++ ) {
        let current = n[i]

        reversed = current + reversed
       reversed = parseInt(reversed, 10)

    }
 
    if ( n < 0 ) {
       return reversed * - 1
    // return Math.sign(n) * reversed
    }
    
    return reversed
}

module.exports = reverseInt;
