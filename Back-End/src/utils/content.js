//PRODUCTS
let products = [{
    "name": "Mogul Gomitas Cerebritos x40grs",
    "available": true,
    "expirationDate": "15-08-24",
    "quantity": 7,
    "img": "https://hiperlibertad.vtexassets.com/arquivos/ids/163961/Goma-Mogul-cerebritos-30-Gr-1-8001.jpg?v=637291523571600000",
    "internalPrice": 222.5,
    "salePrice": 500,
    "supplier": "Arcor Javi"
},
{
    "name": "Chocolate Coffler Air Blanco x27grs",
    "available": true,
    "expirationDate": "25-08-24",
    "quantity": 5,
    "img": "https://http2.mlstatic.com/D_NQ_NP_960268-MLA46925540292_072021-O.webp",
    "internalPrice": 655,
    "salePrice": 1100,
    "supplier": "Arcor Seba"
},
{
    "name": "Chocolate Coffler Air Negro x27grs",
    "available": true,
    "expirationDate": "12-09-24",
    "quantity": 12,
    "img": "https://www.oxfordlibreria.com.ar/media/catalog/product/cache/5a38f6614905178fa07804facc7b33a0/7/7/7790580103361_20210206130010.jpg",
    "internalPrice": 655,
    "salePrice": 1100,
    "supplier": "Arcor Seba"
},
{
    "name": "Chocolate Coffler Air Mixto x27grs",
    "available": true,
    "expirationDate": "02-09-24",
    "quantity": 6,
    "img": "https://carrefourar.vtexassets.com/arquivos/ids/173429/7790580103385_02.jpg?v=637468554406070000",
    "internalPrice": 655,
    "salePrice": 1100,
    "supplier": "Arcor Seba"
},
{
    "name": "Chocolate Coffler Air Bon o Bon x30grs",
    "available": true,
    "expirationDate": "12-08-24",
    "quantity": 4,
    "img": "https://arcorencasa.com/wp-content/uploads/2023/06/20230524-12921.jpg",
    "internalPrice": 655,
    "salePrice": 1100,
    "supplier": "Arcor Seba"
},
{
    "name": "Huevo kinder",
    "available": true,
    "expirationDate": "27-10-24",
    "quantity": 3,
    "img": "https://http2.mlstatic.com/D_NQ_NP_911950-MLA73841670120_012024-O.webp",
    "internalPrice": 1350.5,
    "salePrice": 2100,
    "supplier": "Al Kiosco Fabrizio"
},
{
    "name": "Alfajor Guaymallen Negro Simple",
    "available": true,
    "expirationDate": "11-08-24",
    "quantity": 40,
    "img": "https://alpuntodeventa.com.ar/wp-content/uploads/0373-Alfajor-Guaymallen-Simple-de-Chocolate-x38grs-1.jpg",
    "internalPrice": 154.6,
    "salePrice": 250,
    "supplier": "Rana"
},
{
    "name": "Alfajor Guaymallen Blanco Simple",
    "available": true,
    "expirationDate": "15-12-24",
    "quantity": 40,
    "img": "https://alpuntodeventa.com.ar/wp-content/uploads/0372-Alfajor-Guaymallen-Simple-de-Dulce-de-Leche-x38grs-1.jpg",
    "internalPrice": 154.6,
    "salePrice": 250,
    "supplier": "Rana"
}
]

let suppliers = [
    {
        "name": "Arcor Javi",
        "deliveryDays": ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
        "minimumPurchase": "0",
        "annotations": "Se le paga en efectivo en el momento de la entrega",
        "allowCount": false,
        "transactions": {
            "currentCount": 0,
            "transactionsInfo": [],
            "purchases": []
        }
    },
    {
        "name": "Arcor Seba",
        "deliveryDays": ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
        "minimumPurchase": "0",
        "annotations": "Se le paga en efectivo en el momento de la entrega",
        "allowCount": false,
        "transactions": {
            "currentCount": 0,
            "transactionsInfo": [],
            "purchases": []
        }
    },
    {
        "name": "Al Kiosko Fabrizio",
        "deliveryDays": ["Viernes"],
        "minimumPurchase": "0",
        "annotations": "Se le paga en efectivo en el momento de la entrega",
        "allowCount": false,
        "transactions": {
            "currentCount": 0,
            "transactionsInfo": [],
            "purchases": []
        }
    },
    {
        "name": "Rana",
        "deliveryDays": ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        "minimumPurchase": "0",
        "annotations": "Se le puede pagar por mercado pago y permite tener una cuenta",
        "allowCount": true,
        "transactions": {
            "currentCount": 0,
            "transactionsInfo": [],
            "purchases": [
                {
                    "date": "28-06-24",
                    "amount": 19808,
                    "paid": 19810,
                    "items": [{
                        "name": "Biyu pastillas",
                        "available": true,
                        "expirationDate": "11-08-24",
                        "quantity": 12,
                        "img": "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/0/f/6/0f654422fd30c1809d3ae5824ea693c9",
                        "internalPrice": 620,
                        "salePrice": 1000,
                        "supplier": "Rana"
                    },
                    {
                        "name": "Alfajor Guaymallen Negro Simple",
                        "available": true,
                        "expirationDate": "11-08-24",
                        "quantity": 40,
                        "img": "https://alpuntodeventa.com.ar/wp-content/uploads/0373-Alfajor-Guaymallen-Simple-de-Chocolate-x38grs-1.jpg",
                        "internalPrice": 154.6,
                        "salePrice": 250,
                        "supplier": "Rana"
                    },
                    {
                        "name": "Alfajor Guaymallen Blanco Simple",
                        "available": true,
                        "expirationDate": "15-10-24",
                        "quantity": 40,
                        "img": "https://alpuntodeventa.com.ar/wp-content/uploads/0372-Alfajor-Guaymallen-Simple-de-Dulce-de-Leche-x38grs-1.jpg",
                        "internalPrice": 154.6,
                        "salePrice": 250,
                        "supplier": "Rana"
                    }]
                }
            ]
        }
    },
    {
        "name": "Adales",
        "deliveryDays": ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        "minimumPurchase": "40000",
        "annotations": "Se le paga en efectivo en el momento de la entrega",
        "allowCount": false,
        "transactions": {
            "currentCount": 0,
            "transactionsInfo": [],
            "purchases": []
        }

    },
    {
        "name": "Coca-Cola",
        "deliveryDays": ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        "minimumPurchase": "0",
        "annotations": "Se le paga en efectivo en el momento de la entrega",
        "allowCount": false,
        "transactions": {
            "currentCount": 0,
            "transactionsInfo": [],
            "purchases": []
        }
    },
    {
        "name": "Silvio",
        "deliveryDays": ["Viernes"],
        "minimumPurchase": "0",
        "annotations": "Se le puede pagar por mercado pago y permite tener una cuenta",
        "allowCount": true,
        "transactions": {
            "currentCount": 0,
            "transactionsInfo": [
                {
                    "paid": 110000,
                    "amount": 100000,
                    "date": "28-06-24"
                },
                {
                    "paid": 84000,
                    "amount": 84000,
                    "date": "20-05-24"
                }
            ],
            "purchases": [
                {
                    "amount": 110000,
                    "paid": 0,
                    "items": [
                        {
                            "name": "varios",
                            "available": true,
                            "expirationDate": "22-12-24",
                            "quantity": 40,
                            "img": "",
                            "internalPrice": 84000,
                            "salePrice": 0,
                            "supplier": "Silvio"
                        }
                    ]
                },
                {
                    "amount": 84000,
                    "paid": 0,
                    "items": [
                        {
                            "name": "varios",
                            "available": true,
                            "expirationDate": "22-12-24",
                            "quantity": 40,
                            "img": "",
                            "internalPrice": 84000,
                            "salePrice": 0,
                            "supplier": "Silvio"
                        }
                    ]
                }
            ]
        }
    },
    {
        "name": "Cigarrillos Norberto",
        "deliveryDays": ["Lunes", "Miercoles", "Viernes"],
        "minimumPurchase": "0",
        "annotations": "Se le puede pagar por mercado pago y permite tener una cuenta",
        "allowCount": true,
        "transactions": {
            "currentCount": -250000,
            "transactionsInfo": [
                {
                    "paid": 100000,
                    "amount": 54000,
                    "date": "30-06-24"
                },
                {
                    "paid": 100000,
                    "amount": 66000,
                    "date": "27-06-24"
                }
            ],
            "purchases": [
                {
                    "amount": 66000,
                    "paid": 0,
                    "items": [
                        {
                            "name": "Varios",
                            "available": true,
                            "expirationDate": "11-08-2025",
                            "quantity": 0,
                            "img": "",
                            "internalPrice": 54000,
                            "salePrice": 0,
                            "supplier": "Cigarrillos Norberto"
                        },
                        {
                            "name": "Varios",
                            "available": true,
                            "expirationDate": "11-08-2025",
                            "quantity": 0,
                            "img": "",
                            "internalPrice": 66000,
                            "salePrice": 0,
                            "supplier": "Cigarrillos Norberto"
                        }
                    ]
                }
            ]
        }
    }
]