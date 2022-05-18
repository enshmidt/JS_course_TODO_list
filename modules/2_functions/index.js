/**
 * Currying 
 */
export const mergeWords = (inputString) => {
    return (nextString) => typeof nextString === 'undefined' ? inputString : mergeWords(inputString + ' ' + nextString);
}

/**
 * Every/Some
 * Write a JavaScript function that takes a list of valid users, 
 * and returns a function that returns true if 
 * all of the supplied users exist in the original list of users. 
 * You need to check only user ids, no need to check objects in depth
 */
export const checkUsersValid = (validUsersList) => {
    return (listToCheck) => {
        return listToCheck.every(checkedItem => validUsersList.some(validItem => validItem.id == checkedItem.id));
    };
};

/**
 * Reduce 
 * Write a function that returns an object which contains the number of times each string occured in the array.
 */
export const countWords = (incommingArray) => {
    return incommingArray.reduce((result, item) => {
        result[item] ? result[item] = result[item] + 1 : result[item] = 1;
        return result;
    }, {});
}

/**
 * Palindrome 
 */
export const isPalindrome = (entryString) => {
    return entryString === Array.from(entryString).reverse().join("") ? 'The entry is a palindrome' : 'Entry is not a palindrome';
};

/**
 * Recursion 
 */
/**
 * Write a factorial function that takes a positive integer N as a parameter 
 * and prints the result of N! (factorial). 
 */
export const factorial = (positiveInteger) => {
    if (typeof positiveInteger != 'number' || positiveInteger <= 0) {
        return "Wrong format!";
    }
    return positiveInteger == 1 ? positiveInteger : positiveInteger * factorial(positiveInteger - 1);
    
};

/**
 * Write a function to convert an amount to coins 
 */
export const amountToCoins = (amount, coins) => {
    let result = [];
    let sortedCoins = coins.sort((a, b) => b - a);
    reduce(amount, sortedCoins);
    function reduce(summ, nominals) {
        if (summ > 0 && summ >= nominals[0]) {
            result.push(nominals[0]);
            reduce(summ - nominals[0], nominals);
        } else if (summ > 0 && summ < nominals[0]) {
            nominals.shift();
            reduce(summ, nominals);
        } else if (summ == 0 || nominals.length == 0) {
            return result;
        }
    }
    return result;
};

/**
 * Write a function using recursion that takes a function as its first argument,
 *  a number num as its second argument, then executes the passed in function num times.
 */
export const repeat = (func, numb) => {
    func.apply();
    if (numb >= 1) {repeat(func, numb - 1);}
};

/**
 * Implement Array reduce function. 
 * For simplicity, your implementation of reduce doesn't need to replicate the behaviour 
 * of a reduce missing an initial value. You may assume the initial value will always be supplied.
 */
export const reduce = (initArray) => {
    let sum = 0;
    function inner(arr) {
        if (arr.length != 0) {
            sum += arr[0];
            arr.shift();
            inner(arr);
        }
    return sum;
    }
    return inner(initArray);
};
