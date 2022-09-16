const removeFromArray = function(...args) {
    const arr = args[0];
    const ris = [];
    /*
    arr.forEach((item) => {
        if(!args.includes(item)) ris.push(item);
    }); 
    * */

    //using filter
    const array = args[0];
    return array.filter(val => !args.includes(val));
    return ris;
};

// Do not edit below this line
module.exports = removeFromArray;