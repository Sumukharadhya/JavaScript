/*
let a = 100
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
   
}//->scope

for (let i =0; i< array.length; i++){
    const element = array[i];

}
console.log(a);
//console.log(b);
//console.log(c);

*/
function one(){
    const username = "Sumukh"

    function two() {
        const website = "google"
        console.log(username);
    }
   // console.log(website);

    // two()
}

// one()

if (true) {
    const username = "Sumukh"
    if (username == "Sumukh"){
        const website = " google"
        console.log(username + website);
}
}

