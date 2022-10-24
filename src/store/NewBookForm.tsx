import { action, observable } from "mobx";
import { observer } from "mobx-react-lite"
import React from "react";
import Book from "./Book";
import { useBookStore } from "./BookStore";

// Bookstore New book creation functionality

type FormState = {
  title: string;
  author: string;
  year: number;
}

const initialState: FormState = {
  title: "",
  author: "",
  year: 0,
};


let formState: FormState = observable({
  title: "",
  author: "",
  year: 0,
});

function NewBookForm() {
    const { totalBooksInStock, addBook } = useBookStore();

    return (
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Total Books at BookStore: {totalBooksInStock}</th>
        </tr>
        <tr>
        <th>
            <input 
                type="text"
                placeholder="Name of Book"
                style={ {height: "40px"} }
                value={formState.title}
                onChange={action((e) => {
                  formState.title = e.target.value;  
                })}
            />
          </th>
          <th>
            <input 
                type="text"
                placeholder="Name of Author"
                style={ {height: "40px"} }
                value={formState.author}
                onChange={action((e) => {
                  formState.author = e.target.value;
                })}
            />
          </th>
          <th>
            <input 
                type="number"
                placeholder="Year of Book"
                style={ {height: "40px"} }
                value={formState.year}
                onChange={action((e) => { 
                  formState.year = e.target.valueAsNumber;
                })}
            />
          </th>
          <th>
          <span>
                <button type="button" 
                  onClick={action(() => {
                  addBook(
                    new Book(formState.title, formState.author, formState.year, 1)
                    );
                    formState = initialState;
                  })}
                >
                    Add Book
                </button>
            </span>
          </th>
        </tr>
      </table>  
    )
}

export default observer(NewBookForm);