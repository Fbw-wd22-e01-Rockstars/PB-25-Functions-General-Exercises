// # General exercises

// 1. Write a function that takes in one parameter and logs that parameter 3 times into the console.

function printLog(word){
    console.log(word)
    console.log(word)
    console.log(word)
}
/* printLog("Hello") */


// 2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

function printFiveTimes(word){
    let result = "";
    for(let i = 0; i<5 ; i++){
        result += word
        //result = result + word
    }
    return result  
}
console.log(printFiveTimes("Cat"))

// 3. Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs `3` and "Woah" it should return `WoahWoahWoah`

function concatString(num,str){
    let result = "";
    for(let i = 0; i<num ; i++){
        result += str
        //result = result + str
    }
    return result  
}

console.log(concatString(2,"Woah"))

// 4. Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337`

 function getLargestNumber(arr){

    let largestNumber = 0;

    for(let i = 0; i< arr.length; i++){
        if(arr[i]>largestNumber){   //largestnumber  = 1337
            largestNumber = arr[i]  
        }
    }

    return largestNumber;

    /* return Math.max(...arr) */
} 

console.log(getLargestNumber([1,6,83,91,0,-4,1337,5]))



// 5. This question has 2 parts

//     Part a) write a function that takes in a number and does a `console.log("Even 10!")` if the number is evenly divisable by 10. Examples:

//     -  printIfDivisibleByTen(1) --> no output
//     -  printIfDivisibleByTen(2) --> no output
//     -  printIfDivisibleByTen(32) --> no output
//     -  printIfDivisibleByTen(10) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(30) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(90000) --> "Even 10!" into the console

function printIfDivisibleByTen(number){
    if(number%10===0){
        console.log(`Even 10`)
    }else{
        console.log("no output")
    }
}
/* printIfDivisibleByTen(30) */

//     Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
/* for(let i = 0 ; i<125 ; i++){
    printIfDivisibleByTen(i)
} */


// 6. Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

/* function findLargestNum (a,b,c,d,e){
    return Math.max(a,b,c,d,e)
} */
//function expression
/* const findLargestNumber = function (a,b,c,d,e){
    return Math.max(a,b,c,d,e)
} */

//arrow function
const findLargestNumber = (a,b,c,d,e) => Math.max(a,b,c,d,e)
/* console.log(findLargestNumber(3,7,3,19,3)) */



// 7. Write an arrow function that takes in one parameter and returns true if that parameter is a string.

/* const checkDataType = data => typeof data === "string"

console.log(checkDataType(1)) */


// 8. Write an arrow function that takes in two parameters and returns true if both of them are strings.
/* function checkData (first, second){
    if(typeof str1 === "string" && typeof str2 === "string" ){
        return true
    }else{
        return false
    }
}
 */
const checkDataTypeForBoth = (str1 , str2) => typeof str1 === "string" && typeof str2 === "string";

/* console.log(checkDataTypeForBoth("h",3)) */

// 9. Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
//     - getFirstWord("Internetting is hard") --> "Internetting"
//     - getFirstWord("Hello World") --> "Hello"
//     - getFirstWord("Hello") --> "Hello"

/* function getFirstWord (sentence){
    const splitedText = sentence.split(" ")
    return splitedText[0]
} */

const getFirstWord = sentence => sentence.split(" ")[0]

console.log(getFirstWord("Hello World"))


// 10. *HARD* Write an arrow function that takes in one string.
// The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
//     - wordRepeater("bunny") --> "bunny"
//     - wordRepeater("Cat food") --> "Cat Cat food food"
//     - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
//     - wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"

/* function wordRepeater(word){
    const splitedWord = word.split(" ") // ["Cat","food"]
    let result = ""
    for(let i = 0; i<splitedWord.length ; i++){
        
            result += (splitedWord[i]+" ").repeat(splitedWord.length)
    }
    return result
} */
const wordRepeater = word => {
    const splitedWord = word.split(" ") // ["Cat","food"]
    let result = ""
    for(let i = 0; i<splitedWord.length ; i++){
        
            result += (splitedWord[i]+" ").repeat(splitedWord.length)
    }
    return result
}
/* const wordRepeater=word=>(word.split(" ").map((item,i,array)=>(item+" ").repeat(array.length))).join("") */
console.log(wordRepeater("Cat Food"))
console.log(wordRepeater("O M G ?"))




// 11. Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
//     - firstLetter("cat") --> "c"
//     - firstLetter("quylthulg") --> "q"

const firstLetter = word => word[0]
console.log(firstLetter("cat")) 


// 12. Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
//     - firstLetters("cat") --> "c"
//     - firstLetters("What the fruit") --> "Wtf"
//     - firstLetters("MongoDB Express Node React") --> "MERN"
//     - firstLetters("What You See Is What You Get") --> "WYSIWYG"

const firstLetters = string =>{
    let splitText = string.split(" ")
    let result = ""
    for(let i = 0; i < splitText.length ; i++){
        result += splitText[i].charAt(0)
    }
    return result
}
/* console.log(firstLetters("What You See Is What You Get")) */

// 13. Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!


const returnLength = value => {
   /*  value[Symbol.iterator] */
    if(typeof value === "string" || Array.isArray(value)){
        return value.length
    }else{
        return null
    }
}

/* console.log(returnLength(23)) */

// 14. Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
//     - explode("Cat") --> ["C", "a", "t"]
//     - explode(41) --> null
//     - explode("") --> []
//     - explode("R & D") --> ["R", " ", "&", " ", "D"]

/* const explode = value => typeof value ==="string" ? value.split(""):null; */

const explode= value => {
    if(typeof value ==="string"){
        return value.split("")
    }else{
        return null
    }
}
/* console.log(explode("R & D"))
console.log(explode(34)) */



// 15. Reverse engineering challenge 1. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - foo("") -> false
//     - foo("a") -> false
//     - foo("o") -> true
//     - foo("Cat") -> false
//     - foo("Tomato") -> true
//     - foo("Potato") -> true
//     - foo("Blanket") -> false
//     - foo("1") -> false

const foo = value => value.includes("o")
console.log(foo(""))
console.log(foo("tomato"))

// 16. Reverse engineering challenge 2. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - bar("") --> "Cat"
//     - bar("x") --> "Cat"
//     - bar("Cat") --> "Catt"
//     - bar("Foobar") --> "Catobar"
//     - bar("Potato") --> "Cattato"
//     - bar("Tomato") --> "Catmato"
//     - bar("International Space Station") --> "Catternational Space Station"

const bar = value=>"Cat"+value.slice(2)
  


console.log(bar(""))
console.log(bar("x"))
console.log(bar("Cat"))
console.log(bar("International Space Station"))