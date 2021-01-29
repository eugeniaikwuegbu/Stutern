//Question 1
//The notorious Captain Schneider has given you a very straight forward mission. Any data that comes through the system make sure that only non-special characters see the light of day.

// Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.

function nothingSpecial(str){
    if(typeof str === "string"){
    return str.replace(/[a-z\d\s]/gi, "");
    }else {
        return "Not a string"
    }
}

//Question 2
// Create a function that will tell how many sentences are in a paragraph, based on the number of periods ".", question marks "?" and "!" exclamation points that an input string contains.
function sentenceCount(paragragh){

}


// Question 3
// Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 and false otherwise. But looks like he has messed it up. Could you help him out? Please!

//Question 4
//Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

// The guidelines say that the username is valid only if:

// it is between 6-10 characters long;
// contains at least 1 lowercase letter;
// contains at least 1 number;
// contains only numbers and lowercase letters.

//Question 5
// Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

//Question 6
// Validate all numbers to make local calls from the capital city at the Mexican United States.

// The first two digits are the lada. Lada can only be 55 or 56 for those Mexico City phone numbers.

// The first two digits of the phone numbers when dialed locally are known as lada. To make phone numbers more readable some people write the lada between parenthesis. 
// As you will see in further Katas lada concept is actually deeper than area code.

//Question 7
//Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.

// It should only accept addresses in canonical representation, so no leading 0s, spaces etc.