const sumAll = function(first,second) {
    //declare variables
    let sum = 0;
    let bigger = 0;
    let smaller = 0;

    //error handling
    if (first < 0 || second < 0){
        return "ERROR";
    }
    else if(!Number.isInteger(first) || !Number.isInteger(second)){
        return "ERROR";
    }
    else{
        //sort numbers in case first number is the larger number
        if (first < second){
            smaller = first;
            bigger = second;
        }
        else{
            bigger = first;
            smaller = second;
        }

        for (i = smaller; i <= bigger; i++){
            sum += i;
        }    
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
