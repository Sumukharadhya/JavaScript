const myArr = [0,1,2,3,4,5,true,"sumukh"]
const myHeros = ["Super Man","Batman"]

const myArr2 = new Array(1,2,3,)

console.log(myArr[1]);

// Array Methods

myArr.push(6)
myArr.unshift(9)
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);


// Slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);