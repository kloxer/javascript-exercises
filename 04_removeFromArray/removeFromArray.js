const removeFromArray = function(array,...args) {
    const copiedArray = array;
    const lengthOfArrray = array.length;
    let newArray = array;

    for (let j = 0; j < args.length; j++) {
        const removedNum = args[j];
        
        for (let index = 0; index < array.length; index++) {
            const element = newArray[index];
            if (element == removedNum && (typeof element == typeof removedNum)){ // We will have the i value at which this occurs, can grab values before and after
                //[1,2,3,4] num= 3 so i i=2, we want to slice from 0->1 and 4->length of array which
                //array before element
                let currArray = newArray;
                let beforeCopy = newArray.slice(0,index); //not inclusive with index, 0 to index-1 so 1,2
                
                let afterCopy = newArray.slice(index+1, lengthOfArrray);//4,4
                //array after element
    
                //concat arrays
                newArray = beforeCopy.concat(afterCopy);
    
                break;
    
            }
    

        
    }

    }
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
// const array2 = [1,2,3,4,5];
//[3,4,5]
//index 0>length of array
// removeFromArray([1, 2, 3, 4], 7, "tacos");
// removeFromArray(array2,3);
//removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
//removeFromArray([1, 2, 3], "1", 3);