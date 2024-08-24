import s from "./ExpiratedProducts.module.css";
import CardExpiratedProduct from "./CardExpiratedProduct";
import { useEffect, useState } from "react";

export default function ExpiratedProducts({ products }) {
    let date = new Date();
    let [day, setDay] = useState(date.getDate());
    let [month, setMonth] = useState(date.getMonth() + 1 + 2);
    let [year, setYear] = useState(date.getFullYear() % 100);

    function handlerChangeDay(e) {
        if (e.target.value.length <= 2 && Number(e.target.value) <= 31) {
            setDay(Number(e.target.value));
        }
    }
    function handlerChangeMonth(e) {
        if (e.target.value.length <= 2 && Number(e.target.value) <= 12) {
            setMonth(Number(e.target.value));
        }
    }
    function handlerChangeYear(e) {
        if (e.target.value.length <= 2) {
            setYear(Number(e.target.value));
        }
    }

    let filteredProducts = products?.filter((pr) => {
        let expDay = pr.expirationDate.split("-");
        let yearIs = ""
        let monthIs = ""
        let dayIs = ""
        if (Number(expDay[2]) === year) {
            yearIs = "equal"
        } else if (Number(expDay[2]) < year) {
            yearIs = "lower"
        } else {
            yearIs = "higher"
        }

        if (Number(expDay[1]) === month) {
            monthIs = "equal"
        } else if (Number(expDay[1]) < month) {
            monthIs = "lower"
        } else {
            monthIs = "higher"
        }

        if (Number(expDay[0]) === day) {
            dayIs = "equal"
        } else if (Number(expDay[0]) < day) {
            dayIs = "lower"
        } else {
            dayIs = "higher"
        }

        if (yearIs === "higher") return false;
        if (yearIs === "lower") return true;
        if (monthIs === "higher") return false;
        if (monthIs === "lower") return true;
        if (dayIs === "higher") return false;
        if (dayIs === "lower" || dayIs === "equal") return true;
    });

    useEffect(() => { }, [day, month, year])

    return (
        <div className={s.container}>
            <p>Productos próximos a vencer</p>
            <div className={s.containerSetDays}>
                <div >
                    <p>Día</p>
                    <input type="number"
                        onChange={(e) => handlerChangeDay(e)}
                        value={day}
                    />
                </div>

                <div>
                    <p>Mes</p>
                    <input type="number"
                        onChange={(e) => handlerChangeMonth(e)}
                        value={month}
                    />
                </div>

                <div>
                    <p>Año</p>
                    <input type="number"
                        onChange={(e) => handlerChangeYear(e)}
                        value={year}
                    />
                </div>
            </div>
            <p>{filteredProducts?.length ? "Productos encontrados" : `No se encontraron productos con vencimiento anterior al ${day + "-" + month + "-" + year}`}</p>
            <div className={s.cardsContainer}>

                {
                    filteredProducts?.map((product) => (
                        <CardExpiratedProduct key={product.id}
                            product={product} />
                    ))
                }
            </div>
        </div>
    )
}