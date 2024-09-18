import { useEffect, useState } from "react"
import s from "./FormProducts.module.css"
import store from '../../../zustand/store'

export default function FormProducts() {
    const { suppliersNames, getSuppliersNames } = store((state) => state)
    const [product, setProduct] = useState({
        name: "",
        available: false,
        expirationDate: "",
        quantity: 0,
        img: "",
        internalPrice: 0,
        salePrice: 0,
    });

    useEffect(() => {
        getSuppliersNames();
    }, [])

    useEffect(() => {
        console.log(suppliersNames);
    }, [suppliersNames])

    return (
        <div className={s.container}>
                <div>
                    <p>Nombre</p>
                    <input type="text" name="name" />
                </div>

                <div>
                    <p>Vencimiento (DD-MM-AA) (22-08-24)</p>
                    <input type="text" name="expirationDate" onClick={() => { }} />
                </div>
                <div>
                    <p>Cantidad</p>
                    <input type="number" name="quantity" />
                </div>
                <div>
                    <p>Imagen</p>
                    <input type="text" name="img" />
                </div>
                <div>
                    <p>Costo</p>
                    <input type="number" name="internalPrice" />
                </div>
                <div>
                    <p>Precio de venta</p>
                    <input type="number" name="salePrice" />
                </div>
                <div>
                    <p>Proovedor</p>
                    <select type="text">
                        <option value="" style={{ background: "#eeee" }}>No seleccionado</option>
                        {
                            suppliersNames.map((sup, i) => (
                                <option value={sup.name} style={{ background: i % 2 === 0 ? "#fff" : "#eeee" }}>
                                    {sup.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <p>Disponible</p>
                    <input type="checkbox" name="available" />
                </div>
        </div>
    )
}