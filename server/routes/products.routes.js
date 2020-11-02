const controller = require('../controllers/products.controller');

module.exports = app => {
    // C
    app.post('/api/product/new', controller.createProduct);
    // R
    app.get('/api/products', controller.allProducts);
    app.get('/api/product/:id', controller.oneProduct);
    // U
    app.patch('/api/product/update/:id', controller.updateProduct);
    // D
    app.delete('/api/product/delete/:id', controller.deleteProduct);
};