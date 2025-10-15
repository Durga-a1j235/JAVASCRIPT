function name()//function declaration
{
console.log("d");
console.log("u");
console.log("r");
console.log("g");
console.log("a");
}
name();//execute or call the function
// function add(a, b){
//     console.log(a+b)
// }
// const result=add(10,20);
// console.log("result:",result)
//undefined because function not return any value;
function add(a, b){
    let c=a+b;
    //console.log("hello")
    //if we use return statement function will return the value and exit from the function
    return c;
    //console.log("hello")//it will not execute because return statement is above it
}
const result=add(10,20);
console.log("result:",result)
//we can do it in this way also
const sub=function(a, b){
    return a-b;
}
const result1=sub(20,10);
console.log("result1:",result1)
//diffretnt way to declare variable
function user(name, age, city){
    if(name===undefined){
        console.log("name is required")
        return;
    }
    return `${name} is ${age} years old and lives in ${city}`;
}
const result2=user("durga", 18, "hyd");
console.log(result2);

// if i take the example of A E COMMErce website where people are rapid ly add cart items at that tym we dont aware about the no of items we just have add price
//this sinario is common wehere we dont know how many arguments are passed
//in this case we use rest operator(...)
//rest operator will convert the arguments into array

function cartprice(...num1){
    return num1;
}
console.log(cartprice(100,200,300,400,500));//REST convert it in to array

const user={
    name:"durga",
    age:18
}
function handelobj(anyobject){
    console.log(`user name is ${anyobject.name} and age is ${anyobject.age}`);
} 
//here we can pass any object
handelobj({
    name:"kalu",
    price:1000,
})
const myNewaArray=[10,20,30,40,50];
function returnScondvalue(getarray){
    return getarray[1];
}
console.log(returnScondvalue(myNewaArray));
//here we can pass any array
// console.log(returnScondvalue([100,200,300,400,500]));
