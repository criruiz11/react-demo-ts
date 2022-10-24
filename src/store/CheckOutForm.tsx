import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import Book from "./Book";

// Book checkout functionality 

type Props = {
    book: Book
};

function CheckOutForm({book}: Props) {
    
    const [customerName, setCustomerName] = useState<string>("");

    return (
        <>
            <input 
                type="text"
                placeholder="Name of customer"
                style={ {height: "40px"} }
                onChange={(e) => setCustomerName(e.target.value)}
            />
            <span>
                <button type="button" onClick={() => book.bookCheckedOut(customerName)}>
                    Check Out
                </button>
            </span>
        </>
    );

}

export default observer(CheckOutForm);