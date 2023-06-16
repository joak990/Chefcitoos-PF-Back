const { Op } = require('sequelize');
const { Orders } = require('../dataBase/models');
const moment = require('moment-timezone');



// Imprimir las fechas y horas resultantes


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

        const percentaje = ((currentSales - previousSales) / previousSales) * 100;
        console.log(previousDate)
        return {
            ventas: currentSales,
            porcentaje: parseFloat(percentaje.toFixed(2))
        };
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getSales;