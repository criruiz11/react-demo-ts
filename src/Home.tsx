import React, { Component, useReducer } from "react";
import HelloWorld from "./components/hello-world";
import Book from "./store/Book";
import BookShop from "./store/BookShop";
import { BookStoreProvider } from "./store/BookStore";
import NewBookForm from "./store/NewBookForm";

const book1 = new Book("Trials of Apollo", "Rick Riordan", 2017, 1);
const book2 = new Book("The Hunger Games", "Suzanne Collins", 2015, 1);
const book3 = new Book("Ready Player One", "Ernest Cline", 2019, 1);

function getBooksFromBackend(): Book[] {
    return [book1, book2, book3];
}

class Home extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { name: null};
    }

    componentDidMount() {
        fetch('/api/getName')
        .then(res => res.json())
        .then(user => this.setState({ name: user.name }))
    }

    render() {
        return (
            <div>
                <BookStoreProvider books={getBooksFromBackend()}>
                    <HelloWorld/>
                    <h1>BookShop List</h1>
                    <BookShop />
                    <h2>Add a book</h2>
                    <NewBookForm />
                </BookStoreProvider>
            </div>
        )
    }
}

export default Home;