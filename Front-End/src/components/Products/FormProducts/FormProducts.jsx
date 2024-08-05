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
        getSuppliersNames()
    }, [])

    useEffect(() => {
        console.log(suppliersNames);
    }, [suppliersNames])

    return (
        <div className={s.container}>
            <div>
                <p>Proovedor</p>
                <select type="text">
                    <option value="">No seleccionado</option>
                    {
                        suppliersNames.map((sup) => (
                            <option value={sup.name}>{sup.name}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <p>Nombre</p>
                <input type="text" name="name" />
            </div>
            <div>
                <p>Disponible</p>
                <input type="text" name="available" />
            </div>
            <div>
                <p>Vencimiento (DD-MM-AA) (22-08-24)</p>
                <input type="text" name="expirationDate" />
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
        </div>
    )
}