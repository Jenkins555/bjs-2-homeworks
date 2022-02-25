class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;


    }

    fix() {
        (this.state *= 1.5).toFixed(2);
        return +this.state;
    }

    get state() {
        return this._state
    }

    set state(value) {
        if (value > 100) {
            this._state = 100;
        } else if (value < 0) {
            this._state = 0;
        } else {
            this._state = value;
        }
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}


class Book extends PrintEditionItem {
    constructor(author, ...args) {
        super(...args);
        this.author = author;
        this.type = "book";
    }
}


class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "detective";
    }
}

class Library {
    constructor(name = "", books = []) {
        this.name = name;
        this.books = books;
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) { ///поиск
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }

        return null;


    }


    giveBookByName(bookName) {
        let x = this.books.find((book) => book.name === bookName);
        console.log(x);
        let i = this.books.indexOf(x);
        console.log(i);
        console.log(bookName);
        if (x >= 0) {
            this.books.splice(i, 1);
           return x;
            
        } else if (x === -1){
            return null;
        }




    }
}






