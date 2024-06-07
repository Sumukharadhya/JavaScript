const user = {
    username: "Sumukh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
/*
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()


function mac(){
    let username = "kj"
    console.log(this.username);
}

mac()
*/

const book =  () => {
    let username = "kj"
    console.log(this.username)
}
// book()
/*
const addTwo = (num1, num2) => {
    return num1 + num2
} */
// console.log(addTwo(2,3));
const addTwo = (num1, num2) => ({username: "kj"})
console.log(addTwo(2,3));