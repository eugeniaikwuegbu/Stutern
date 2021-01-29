// Convert the following es5 code blocks into es2015 code:

//Number 1
var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log("Your name is " + this.fullName)
        }.bind(this),1000)
    }
}
//Answer||
let person = {
    fullName: "Harry Potter",
    sayHi: () => {
        setTimeout( function () {
            console.log(`Your name is ${this.fullName}`)
        }
        .bind(this),1000);
    }
}


//Number 2
var name = "Josie"
console.log("When " + name + " comes home, so good")

//Answer||
let name = "Josie"
console.log(`When ${name} comes home, so good`)



//Number 3
var DO_NOT_CHANGE = 42;
   DO_NOT_CHANGE = 50; // stop me from doing this!

//Answer||
const DO_NOT_CHANGE = 42;
   DO_NOT_CHANGE = 42; // you have been stopped!


//Number 4. 
var arr = [1,2]
   var temp = arr[0]
   arr[0] = arr[1]
   arr[1] = temp

//Answer||
let arr = [1,2]
   let temp = arr[0]
   arr[0] = arr[1]
   arr[1] = temp



//Number 5
function double(arr){
    return arr.map(function(val){
      return val*2
    });
   }

//Answer||
const double = (arr) => {
      return arr.map( val => val*2)
      };
     

//Number 6.
var obj = {
     numbers: {
        a: 1,
        b: 2
    } 
  }

var a = obj.numbers.a;
var b = obj.numbers.b;

//Answer||
let obj = {
    numbers: {
       a: 1,
       b: 2
   } 
 }

let a = obj.numbers.b;
let b = obj.numbers.a;


//Number 7. 
function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }

//Answer||
const add = (a,b) => {
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }


//Number 8
// Research the following functions - what do they do?
// Array.from
// Object.assign
// Array.includes
// String.startsWith

//Answer||

Array.from
// It enables creating a new shallow-copied array from an array-like object or an iterable object. 
//Array-like objects (objects with a length property and indexed elements); or
//iterable objects (objects such as Map and Set).

Object.assign
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
// It returns the target object.

target
// The target object — what to apply the sources’ properties to, which is returned after it is modified.
sources
// The source object(s) — objects containing the properties you want to apply.

Array.includes
//The includes() method determines whether an array contains a specified element.
//This method returns true if the array contains the element, and false if not.
//Note: The includes() method is case sensitive.

//Example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.includes(20)); //true

// check from position 3
console.log(uint8.includes(20, 3));// false


String.startsWith
//The startsWith() method determines whether a string begins with the characters of a specified string.
// This method returns true if the string begins with the characters, and false if not.
// Note: The startsWith() method is case sensitive.
//Example

const hello = 'Hello, lets go swimming';

console.log(str1.startsWith('Hello', 0)); //true
console.log(str1.startsWith('Hello', 2)); //true
