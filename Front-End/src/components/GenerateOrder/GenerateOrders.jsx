import { useEffect, useState } from "react";
import store from "../../zustand/store";
import s from "./GenerateOrder.module.css";


export default function GenerateOrders() {
    const { suppliersNames, getSuppliersNames, orders} = store((state) => state)

    useEffect(() => {
        getSuppliersNames();
    }, [])
    useEffect(() => {
        console.log("suppliers!!", suppliersNames);
        console.log("orders!!!!!!", orders);
    }, [suppliersNames])

    return (
        <div className={s.container}>
            <h1 className={s.supTitle}>Proveedores</h1>
            <div className={s.suppliersBtns}>
                {
                    suppliersNames && suppliersNames.map((sup) => (
                        <button className={s.supContainer} key={sup.id}>
                            {sup.name}
                        </button>
                    ))
                }
            </div>
            <div className={s.divOrders}>
                {
                    suppliersNames && suppliersNames.map((sup) => (
                        <div className={s.order}>
                            <h1>{sup.name}</h1>
                            <div className={s.divInput}>
                                <input type="text" />
                                <button>Enviar</button>
                            </div>
                            <div className={s.divList}>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}