const { products } = require('../dataBase/models');

const getDataDashboard = async () => {
    try {
        const typeProduct = [
            {
                codeName: 'hamburguesa',
                name: 'Hamburguesas'
            }, {
                codeName: 'perro_caliente',
                name: 'Perros Calientes'
            }, {
                codeName: 'burrito',
                name: 'Burritos'
            }, {
                codeName: 'sandwich',
                name: "Sandwiches"
            }, {
                codeName: 'otros_platos',
                name: 'Otros Platos'
            }, {
                codeName: 'bebidas',
                name: 'Bebidas'
            }];

        let answer = [];
        for (const element of typeProduct) {
            const prd = await products.findAll({
                where: {
                    type_product: element.codeName
                },
                attributes: ['purchased_amount', 'price']
            })
            let sales = 0;
            for (const el of prd) {
                sales += (el.purchased_amount * el.price);
            }
            answer.push({
                name: element.name,
                sales: sales
            })
        }
        return answer;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getDataDashboard;