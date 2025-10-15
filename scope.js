//scope is the {} of the code 
let a =100;
console.log(a);//100 because a is global scope
if(true)//block scope
{
    let a =10
    const b=20;
    var c=30;
}
console.log(a);//error because a is block scope
//here also a is global scope means it's value is 100
// console.log(b);//error because b is block scope
console.log(c);//30 because var is function scope

//nestaded scope
function one(){
    const user="durga";
    function two(){
        const website="youtube";
        console.log(user);//durga because function two can access the variable of function one
    }
    // console.log(website);//error because function one cannot access the variable of function two
    two()
}
one()
if(true){
    const user="kalu";
    if(user==="kalu"){
        const website=" amazon";
        console.log(user + website);//kalu
    }
    // console.log(website);//error because website is block scope
}
// console.log(user);//error because user is block scope

function addone(num){
    return num+1;
}
addone(10);//it will return 11 but we are not storing it anywhere
console.log(addone(10));//11 because we are printing the return value of function
//if we dont use return statement in function it will return undefined
console.log(addone(10)+addone(20));//32 because both function will return the value and then it will add
// console.log(addone(10)+addone("20"));//1021 because 10+1=11 and "20"+1="21" then it will concatinate 11+"21"=1021
//if we dont use return statement in function it will return undefined
// console.log(addone(10)+addone("20")+addone());//NaN because 10+1=11 and "20"+1="21" then it will concatinate 11+"21"=1021 and addone() will return undefined then 1021+undefined=NaN
//if we dont use return statement in function it will return undefined
// console.log(addone(10)+addone("20")+addone()+addone(30));//NaN because 10+1=11 and "20"+1="21" then it will concatinate 11+"21"=1021 and addone() will return undefined then 1021+undefined=NaN and addone(30) will return 31 but NaN+31=NaN
//if we dont use return statement in function it will return undefined
// console.log(addone(10)+addone("20")+addone()+addone(30)+addone("40"));//NaN because 10+1=11 and "20"+1="21" then it will concatinate 11+"21"=1021 and addone() will return undefined then 1021+undefined=NaN and addone(30) will return 31 but NaN+31=NaN and "40"+1="41" then NaN+"41"=NaN
//if we dont use return statement in function it will return undefined
// console.log(addone(10)+addone("20")+addone()+addone(30)+addone("40")+addone(null));//NaN because 10+1=11 and "20"+1="21" then it will concatinate 11+"21"=1021 and addone() will return undefined then 1021+undefined=NaN and addone(30) will return 31 but NaN+31=NaN and "40"+1="41" then NaN+"41"=NaN and null+1=1 then NaN+1=NaN
//if we dont use return statement in function it will return undefined
// console.log(addone(10)+addone("20")+addone()+addone(30)+addone("40")+addone(null)+addone(undefined));//NaN because 10+1=11 and "20"+1="21" then it will concatinate 11+"21"=1021 and addone() will return undefined then 1021+undefined=NaN and addone(30) will return 31 but NaN+31=NaN and "40"+1="41" then NaN+"41"=NaN and null+1=1 then NaN+1=NaN and undefined+1=NaN then NaN+NaN=NaN
//if we dont use return statement in function it will return undefined  
// console.log(addone(10)+addone("20")+addone()+addone(30)+addone("40")+addone(null)+addone(undefined)+addone(true));//NaN because 10+1=11 and "20"+1="21" then it will concatinate 11+"21"=1021 and addone() will return undefined then 1021+undefined=NaN and addone(30) will return 31 but NaN+31=NaN and "40"+1="41" then NaN+"41"=NaN and null+1=1 then NaN+1=NaN and undefined+1=NaN then NaN+NaN=NaN and true+1=2 then NaN+2=NaN
//if we dont use return statement in function it will return undefined
// console.log(addone(10)+addone("20")+addone()+addone(30)+addone("40")+addone(null)+addone(undefined)+addone(true)+addone(false));//NaN because 10+1=11 and "20"+1="21" then it will concatinate 11+"21"=1021 and addone() will return undefined then 1021+undefined=NaN and addone(30) will return 31 but NaN+31=NaN and "40"+1="41" then NaN+"41"=NaN and null+1=1 then NaN+1=NaN and undefined+1=NaN then NaN+NaN=NaN and true+1=2 then NaN+2=NaN and false+1=1 then NaN+1=NaN
//if we dont use return statement in function it will return undefined

// console.log(addone(10)+addone("20")+addone()+addone(30)+addone("40")+addone(null)+addone(undefined)+addone(true)+addone(false)+addone(NaN));//NaN because 10+1=11 and "20"+1="21" then it will concatinate 11+"21"=1021 and addone() will return undefined then 1021+undefined=NaN and addone(30) will return 31 but NaN+31=NaN and "40"+1="41" then NaN+"41"=NaN and null+1=1 then NaN+1=NaN and undefined+1=NaN then NaN+NaN=NaN and true+1=2 then NaN+2=NaN and false+1=1 then NaN+1=NaN and NaN+1=NaN then NaN+