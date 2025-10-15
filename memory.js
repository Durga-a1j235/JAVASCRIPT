//stack(primitive)(copy), heap(non-primitive)(reference)
let a="durgaprasad"
let b= a
b="hoodwink"
console.log(a)
console.log(b);

//non primitive referenece
let user1={
    email:"durga@gmail.com",
    upi:"jfcsd@ylb"
}
let user2=user1//user 2 is reference of user 1 but not copy
user2.email="hoodwink@gmail.com"
//video no. 10 doubt