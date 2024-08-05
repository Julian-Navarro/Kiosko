import s from "./Products.module.css";
import ExpiratedProducts from "./ExpiratedProducts/ExpiratedProducts";
import FormProducts from "./FormProducts/FormProducts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Products({ products }) {
    const navigate = useNavigate();
    const [displayForm, setDisplayForm] = useState(false);

    return (
        <div className={s.container}>
            <div className={s.btns}>
                <button onClick={() => setDisplayForm(!displayForm)}>{displayForm ? "Registrar Producto" : "Volver"}</button>
                {/* <button>Stock</button> */}
            </div>

            {
                displayForm
                    ? <FormProducts />
                    : <ExpiratedProducts products={products} />
            }
        </div>
    )
}