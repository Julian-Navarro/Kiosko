import { useEffect, useState } from "react";
import store from "../../zustand/store";
import s from "./GenerateOrder.module.css";


export default function GenerateOrders() {
    const { suppliersNames, getSuppliersNames, orders, getSuppliers, suppliers } = store((state) => state)
    let bebidas = suppliers?.filter((sup) => sup.category === "Bebidas");
    let golosinas = suppliers?.filter((sup) => sup.category === "Golosinas");
    let varios = suppliers?.filter((sup) => sup.category === "Varios");

    function handlerUpdateListFromSelect(e) {
        console.log("Producto - ", e);
        // document.getElementById()
    };
    
    function handlerUpdateList(e) {

    };

    function scrollView(idDestino, inputId) {
        let destino = document.getElementById(idDestino)
        destino?.scrollIntoView({
            behavior: 'smooth',  // Animación suave
            block: 'start'       // Alinear el elemento al inicio de la ventana
        });
        setTimeout(() => {
            document.getElementById(inputId).focus()
        }, 800)
    }

    useEffect(() => {
        getSuppliersNames();
        getSuppliers();
    }, []);

    useEffect(() => {
        console.log("suppliers!!", suppliers);
        console.log("orders!!!!!!", orders);
    }, [suppliersNames]);

    return (
        <div className={s.container}>
            <h1 className={s.supTitle}>Proveedores</h1>
            <div className={s.suppliersBtns}>
                <div>
                    <p>Golosinas</p>
                    <div>
                        {golosinas.map((sup) => (
                            <button key={sup.id}
                                onClick={() => scrollView(sup.name, sup.id)}>
                                {sup.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <p>Bebidas</p>
                    <div>
                        {bebidas.map((sup) => (
                            <button key={sup.id}
                                onClick={() => scrollView(sup.name, sup.id)}>
                                {sup.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <p>Varios</p>
                    <div>
                        {varios.map((sup) => (
                            <button key={sup.id}
                                onClick={() => scrollView(sup.name, sup.id)}>
                                {sup.name}
                            </button>
                        ))}
                    </div>
                </div>
                {/* {
                    suppliers && suppliers.map((sup) => (
                        <button className={s.supContainer} key={sup.id}>
                            {sup.name}
                        </button>
                    ))
                } */}
            </div>
            <div className={s.divOrders}>
                {
                    suppliers && suppliers.map((sup) => (
                        <div className={s.order} id={sup.name} key={sup.id}>
                            <h1>{sup.name}</h1>
                            <div className={s.divInput}>
                                <select onChange={(e) => handlerUpdateListFromSelect(e)}>
                                    <option value="default">Productos</option>
                                    {
                                        sup.products.map((product) => (
                                            <option value={product.name}>{product.name}</option>
                                        ))
                                    }
                                </select>
                                <input type="text" placeholder="Producto" id={sup.id} />
                                <input type="number" placeholder="Cantidad" />
                                <button onClick={(e)=> handlerUpdateList(e)}>Enviar</button>
                            </div>
                            <div className={s.divList}>
                                {
                                    sup.actualOrder && sup.actualOrder.map((item) =>
                                        <div key={item[1]} style={{ color: "#fff" }}>
                                            {`- ${item[0]} ${item[1]}`}
                                        </div>)
                                }
                            </div>
                            <button>Enviar Pedido</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}