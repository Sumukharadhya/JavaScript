const name = "sumukh"
const repoCount = 50

//console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sumukhkj")

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('m'))


const newString = gameName.substring(1,4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)
//trim and replace

const string1 = "   Sumukhkj   "
console.log(string1);
console.log(string1.trim());

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20', '-'));
console.log(url.includes('kj'));

console.log(gameName.split('-'));

