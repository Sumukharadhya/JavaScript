//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Pie"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser = {
    email: "some@hotmail.com",
    fullname: {
        userfullname: {
            firstname: "sumukh",
            lastname: "aradhya"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//const obj1 = {1: "a", 2:"b"}
//const obj2 = {3: "a", 4:"b"}
//const obj4 = {5: "a", 6:"b"}

//const obj3 = Object.assign({}, obj1, obj2, obj4)
//const obj3 = {obj1, obj2}

//const obj3 = {...obj1,...obj2}
//console.log(obj3);


const users = [
    {
    },
    {
    },
    {
    },
]
users[1].email
//console.log(tinderUser);
/*
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
*/
const course = {
    coursname: "javascript",
    price: "10",
    courseInstructor: "KJ"

}
//console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

console.log(instructor);
//
{
//"name":"kj",
//"coursname": "javascript",
//"price": "free"
}


