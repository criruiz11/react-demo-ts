import { makeAutoObservable } from "mobx";
import React, { useContext, useRef } from "react";
import Book from "./Book";

// Mobx Store that provides the single Store context that is able to be extended to multiple classes

export default class BookStore {
    constructor(Books: Book[]) {
        this.books = Books;
        makeAutoObservable(this);
    }
    
    books: Book[] = [];

    // computed value that keeps track of total books in store
    get totalBooksInStock(): number {
        
        return this.books.reduce(
            (totalStock, currentBook) => totalStock + currentBook.stock,
            0
        );

    }

    // action to add another book to store
    addBook = (book: Book) => {
        console.log(book + "was added")
        this.books.push(book);
    }
}

const BookStoreContext = React.createContext<BookStore>(
    null as unknown as BookStore
);

export const useBookStore = () => useContext(BookStoreContext)

type Props = {
    children: React.ReactNode;
    books: Book[];
};

// functionality that exports Provider that allows wrapped class/functions to access data from store
export function BookStoreProvider({ children, books}: Props) {
    const store = useRef(new BookStore(books));

    return (
        <BookStoreContext.Provider value={store.current}>
            {children}
        </BookStoreContext.Provider>
    )
}
