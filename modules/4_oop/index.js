/**
 * Point
 * Write a class called Point, which represents a point in two-dimensional space. 
 * A point has x and y properties, given as arguments to its constructor. 
 * It also has a single method plus, which takes another point and returns the sum of the two points, 
 * that is, a new point whose x is the sum of the x properties of the two original points, and whose y is the sum of their y properties. 
 *
 * @param {number} x
 * @param {number} y
 */
export class Point {
    constructor(x, y) {
        if(x == null || y == null) {
            throw "null value"
        }
        this.x = x;
        this.y = y;
    }

    plus(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

/**
 * Speaker and Screamer ES5
 * Write two classes, which are called Speaker and Screamer. 
 * Speaker is a simple type that exposes a speak method which, when called, 
 * logs the given text along with the speaker's name. 
 * Shouter is a subtype of Speaker which shouts its text and makes it uppercase. 
 */
export function SpeakerES5(name) {
    if(name == null) {
        throw "Please, introduce yourself"
    }
    this.name = name;
}

SpeakerES5.prototype.speak = function(someText) {
    console.log(`${this.name} says ${someText}`);
}

export function ScreamerES5(name) {
    SpeakerES5.call(this, name);
}

ScreamerES5.prototype = Object.create(SpeakerES5.prototype)

ScreamerES5.prototype.speak = function(someText) {
    console.log(`${this.name} shouts ${someText.toUpperCase()}`)
}

/**
 * Speaker and Screamer ES6
 */
export class SpeakerES6 {
    constructor(name) {
        if (!name) {
            throw "Please, introduce yourself"
        }
        this.name = name;
    }
    speak(someText) {
        console.log(`${this.name} says ${someText}`);
    }
}

export class ScreamerES6 extends SpeakerES6 {
    speak(someText) {
        console.log(`${this.name} shouts ${someText.toUpperCase()}`)
    }
}

/**
 * The Reading list
 */
export class BookList {
    constructor() {
        this.booksFinished = 0;
        this.booksNotFinished = 0;
        this.nextBook = null;
        this.currentBook = null;
        this.lastBook = null;
        this.books = [];
    }

    add(book) {
        if (!(book instanceof Book)) { 
            throw new Error("Wrong argument")
        }
        this.books.length == 0 ? this.currentBook = book : this.currentBook;
        this.books.push(book);
        // this.booksNotFinished += 1;
        this.booksNotFinished += 1 === 1 ? this.nextBook = book : this.nextBook;
    }

    finishCurrentBook() {
        this.currentBook.markAsRead();
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.booksFinished += 1;
        this.nextBook = this.booksNotFinished -= 1 ? this.books[this.booksFinished + 1] : null;
    }
}
export class Book {
    constructor({title, genre, author, isRead, dateFinished}) {
        if(title == null) {
            throw new Error("No title");
        }
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead ? isRead : false;
        this.dateFinished = dateFinished ? dateFinished : null;
        
    }
    markAsRead() {
        this.isRead = true;
        this.dateFinished = new Date(Date.now())
    }
}

/*
.finishCurrentBook()
*  Change the next book to be read property to be the first unread book you find in the list of books 
*/