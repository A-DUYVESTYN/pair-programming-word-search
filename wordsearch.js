const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))

    let result = false

    for (l of horizontalJoin) {
        if (l.includes(word)) result = true
        
    }

    for (i in letters[0]) {
        const verticalJoin = []

        for (j in letters) {
            verticalJoin.push(letters[j][i])
            
        }
        // console.log(verticalJoin.join(''))
        if (verticalJoin.join('').includes(word)) result = true
    }

    return result

}

//  TEST CASE
// console.log(wordSearch([
//     ['A', 'W', 'C', 'N', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'K', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'], 
//     ['H', 'M', 'J', 'F', 'E', 'V', 'R', 'G'], // FRANK
//     ['W', 'H', 'C', 'R', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'E', 'N', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'D', 'K', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'A', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK'))

module.exports = wordSearch