import { makeObservable, observable, action } from "mobx";

// Base class for use in Mobx

class Book {
    title: string;
    author: string;
    yearAdded: number;
    stock: number;
    available: number;
    checkedOut: string[];

    constructor(title: string, author: string, year: number, stock: number) {
        this.title = title;
        this.author = author;
        this.yearAdded = year;
        this.stock = stock;
        this.available = this.stock;
        this.checkedOut = [];

        makeObservable(this, {
            title: observable,
            author: observable,
            yearAdded: observable,
            stock: observable,
            available: observable,
            checkedOut: observable,
            amountCollected: action,
            bookCheckedOut: action,
            bookReturned: action,
        })
    }

    amountCollected() {
        this.stock++;
        this.available++;
    }

    bookCheckedOut(customer: string){
        if (this.checkedOut.length === 0)
            this.checkedOut.push(customer)

        else
            this.checkedOut.push(", " + customer)

        this.available--;
    }

    bookReturned(){
        this.checkedOut.pop();
        this.available++;
    }
}

export default Book;