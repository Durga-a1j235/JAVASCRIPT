const user={
    user: "durga",
    age:18
    welcomMessage:function(){
        console.log(`welcome ${this.user} age is ${this.age}`);//this is used to access the properties of the object
    }
}
// this is used to access the properties of the object
//this refers current context
user.welcomMessage();
//if we use arrow function in welcomMessage it will give undefined because arrow function does not have its own this it takes this from its parent scope
//if we use arrow function in welcomMessage it will give undefined because arrow function does not have its own this it takes this from its parent scope
