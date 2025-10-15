//singleton
let ssymb=Symbol["key"]
const user={
    name:"durga",
    age: 18,
    [ssymb]:"sks"//sqar bracket make it string
}
console.log(user["name"]);
console.log(user.ssymb);//here it's not symbol it's string
console.log(user[ssymb]);
user.name="kaluna";
console.log(user["name"])
// nested object
const insta_users={
    age: 18,
    name:{
        first:"durga",
        last:"kalu"
    }
}
console.log(insta_users.name.first)
console.log(insta_users.name.last)
//array of object
const obj1={1:"one",2:"two"}
const obj2={3:"three",4:"four"}
const obj3={5:"five",6:"six"}
// const arr=Object.assign({}, obj1,obj2,obj3)
// console.log(arr)
// const arr=[...obj1,...obj2,...obj3]
// console.log(arr)
//from data base value
const user1=[
    {
    name:"durga",
    age:18
    },
    {
    name:"kalu",
    age:12
    }
]
console.log(user1[1].age)
console.log(Object.keys(user1[0]))//return array of keys
console.log(Object.values(user1[0]))//return array of values
console.log(Object.entries(user1[0]))//return array of array of key value pair
//freeze object
const user2={
    name:"durga",
    age:18
}
Object.freeze(user2)
user2.name="kalu"//it will not change
console.log(user2.name)
//seal object
const user3={
    name:"durga",
    age:18
}   
Object.seal(user3)
user3.name="kalu"//it will change
user3.age=20//it will change
console.log(user1.hasownProperty("name")) //true 
//it will check the property is there or not and give boolean value
console.log(user1.hasownProperty("  ssymb"))//false
console.log(user1.name)
//objects
//destructuring of object
const course={
    coursename:"js",
    price:"1000",
    courseInstructor:"kalu"
}
//course.courseInstructor
const {courseInstructor}=course
console.log(courseInstructor)
const {coursename,price}=course
console.log(coursename)