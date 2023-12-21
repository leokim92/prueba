const products = [
    {id: '1', name: 'Aristocracy', price: 1200, img: '/img/Aristocracy.jpg', idCat:'1'},
    {id: '2', name: 'Palace Guard', price: 1500, img: '/img/Palace Guard.jpg', idCat:'1'},
    {id: '3', name: 'Warrior', price: 1800, img: './img/Warrior.jpg', idCat:'1'},
    {id: '4', name: 'Noble Woman', price: 1350, img: './img/Noble Woman.jpg', idCat:'2'},
    {id: '5', name: 'Queen', price: 1740, img: './img/Queen.jpg', idCat:'2'},
    {id: '6', name: 'Woman Aristocracy', price: 1500, img: './img/Woman Aristocracy.jpg', idCat:'2'},
    {id: '7', name: 'Little aristicrat', price: 950, img: './img/Little Aristocrat.jpg', idCat:'3'},
    {id: '8', name: 'Little Noble', price: 1020, img: './img/ Little Noble.jpg', idCat:'3'},
    {id: '9', name: 'Little Prince', price: 1100, img: './img/Little Prince.jpg', idCat:'3'},
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout (() => {
            resolve(products);
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const product = products.find(item => item.id === id)
            resolve(product);
        }, 2000)
    })
}

export const getProductByCat = (idCategory) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const categoryProduct =  products.filter(item => item.idCat === idCategory)
            resolve(categoryProduct);
        }, 2000)
    })
}