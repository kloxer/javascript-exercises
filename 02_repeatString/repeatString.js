const repeatString = function(word,num) {
if (num < 0){
    return "ERROR";
}
if (word == "")
{
    return word;
}
var repeatedStr= "";

for (let index = 0; index < num; index++) {
    repeatedStr = repeatedStr + word;    
}

return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
