module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {img_url, productname, price} = req.body; console.log('values passed:', req.body)
        dbInstance.create_product(img_url, productname, price)
        .then( (product) => {
            
            res.status(200).send(product)
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
          
            res.status(200).send(products)
        })
        .catch( (error) => {
            res.sendStatus(500)
            console.log(error)
        })
    }
}