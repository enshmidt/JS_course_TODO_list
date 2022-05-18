/**
 * Change the capitalization of all letters in a string
 */
export const changeCase = (oldString) => {
    var changedString = "";
    [...oldString].forEach(element => {
        if (element !== element.toUpperCase()) {
            changedString += element.toUpperCase();
        } else {
            changedString += element.toLowerCase();
        }
    });;
    return changedString;
};

/**
 * Filter out the non-unique values in an array
 */
export const filterNonUnique = (initArray) => {
    let unicArray = [];
    let mapping = new Map();
    for (let element of initArray) {
        if (!mapping.get(element)) {
            mapping.set(element, 1)
        } else {
            mapping.set(element, mapping.get(element) + 1);
        }
    }
    for (let [key, value] of mapping) {
        value != 1 ? mapping.delete(key) : unicArray.push(key);
    }
    return unicArray;
};

/**
 * Sort string in alphabetical order
 */
export const alphabetSort = (inputString) => {
    if (typeof inputString != "string") {
        throw "Wrong format!";
    } else {
        return inputString.split("").sort().join('');
    }
};

/**
 * Get min integer
 */
export const getSecondMinimum = (numArray) => {
    let set = new Set(numArray.sort());
    return Array.from(set)[1];
};

/**
 * Double every even integer
 * should get array of integers and return another array of integers where every even number is doubled
 */
export const doubleEveryEven = (initArray) => {
    let doubledArray = [];
    initArray.forEach(element => {
        element % 2 == 0 ? doubledArray.push(element * 2) : doubledArray.push(element);
    });
    return doubledArray;
};

/**
 * Create array with all possible pairs of two arrays
 * should get two arrays and return array containing each possible pair from the arrays
 */
export const getArrayElementsPairs = (first, second) => {
    let outputArray = [];
    for (let i = 0; i < first.length; i++) {
        for (let y = 0; y < second.length; y++) {
            let inner = [first[i], second[y]];
            outputArray.push(inner);
        }
    }
    return outputArray;
};

/**
 * Deep equal
 * should get two values and returns true only if they are the same value or are objects with the same properties, 
 * where the values of the properties are equal
 */
export const deepEqual = (obj1, obj2) => {

    var result = true;

    if (obj1 === obj2) {
        return result;
    } else {
        result = compareObjects(obj1, obj2);
    };

    function compareObjects(obj1, obj2) {
        const props1 = Object.getOwnPropertyNames(obj1);
        const props2 = Object.getOwnPropertyNames(obj2);

        if (props1.length !== props2.length) {
            result = false;
            return result;
        }
        for (let element in props1) {
            const value1 = obj1[props1[element]]
            const value2 = obj2[props2[element]]
            const key1 = props1[element];
            const key2 = props2[element];

            if (!(props2.includes(key1) || props1.includes(key2))) {
                result = false;
                return result;
            }
            if (key1 != key2) {
                result = false;
                return result;
            }
            if (typeof value1 !== typeof value2) {
                result = false;
                return result;
            }
            if (typeof value1 == "object" && typeof value2 == "object") {
                compareObjects(value1, value2);
            }
        }
        return result;
    }
    return result;
};

/**
 * Format date
 * should take parameter of different types and returns date in ‘dd.mm.yy’ format
 */
export const formatDate = (someDateProbably) => {
    try {
        if (someDateProbably instanceof Array) {
            console.log("Instance of Array")
            const dateStr = new Date(someDateProbably[0], someDateProbably[1], someDateProbably[2]).toISOString();
            return parseDateString(dateStr);
        } else if (someDateProbably != null && new Date(someDateProbably) instanceof Date && new Date(someDateProbably) != "Invalid Date") {
            console.log("Instance of Date")
            const dateStr = new Date(someDateProbably).toISOString();
            return parseDateString(dateStr);
        } else if (someDateProbably == null || new Date(someDateProbably) == "Invalid Date") {
            return NaN;
        }
    } catch {
        return NaN;
    }

    function parseDateString(dateStr) {
        const splittedData = dateStr.split("T")[0].split("-");
        let date = splittedData[2];
        let month = splittedData[1];
        let year = splittedData[0].substring(2);
        return `${date}.${month}.${year}`;
    }

};