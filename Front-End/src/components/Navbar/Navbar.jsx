import { useEffect } from "react"
import s from "./Navbar.module.css"
export default function Navbar({ setState, state }) {
    useEffect(() => { }, [state])
    return (
        <div className={s.container}>
            <button style={{ background: state === "Products" ? "#EB4338" : "#4FB83E" }}
                onClick={() => setState("Products")}>
                Productos
            </button>
            <button style={{ background: state === "Sales" ? "#EB4338" : "#4FB83E" }}
                onClick={() => setState("Sales")}>
                Ventas
            </button>
            <button style={{ background: state === "Suppliers" ? "#EB4338" : "#4FB83E" }}
                onClick={() => setState("Suppliers")}>
                Proovedores
            </button>
            <button style={{ background: state === "GenerateOrder" ? "#EB4338" : "#4FB83E" }}
                onClick={() => setState("GenerateOrder")}>Generar Pedido</button>
            <button style={{ background: state === "Checkout" ? "#EB4338" : "#4FB83E" }}
                onClick={() => setState("Checkout")}>
                Caja
            </button>
        </div>
    )
}