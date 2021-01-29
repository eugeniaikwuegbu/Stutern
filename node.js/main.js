const helpers = require('./helpers');


// console.log(helpers.name)
// console.log(helpers.sayHi())

// console.log(helpers.myEdu())
// console.log(helpers.time())
// console.log(helpers.myName())

helpers.data.myEdu();

const moreHelpers = require('./moreHelpers')
console.log(moreHelpers.sayHello())
console.log(moreHelpers.sayHi())
console.log(moreHelpers.sayGoodBye())

// const evenMore = require('./evenMoreHelpers')
// console.log(evenMore)

const myPets = require('./pets');
console.log(myPets.cat);
console.log(myPets.dog);


// const file = require('./models')
// console.log(file)

const {first,second,third} = require('./models')