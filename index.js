const {permutationRec} = require('./permutationRec')
const {permutationItr} = require('./permutationItr')


const string = 'abc';
// console.log('recursive solution:', permutationRec(string)) //working
console.log('iterative solution:', permutationItr(string)) // not working