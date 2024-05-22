/* 
    Day 37 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5556282156230d0e5e000089/
    CLEAR !!
*/

// const DNAtoRNA = dna => dna.split('').map(char => char === 'T' ? 'U' : char).join('')

const DNAtoRNA = dna => dna.replace(/T/g, "U")

// const DNAtoRNA = dna => dna.replaceAll('T', "U")

  console.log(DNAtoRNA("TGCAT"));