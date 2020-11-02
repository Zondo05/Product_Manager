const { Product } = require('../models/products.models') ;

module.exports = {
// C
    createProduct: (req, res) =>{
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json({ error: err }));
    },
// R
    allProducts: (req, res ) =>{
        Product.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    oneProduct: (req, res) =>{
        Product.findOne({ _id: req.params.id })
            .then(data => {
                if(data == null) {
                    res.json({ error: "Product does not exist." })
                } else {
                res.json(data)
                }
            })
            .catch(err => res.json(err));
    },
// U
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({  _id: req.params.id }, req.body, {new: true, runValidators: true, userFindAndModify: false })
            .then(data => res.json(data))
            .catch(err =>res.json(err));
    },
// D
    deleteProduct: (req, res) => {
        Product.findOneAndDelete({  _id: req.params.id  })
            .then(data => res.json(data))
            .catch(err =>res.json(err));
    }
};