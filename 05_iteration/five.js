const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (val) {
// console.log(val);
// })

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        langaugeFile: "js"
    },
    {
        languageName: "java",
        langaugeFile: "java"
    },
    {
        languageName: "python",
        langaugeFile: "py"
    }
]
myCoding.forEach((item => {
    console.log(item.languageName);
}))