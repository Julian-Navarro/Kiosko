import s from "./Card.module.css"
import iconEdit from "../../../utils/Icons/edit-icon.png"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Card({ product: { name, id, available, expirationDate, quantity, img, internalPrice, salePrice, suppliers } }) {
    let navigate = useNavigate();
    return (
        <div className={s.container}>
            <h3>{name}</h3>
            <div className={s.box}>
                <img src={img} className={s.img} alt="..." />
                <div className={s.stats}>
                    <div style={{ justifyContent: "flex-end" }}>
                        <img src={iconEdit} onClick={()=>navigate(`/registerProduct/${id}`)}/>
                    </div>
                    <div>
                        <p>Disponible: </p>
                        <p>{available ? "Si" : "No"}</p>
                    </div>
                    <div>
                        <p>Vence: </p>
                        <p>{expirationDate}</p>
                    </div>
                    {/* <div>
                        <p>Stock: </p>
                        <p>{quantity}</p>
                    </div> */}
                    <div>
                        <p>Costo: </p>
                        <p>{internalPrice}</p>
                    </div>
                    <div>
                        <p>Precio: </p>
                        <p>{salePrice}</p>
                    </div>
                </div>
            </div>
            <div className={s.divSupplier}>
                <p>Proovedor:</p>
                <p style={{color: "green"}}>{suppliers? suppliers[0]?.name : null}</p>
            </div>
        </div>
    )
}