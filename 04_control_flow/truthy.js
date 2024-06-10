const userEmail = "sumukh@google.com"

if (userEmail) {
    console.log("Got User email");
} else{
    console.log("Didnt get the email");
}

//falsy values

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObject = {}
// if (Object.keys().length === 0) {
//     console.log("Object is empty");
// }

//Nulish coalescing operator (??): null, undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15

// val1 = null ? 10 ?? 20

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
