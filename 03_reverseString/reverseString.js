const reverseString = function(str) {
    if(str.length < 0) return "";
    let s = str.split("")
        .reverse()
        .join("");
    return s;
};

// Do not edit below this line
module.exports = reverseString;
