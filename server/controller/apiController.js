
export const getFormData = (req, res) => {
    console.log('form data::', req.body.formData);
    res.json({"result": true});
}

export const getProductDetail = (req, res) => {  
    // console.log(req.params.pid);
    res.json({"result": `${req.params.pid}의 상세정보`});
}

export const getProducts = (req, res, next) => {
    const products = [
        {
            "pid": "P0001",
            "name": "갸또 쇼콜라",
            "price": 43000,
            "img": "/images/product1.jpg"
        },
        {
            "pid": "P0002",
            "name": "쉭쎄",
            "price": 20000,
            "img": "/images/product2.jpg"
        },
        {
            "pid": "P0003",
            "name": "초코 구운과자 묶음",
            "price": 13000,
            "img": "/images/product3.jpg"
        },
        {
            "pid": "P0004",
            "name": "통팥앙금빵",
            "price": 2500,
            "img": "/images/product4.jpg"
        },
        {
            "pid": "P0005",
            "name": "브라우니",
            "price": 20800,
            "img": "/images/product5.jpg"
        }
        ];
    res.json({"products": products});
}


export const getFruits = (req, res, next) => {
    const fruits = [
        { "name": "apple", "color": "red", "emoji": "🍎" },
        { "name": "lemon", "color": "yellow", "emoji": "🍋" },
        { "name": "tomato", "color": "red", "emoji": "🍅" },
    ]
    res.json({"fruits": fruits});
}