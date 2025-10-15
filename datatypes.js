"use strict"; //treat all js code new version in whole file through engine

// alert("durga") //pop up come exicute in web page->inspect->console (use node not browser)
console.log(3
    +3
);  //don't need to do this thing coz code should be readability
console.log("Durgaa");

let name="durga"
let age= 20
let isLogin= false

// number range -> 2 to the power of 53
//bigInt
//string -> using(',"")
//boolean -> (true, false)
//null -> (v.imp in js) stand alone value, a type
//undefined -> value not assigned yet
//symbol -> uniqueness, identify individual components

//objects 
console.log(typeof isLogin);
console.log(typeof null);

let num=100
console.log(typeof(num));
console.log(typeof num);
let no="4043"        //string  
let a= Number(no)   //convert string to number
console.log(typeof a);
//if the value no=0 then it print 0
//"122(number)"=>33
//"123abc" => NaN
//"true"(boolean)=>1; false=>0

let b=1
let bola= boolean(b)
console.log(bola);
//1=>true; 0=>false
//""=> false
//"durga"=>true

//primitive 7types
console.table([String],[Number],[Boolean],[null],[undefine],[symbol],[BigInt])

const score=100

//reference type(Non primitive)
//Array, Objects, Function
//array
const car=["audi", "BMW", "Benz"]
//object
let myobj={
    name:"durga",
    age:21
}
//function
const myfun=function(){
    console.log("hello world");
    
}
//typeof null => object  ---(imp)