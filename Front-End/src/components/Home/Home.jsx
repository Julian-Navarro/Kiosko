import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Sales from "../Sales/Sales";
import GenerateOrder from "../GenerateOrder/GenerateOrders";
import Suppliers from "../Suppliers/Suppliers";
import Checkout from "../Checkout/Checkout";

export default function Home({ products }) {
    const [state, setState] = useState("Products")

    return (
        <>
            <Navbar setState={setState} state={state} />
            {
                state === "Products" && <Products products={products}/>
            }
            {
                state === "Sales" && <Sales/>
            }
            {
                state === "Suppliers" && <Suppliers />
            }
            {
                state === "GenerateOrder" && <GenerateOrder/>
            }
            {
                state === "Checkout" && <Checkout/>
            }
        </>
    )
};