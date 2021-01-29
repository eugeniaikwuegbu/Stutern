// module.exports={
//     name : "Elie",
//     sayHi(){
//         console.log(`Hi, ${this.name}`)
//     },
// }

let methods = {}

methods.myName = function(){
    console.log("I am Eugenia");
}
methods.myEdu = function(){
    console.log("Banking and Finance");
}
methods.time = function(){
    console.log("It is noon here");
}
// module.exports = methods;
exports.data = methods;


//OR

// exports.myName = function(){
//     console.log("I am Eugenia");
// }
// exports.myEdu = function(){
//     console.log("Banking and Finance");
// }
// exports.time = function(){
//     console.log("It is noon here");
// }

