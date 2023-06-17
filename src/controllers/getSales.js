const { Op } = require('sequelize');
const { Orders } = require('../dataBase/models');
const { Users } = require('../dataBase/models');
const moment = require('moment-timezone');

const getSales = async () => {
    try {
        const currentDate = moment().tz('America/Bogota');
        const previousDate = moment().tz('America/Bogota').subtract(1, 'day');
        const prePreviousDate = moment().tz('America/Bogota').subtract(2, 'day');
        
        const currentSalesArr = await Orders.findAll({
            where: {
                date: {
                    [Op.gte]: previousDate,
                    [Op.lt]: currentDate
                }
            }
        })
        let currentSales = 0;
        currentSalesArr.forEach(sale => {
            currentSales += sale.total_price
        })

        const previousSalesArr = await Orders.findAll({
            where: {
                date: {
                    [Op.gte]: prePreviousDate,
                    [Op.lt]: previousDate
                }
            }
        })
        let previousSales = 0;
        previousSalesArr.forEach(sale => {
            previousSales += sale.total_price
        })
        let percentajeSale = 0;
        if(previousSales === 0){
            percentajeSale = 100;
        } else {
            percentajeSale = ((currentSales - previousSales) / previousSales) * 100;
        }

        const currentClients = await Users.findAll({
            where: {
                createdAt: {
                    [Op.gte]: previousDate,
                    [Op.lt]: currentDate
                }
            }
        })
        const currentAmount = currentClients.length;
        // console.log("current:: ", currentAmount);
        
        const previousClients = await Users.findAll({
            where: {
                createdAt: {
                    [Op.gte]: prePreviousDate,
                    [Op.lt]: previousDate
                }
            }
        })
        const previousAmount = previousClients.length;
        // console.log("previous:: ", previousAmount);
        let percentajeClient = 0;
        if(previousAmount === 0){
            percentajeClient = 100
        } else {
            percentajeClient = ((currentAmount - previousAmount) / previousAmount * 100);            
        }
        console.log("percentaje:: ", percentajeClient)
        return {
            ventas: {
                total: currentSales,
                porcentaje: parseFloat(percentajeSale.toFixed(2))
            },
            clientes: {
                total: currentAmount,
                porcentaje: parseFloat(percentajeClient.toFixed(2))
            }
        };
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getSales;