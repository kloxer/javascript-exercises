const reverseString = function(word) {

    let length = word.length;
    let reversedStr = "";
    for (let index = length -1; index >= 0; index--) {
        reversedStr = reversedStr + word[index];
        
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;

