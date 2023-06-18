const { products } = require('../dataBase/models');
const admin = require('firebase-admin');
const serviceAccount = require('../../chefcitoosapp-6371a-firebase-adminsdk-d5c0l-89458ddbc6.json');


const createProduct = async (product) => {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            storageBucket: 'chefcitoosapp-6371a.appspot.com'
        });

        const bucket = admin.storage().bucket();
        // console.log(bucket);
        const localFilePath = 'C:/Users/0fred/Documents/chefcitoos-img/salchipapa-casa.jpg';
        const storageFilePath = 'deditos.jpg'
        const uploadResponse = await bucket.upload(localFilePath, {
            destination: storageFilePath
        })

        const file = uploadResponse[0];
        const imageUrl = await file.getSignedUrl({
            action: 'read',   
            expires: '03-01-2500'         
        });

        console.log('URL de la imagen:', imageUrl[0]);
        return imageUrl[0];

        const newProduct = await products.create({
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            customizable: product.customizable,
            type_product: product.type_product,
            isDeleted: product.isDeleted,
            elements: product.elements
        })
        return newProduct.dataValues;
        return true
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = createProduct;