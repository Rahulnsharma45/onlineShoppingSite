

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', { 
            prods: products, 
            pageTitle: 'All Products', 
            path: '/products', 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });    
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { 
            prods: products, 
            pageTitle: 'Shop', 
            path: '/'
        });
    });    
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your cart'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}