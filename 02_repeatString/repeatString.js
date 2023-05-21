const repeatString = function(string,num) {

    let total_string = "";
    if (num < 0){
        return "ERROR";
    }
    else {
        for (let i = 0; i < num; i++){
            total_string += string; 
        }
        return total_string;
    }

};


// Do not edit below this line
module.exports = repeatString;
