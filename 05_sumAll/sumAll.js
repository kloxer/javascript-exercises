const sumAll = function(a,b) {
    if (typeof a != "number" || typeof b != "number" )
    {
        return "ERROR";
    }
    if (a < 0 || b < 0)
    {
        return "ERROR";
    }

    let sum= 0;
    let lower = a;
    let higher = b;
    if (a>b){
        lower = b;
        higher = a;
    }
    for (let index = lower; index <= higher; index++) {
        sum = sum + index;
        
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
