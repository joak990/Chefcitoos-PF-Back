const { products } = require('../dataBase/models');
const admin = require('firebase-admin');
const serviceAccount = require('../../chefcitoosapp-6371a-firebase-adminsdk-d5c0l-89458ddbc6.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'chefcitoosapp-6371a.appspot.com'
});

const createProduct = async (product) => {
    try {

        const bucket = admin.storage().bucket();

        const rutaImg = product.image;
        const updatedRutaImg = rutaImg.replace(/\\/g, '/');

        const namePrev = product.name;
        const nameUpdate = (namePrev.replace(/\s/g, '_')).toLowerCase();
        
        const localFilePath = updatedRutaImg;
        const storageFilePath = `${nameUpdate}.jpg`;
        const uploadResponse = await bucket.upload(localFilePath, {
            destination: storageFilePath
        })

        const file = uploadResponse[0];
        const imageUrl = await file.getSignedUrl({
            action: 'read',
            expires: '03-01-2500'
        });

        const imageUpdate = imageUrl[0];

        const newProduct = await products.create({
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            customizable: product.customizable,
            type_product: product.type_product,
            isDeleted: product.isDeleted,
            elements: product.elements,
            image: imageUpdate
        })
        return newProduct.dataValues;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = createProduct;