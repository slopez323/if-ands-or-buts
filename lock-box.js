const prompt = require("prompt-sync")()

const pinCode = 1234

let userInput = +prompt("Input the 4 digit passcode. ")

if (userInput === pinCode){
    console.log("success")
} else {
    console.log("failure")
}