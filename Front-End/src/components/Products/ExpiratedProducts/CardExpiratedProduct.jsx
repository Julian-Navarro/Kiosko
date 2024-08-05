import s from "./CardExpiratedProduct.module.css"
export default function CardExpiratedProduct({ product: { name, id, available, expirationDate, quantity, img, internalPrice, salePrice, suppliers } }) {
    return (
        <div className={s.container}>
            <h3>{name}</h3>
            <div className={s.box}>
                <img src={img} className={s.img} alt="..." />
                <div className={s.stats}>
                    <div>
                        <p>Disponible: </p>
                        <p>{available ? "Si" : "No"}</p>
                    </div>
                    <div>
                        <p>Vence: </p>
                        <p>{expirationDate}</p>
                    </div>
                    <div>
                        <p>Stock: </p>
                        <p>{quantity}</p>
                    </div>
                    <div>
                        <p>Costo: </p>
                        <p>{internalPrice}</p>
                    </div>
                    <div>
                        <p>Precio: </p>
                        <p>{salePrice}</p>
                    </div>
                    <div>
                        <p>Proovedor: </p>
                        <p>{suppliers[0]?.name}</p>
                    </div>






                </div>
            </div>
        </div>
    )
}