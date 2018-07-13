module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {imgurl, name, price} = req.body;

        dbInstance.create_product(imgurl, name, price)
        .then( () => {
            res.sendStatus(200)
        })
        .catch( (error) => {
            res.sendStatus(500)
            console.log(error)
        })
    },
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.get_inventory()
        .then( (products) => {
            console.log(products)
            res.status(200).send(products)
        })
        .catch( (error) => {
            res.sendStatus(500)
            console.log(error)
        })
    }
}