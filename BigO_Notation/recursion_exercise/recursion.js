//Number 
//Write a function called productOfArray which takes in an array of numbers and returns the product of them all
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// function productOfArray(arr){
// var reducer = arr.reduce((acc, val) => {
//     return acc * val
// })
// return reducer;
// };

function productOfArray(arr){
if (arr.length === 1){
    return arr[0];
}
    return arr[0] * productOfArray(arr.splice(1));
}

productOfArray([1, 2, 3])
productOfArray([0, 1, 2, 3])
productOfArray([1, -2, 3])

//Number 2
//function containsStrings()

// Number 3
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}

contains(nestedObject, 44) // true
contains(nestedObject, "foo") // false

function contains(obj, val){
   for (val of obj){
       if(obj.includes(val)){
           return true;
       }
   } 
   return contains(obj, val);
}


//Number 4
// Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found,
//the function should return negative 1.

function search(arr, val){
    if()
}

//NUmber 5
//Refactor your search function to use a faster algorithm called binary search
//function binarySearch(){
    

//Number 6
//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. 
//Recursion would be a great way to solve this


