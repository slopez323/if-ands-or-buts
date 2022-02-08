const prompt = require("prompt-sync")()

let p1Amt = +prompt("How much did Person 1 pay? ")
let p2Amt = +prompt("How much did Person 2 pay? ")
let p3Amt = +prompt("How much did Person 3 pay? ")

let totalAmt = p1Amt + p2Amt + p3Amt
let p1Bal = Number((totalAmt / 3 - p1Amt).toFixed(2))
let p2Bal = Number((totalAmt / 3 - p2Amt).toFixed(2))
let p3Bal = Number((totalAmt / 3 - p3Amt).toFixed(2))
// console.log(`${p1Bal} ${p2Bal} ${p3Bal}`)

if (p1Bal === 0 && p2Bal === 0 && p3Bal === 0) {
    console.log("No one owes anyone anything.")
} else if (p1Bal > 0 && p2Bal <= 0 && p3Bal <= 0) {
    console.log(`Person 1 owes Person 2 $${-p2Bal} and owes Person 3 $${-p3Bal}.`)
} else if (p2Bal > 0 && p1Bal <= 0 && p3Bal <= 0) {
    console.log(`Person 2 owes Person 1 $${-p1Bal} and owes Person 3 $${-p3Bal}.`)
} else if (p3Bal > 0 && p1Bal <= 0 && p2Bal <= 0) {
    console.log(`Person 3 owes Person 1 $${-p1Bal} and owes Person 2 $${-p2Bal}.`)
} else if (p1Bal > 0 && p2Bal > 0){
    console.log(`Person 1 owes Person 3 $${p1Bal} and Person 2 owes Person 3 $${p2Bal}.`)
} else if (p1Bal > 0 && p3Bal > 0){
    console.log(`Person 1 owes Person 2 $${p1Bal} and Person 3 owes Person 2 $${p3Bal}.`)
} else if (p3Bal > 0 && p2Bal > 0){
    console.log(`Person 2 owes Person 1 $${p2Bal} and Person 3 owes Person 1 $${p3Bal}.`)
} else {
    console.log("error")
}