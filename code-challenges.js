// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//function take in a string
//create a variable with all my vowels
//split the word
//use map to be able to access each value or charAt?
//if the value = vowel change to number a=4 e=3 i=1 o=0
//if the letter is not a vowel, return it as its itself
//join the string together again
//then call it

const codedWords = (str) =>{
  var str = str.split("")
  return str.map(value => {
    if (value === "a"){
      return "4"
    }
    else if (value === "e"){
      return "3"
    }
    else if (value === "i"){
      return "1"
    }
    else if (value === "o"){
      return "0"
    }
      else {
        return value
      }
  }).join("")
}

console.log(codedWords(secretCodeWord1));
console.log(codedWords(secretCodeWord2));

// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"
//function takes in array
//filter over array to see if the values match value of "a"
//A or a
//returns only the words that have a in them
//if word has value a in array, return that string

const wantAs = (array) => {
  var array = array.toString().split()
  return array.filter(string => {
    (string === "a" || "A")
    return string
  }).join("")
}
console.log(wantAs(arrayOfWords));

//there's something I'm missing but I have no idea what....

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

//create a function that takes in array of numbers

const fullHouse = (array) => {
if(array[0] === array[1] && array[1] != array[2] && array.length >= 3){
            return false
        }
        else if(array[0] != array[1] && array[1] === array[2] && array.length >= 3){
            return false
        }
        else if(array[0] != array[1] && array[1] != array[2] && array[2] === array[3] && array.length >= 3){
            return true
        } else {
          return true
        }
}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
