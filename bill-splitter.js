const prompt = require("prompt-sync")()

let p1Amt = +prompt("How much did Person 1 pay? ")
let p2Amt = +prompt("How much did Person 2 pay? ")

let totalAmt = p1Amt + p2Amt

if (p1Amt === p2Amt){
    console.log("No one owes anyone anything.")
} else if (p1Amt > p2Amt) {
    let amtOwed = p1Amt - (totalAmt/2)
    console.log(`Person 2 owes Person 1 $${amtOwed}.`)
} else if (p2Amt > p1Amt) {
    let amtOwed = p2Amt - (totalAmt/2)
    console.log(`Person 1 owes Person 2 $${amtOwed}.`)
} else {
    console.log("error")
}