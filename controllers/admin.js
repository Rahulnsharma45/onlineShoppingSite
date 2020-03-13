const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true   
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.imageUrl;
    const description = req.body.imageUrl;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', { 
            prods: products, 
            pageTitle: 'Admin products', 
            path: '/admin/products', 
        });
    });    
}