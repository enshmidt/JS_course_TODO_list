/**
 * Array to List
 */
export const arrayToList = (someArray) => {
    return {value: someArray.shift(),
            rest: someArray.length == 0? null : arrayToList(someArray)
        };
};

export const listToArray = (someList) => {
    const resultArray = [];
    while (someList != null) {
        resultArray.push(someList.value);
        someList = someList.rest;
    }
    return resultArray;
};

/**
 * Keys and values to list
 * Write a function to convert an object into a list of '[key, value]' pairs
 */
export const getKeyValuePairs = (someObject) => Object.entries(someObject);

/**
 * Invert keys and values
 * Write a function to get a copy of the object where the keys have become the values and the values the keys
 */
export const invertKeyValue = (someObject) => Object.fromEntries(Object.entries(someObject).map(arr => [arr[1], arr[0]]));

/**
 * Get all methods from object
 *
 */
export const getAllMethodsFromObject = (someObject) => {
    return Object.getOwnPropertyNames(someObject).filter(property => typeof someObject[property] === 'function');
};

/**
 * Clock
 * Write a JS class with two methods run and stop. 
 * First methods starts displaying current time in console in format ‘hh:mm:ss’ every second starting from now. 
 * Second method stops it. In order to complete the task, you should create a class with methods in ES5 style. 
 */
export function Clock() {
}

Clock.prototype.run = function () {
    this.timer = setInterval(() => console.log(new Date(0).toLocaleTimeString('RU')), 1000);
}

Clock.prototype.stop = function () {
    clearInterval(this.timer);
}

/**
 * Groups
 * Write a class called Group, which has add, delete and has methods. 
 * Its constructor creates an empty group, add adds a value to the group 
 * (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), 
 * and has returns a Boolean value indicating whether its argument is a member of the group. 
 * Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same. 
 * Give the class a static from method that takes an iterable object as argument 
 * and creates a group that contains all the values produced by iterating over it.
 * Here you may use ES6 syntax. 
 */
export class Groups {
    _group = []

    constructor() {
        this._group = []
    }

    static from(someArgs) {
        let newGroup = new Groups();
        someArgs.forEach(arg => newGroup.add(arg));
        return newGroup;
    }

    add(someValue) {
        if (!this._group.includes(someValue)) {
            this._group.push(someValue);
        }
    }

    delete(someValue) {
        if (this._group.includes(someValue)) {
            this._group.splice(this._group.indexOf(someValue), 1);
        }
    }

    has(someValue) {
        return this._group.includes(someValue);
    }

    get length() {
        return this._group.length;
    }
}
