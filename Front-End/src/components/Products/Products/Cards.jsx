import s from "./Cards.module.css";
import Card from "./Card";
import ExpiratedProducts from "./ExpiratedProducts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cards({ products }) {
    let navigate = useNavigate()
    function scrollView() {
        let destino = document.getElementById("expiratedProducts")
        destino?.scrollIntoView({
            behavior: 'smooth',  // Animación suave
            block: 'start'       // Alinear el elemento al inicio de la ventana
        });

    }
    useEffect(()=>{},[products])
    return (
        <div className={s.container}>
            <div className={s.btns}>
                <button onClick={() => navigate("/registerProduct/newProduct")}>Registrar Producto</button>
                <button onClick={()=>scrollView()}>Próximos a vencer</button>
            </div>
            <div className={s.cardsContainer}>

                {
                    products?.map((product) => (
                        <Card key={product.id}
                            product={product} />
                    ))
                }
            </div>
            <ExpiratedProducts products={products}/>
        </div>
    )
}