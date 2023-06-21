const { Orders } = require('../dataBase/models');
const  { Users } = require('../dataBase/models');

const OrdersDashboard = async () => {
        try {
            const AllOrders = await Orders.findAll({
                attributes : ['id', 'users_id','total_price','state','date'],
                include : {
                    model : Users,
                    attributes: ['name']
                },
                order: [['date', 'DESC']]
            })
            
            return AllOrders
        } catch (error) {
            throw new Error(error);
        }
    }

module.exports = OrdersDashboard;