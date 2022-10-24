import { observer } from "mobx-react-lite";
import React from "react";
import { useBookStore } from "./BookStore";
import CheckOutForm from "./CheckOutForm";

// Page that represents all usage for Book components

function BookShop() {
    const { books } = useBookStore();
    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Stock</th>
                <th>Customer Checkout</th>
                <th>Customer Form</th>
                <th>Customer Return</th>
                <th>Stock Available to Checkout</th>
                <th>Collection</th>
            </tr>
            {books.map((book) => {
                return (
                    <tr key={book.title}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.yearAdded}</td>
                        <td>{book.stock}</td>
                        <td>{book.checkedOut}</td>
                        <td><CheckOutForm book={book}/></td>
                        <td>
                            <button type="button" style={{ width: "100%" }} onClick={() => book.bookReturned()}>
                                Return Book
                            </button>
                        </td>
                        <td>{book.available}</td>
                        <td>
                            <button type="button" style={{ width: "100%"}} onClick={() => book.amountCollected()}>
                                Add to collection
                            </button>
                        </td>
                    </tr>
                );
            })}
        </table>    //TODO add a total stock and available to show values change when book is collected/checkedout
    );
}

export default observer(BookShop);