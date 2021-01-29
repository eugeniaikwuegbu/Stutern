1.	Given the following nested object:
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}
a) Using a for loop, console.log all of the numbers in the primeNumbers array.

Answer
  function newestData(){
  var data = nestedData.innerData.numberData.primeNumbers
      for (var i = 0; i < data.length; i++){
      console.log(data[i])
      }
  
  }
  newestData();
//   undefined
// VM38904:19 2
// VM38904:19 3
// VM38904:19 5
// VM38904:19 7
// VM38904:19 11 

b) Using a for loop, console.log all of the even Fibonnaci numbers.
Answer

function fibonnaciNumbers(){
  var evenNumbers = [];
  var fibonnaciEvenNumbers = nestedData.innerData.numberData.fibonnaci;
      for (var i = 0; i < fibonnaciEvenNumbers.length; i++){
          if (fibonnaciEvenNumbers[i] % 2 ===0){
             evenNumbers.push(fibonnaciEvenNumbers[i]);
          }
      }
          return evenNumbers;
  
  }
  fibonnaciNumbers();

// undefined
// VM39776:21 2
// VM39776:21 8


c) Console.log the value "second" inside the order array.
Answer

var secondObject = nestedData.innerData.order[1];
console.log(secondObject); //2VM40107:17 second


d) Invoke the addSnack function and add the snack "chocolate".
Answer

nestedData.innerData.addSnack("Chocolate")
//snacks: Array(4)
0: "chips"
1: "fruit"
2: "crackers"
3: "Chocolate"
length: 4


e) Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

Answer

In a JavaScript function, the owner of the function is the default binding for "this".

So, in a function, "this" refers to the Global object.
The 'this' keyword refers to the object the function belongs to, or the window object if the function belongs to no object.
In the addSnack Function, the "this refers to the innerData Object"


2.	Given the following nested object:
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }

  
a) Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

Answer

function addAnotherSpeaker(){
    var detailsOfObjects = nestedObject.speakers.push({name: "Eugenia"})
    console.log(detailsOfObjects)
    }
    addAnotherSpeaker()//
    nestedObject.speakers
    (4) [{…}, {…}, {…}, {…}]
    0: {name: "Elie"}
    1: {name: "Tim"}
    2: {name: "Matt"}
    3: {name: "Eugenia"}
    length: 4
    __proto__: Array(0)
    
b)Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
Answer

function addLanguage(language, helloInLanguage){
    nestedObject.data.languages[language] = {
      hello: helloInLanguage
    }
  }
  

  
c)Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
Answer

function addCountry(name, capital, population){
    nestedObject.data.continents.europe.countries[name] = {
      capital: capital,
      population: population
    }
  }

  
3.	Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]

Answer

function rotate(arr, num){
    var amount = num % arr.length;
    for(var i=0; i< amount; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}
rotate([1,2,3,4,5], 3)
//(5) [3, 4, 5, 1, 2]
0: 3
1: 4
2: 5
3: 1
4: 2


4.	Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".
makeXOGrid(1,4) 

Answer
function makeXOGrid(rows,amount){
    var finalArr = []
    var startArr = true
    for(var i=0; i<rows; i++){
        var newRow = []
        for(var j=0; j<amount; j++){
            if(startArr){
                newRow.push("X")
            }
            else {
                newRow.push("O")
            }
            startArr = !startArr
        }
        finalArr.push(newRow)
    }
    return finalArr;
}

makeXOGrid(2,4);
(2) [Array(4), Array(4)]
0: (4) ["X", "O", "X", "O"]
1: (4) ["X", "O", "X", "O"]

