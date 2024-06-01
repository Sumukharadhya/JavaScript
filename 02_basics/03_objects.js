//singleton

//object singleton
//Object.create

const mySymb = Symbol = ("key1")

const JsUser = {
    name : "Sumukh",
    "full name": "Sumukh Aradhya",
    [mySymb]: "myKey1",
    age : 22,
    location: "Bangalore",
    email:"sumukh@apple.com",
    isLoggedIn: false,
    lastLogginDays:["Monday","Saturday"]
}
/*
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySymb]);
*/
JsUser.email = "Sumukh@google.com"
//Object.freeze(JsUser)
console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`HEllo Mate, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

