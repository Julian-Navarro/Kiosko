import { useEffect, useState } from "react"
import s from "./FormProducts.module.css"
import store from '../../../zustand/store'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function FormProducts({ doGetProducts }) {
    let { id } = useParams();
    let { productById } = store((state) => state);
    const { suppliersNames, getSuppliersNames, addProduct, getProductById, putProductById } = store((state) => state)
    const navigate = useNavigate();
    let [expirationDateParts, setExpirationDateParts] = useState({
        expirationDate1: "",
        expirationDate2: "",
        expirationDate3: ""
    });

    const [product, setProduct] = useState({
        name: "",
        available: true,
        expirationDate: "",
        quantity: "",
        img: "",
        internalPrice: "",
        salePrice: "",
        supplier: "default",
        id: ""
    });

    function handlerChangeInput(e, inputId, nextInputId) {
        e.preventDefault();
        // console.log("HCI!!! ", e.target.name, e.target.value);
        if (e.target.name === "expirationDate1" ||
            e.target.name === "expirationDate2" ||
            e.target.name === "expirationDate3") {
            let currentInput = document.getElementById(inputId);
            let nextInput = document.getElementById(nextInputId);

            if (e.target.name === "expirationDate1" && currentInput?.value > 31) return alert("El día no puede ser mayor a 31")
            if (e.target.name === "expirationDate2" && currentInput?.value > 12) return alert("El mes no puede ser mayor a 12")

            if (currentInput?.value.length > currentInput?.maxLength) return nextInput?.focus();
            if (currentInput?.value.length === currentInput?.maxLength) {
                setExpirationDateParts({
                    ...expirationDateParts,
                    [e.target.name]: e.target.value
                });
                nextInput?.focus();
            } else {
                setExpirationDateParts({
                    ...expirationDateParts,
                    [e.target.name]: e.target.value
                });
            }


            return
        };

        if (e.target.name === "internalPrice" || e.target.name === "salePrice" || e.target.name === "quantity") {
            setProduct({
                ...product,
                [e.target.name]: Number(e.target.value)
            });
        } else {
            setProduct({
                ...product,
                [e.target.name]: e.target.value
            });
        }
        // console.log("HCI!!! final ", product);

    };
    const errors = {
        name: "",
        available: "",
        expirationDate: "",
        quantity: "",
        img: "",
        internalPrice: "",
        salePrice: "",
        supplier: "",
        id: ""
    };

    function validate() {
        if (product.name.trim() === "") errors.name = "El nombre no puede estar vacío.";
        if (product.name.trim().length > 50) errors.name = "El nombre no puede tener más de 50 carácteres.";
        if (product.expirationDate.trim() === "") errors.expirationDate = "El Vencimiento no puede estar vacío";
        if (product.img.trim() === "") errors.img = "No hay link de Img";
        if (product.internalPrice === "") errors.internalPrice = "El costo está vacío";
        if (product.internalPrice < 0) errors.internalPrice = "El costo no puede ser numero negativo";
        if (product.salePrice === "") errors.salePrice = "El Precio de venta está vacío";
        if (product.salePrice < 0) errors.salePrice = "Precio de venta no puede ser negativo";
        if (product.supplier === "default") errors.supplier = "El proovedor no puede estar vacío";
    };

    async function handlerSendProduct() {
        // console.log("EJECUTANDO handlerSendProduct!!");
        console.log("PRODUCT! ", product);
        validate();
        if (errors.name ||
            errors.expirationDate ||
            errors.img ||
            errors.internalPrice ||
            errors.salePrice ||
            errors.supplier) return alert(errors.name ||
                errors.expirationDate ||
                errors.img ||
                errors.internalPrice ||
                errors.salePrice ||
                errors.supplier)
        if (id === "newProduct") {
            await addProduct(product);
            alert("Producto creado con éxito");
            navigate("/");
        } else {
            await putProductById({ ...product, id });
            alert("Producto editado con éxito");
            await doGetProducts();
            navigate("/");
        }
    }

    useEffect(() => {
        setProduct({
            ...product,
            expirationDate: expirationDateParts.expirationDate1 + "-" + expirationDateParts.expirationDate2 + "-" + expirationDateParts.expirationDate3
        })

    }, [expirationDateParts]);

    useEffect(() => {
        getSuppliersNames();
    }, []);

    useEffect(() => {
        if (id && !productById.name && id !== "newProduct") {
            getProductById(id);
        }
        // console.log(product);
    }, [suppliersNames, product]);

    useEffect(() => {
        // console.log("productById!!!! ",productById);
        if (productById.name) {
            setProduct({
                name: productById.name,
                available: productById.available,
                expirationDate: productById.expirationDate,
                quantity: productById.quantity,
                img: productById.img,
                internalPrice: productById.internalPrice,
                salePrice: productById.salePrice,
                supplier: productById.name ? productById.suppliers[0].name : "default"
            });
            let actualDate = productById.expirationDate.split("-")
            setExpirationDateParts({
                expirationDate1: actualDate[0],
                expirationDate2: actualDate[1],
                expirationDate3: actualDate[2],
            })
        }
        return () => {
            setProduct({
                name: "",
                available: true,
                expirationDate: "",
                quantity: "",
                img: "",
                internalPrice: "",
                salePrice: "",
                supplier: "default"
            });
            setExpirationDateParts({
                expirationDate1: "",
                expirationDate2: "",
                expirationDate3: ""
            });
            productById = {};
        }
    }, [productById]);

    return (
        <div className={s.container}>
            <button className={s.btnBack} onClick={() => navigate("/")}>Volver</button>
            <div>
                <div>
                    <p>Nombre</p>
                    <input type="text" name="name" value={product.name} onChange={(e) => handlerChangeInput(e)} />
                </div>

                <div>
                    <p>Vencimiento (DD-MM-AA) (22-08-24)</p>
                    <div className={s.divInputsExpirationDate}>
                        <input type="number" name="expirationDate1" id="dd" maxLength={2} onChange={(e) => handlerChangeInput(e, "dd", "mm")} value={expirationDateParts.expirationDate1} />-
                        <input type="number" name="expirationDate2" id="mm" maxLength={2} onChange={(e) => handlerChangeInput(e, "mm", "yy")} value={expirationDateParts.expirationDate2} />-
                        <input type="number" name="expirationDate3" id="yy" maxLength={2} onChange={(e) => handlerChangeInput(e, "yy", "img")} value={expirationDateParts.expirationDate3} />
                    </div>
                </div>


                {/* <div>
                    <p>Cantidad</p>
                    <input type="number" id="quantity" name="quantity" value={product.quantity} onChange={(e) => handlerChangeInput(e)} />
                </div> */}
                <div>
                    <p>Imagen</p>
                    <input type="text" id="img" name="img" value={product.img} onChange={(e) => handlerChangeInput(e)} />
                </div>
                <div>
                    <p>Costo</p>
                    <input type="number" value={product.internalPrice} name="internalPrice" onChange={(e) => handlerChangeInput(e)} />
                </div>
                <div>
                    <p>Precio de venta</p>
                    <input type="number" name="salePrice" value={product.salePrice} onChange={(e) => handlerChangeInput(e)} />
                </div>
                <div>
                    <p>Proovedor</p>
                    <select type="text" name="supplier" value={product.supplier} key="selectSupplier" onChange={(e) => handlerChangeInput(e)}>
                        <option value="default" key="default" style={{ background: "#eeee" }}>No seleccionado</option>
                        {
                            suppliersNames.map((sup, i) => (
                                <option value={sup.name} key={sup.id} style={{ background: i % 2 === 0 ? "#fff" : "#eeee" }}>
                                    {sup.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                {/* <div>
                    <p>Disponible</p>
                    <input type="checkbox" name="available" checked/>
                </div> */}
                <div className={s.btn}>
                    <button onClick={() => handlerSendProduct()}>{id === "newProduct" ? "Registar" : "Editar"}</button>
                </div>
            </div>
        </div>
    )
}