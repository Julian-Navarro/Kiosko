import s from "./Products.module.css";
import Cards from "./Products/Cards";
import { useState } from "react";

export default function Products({ products }) {

    return (
        <div className={s.container}>
            <Cards products={products} />
        </div>
    )
}