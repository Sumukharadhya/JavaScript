function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("U");
    console.log("K");
    console.log("H");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
//addTwoNumbers(3, "4")

function addTwoNumbers(number1, number2){
 
  //  let result = number1 + number2
 //return result
 return number1 + number2
 
}

const result = addTwoNumbers(3, 5)

function loginUserMessage(username){
    // if(username == undefined){
    //     console.log("Please enter a username");
    //     return username
    // }
    if(!undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sumukh"));
