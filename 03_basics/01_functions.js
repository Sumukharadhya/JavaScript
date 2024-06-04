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
//console.log(loginUserMessage("Sumukh"));

function calculateCartPrice(val1,val2, ...num1) {
return num1

}

//console.log(calculateCartPrice(200,400, 700));

const user = {
    username: "Sumukh",
    price: 199
}
/*
function handleObject(anyobject){
console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username:"kj",
    price: 200
})
*/
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]

}
console.log(returnSecondValue(myNewArray));