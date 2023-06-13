const nodemailer = require('nodemailer');
const { Users } = require('../dataBase/models');


const emailController = async (data) => {
    try {

        const user = await Users.findAll({
            where: {
                email: data.email
            }
        })
        if (user.length > 0) {
            return false
        } else {

            console.log(user, 'USERSSSS');
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'patrickmurayari03@gmail.com',
                    pass: 'okzbxjuqdtdubzti'
                },
            });

            const info = await transporter.sendMail({
                from: 'patrickmurayari03@gmail.com',
                to: data.email,
                subject: '¡Bienvenid@s a Chefcitoos App!',
                text: "Estamos emocionados de tenerte como parte de nuestra comunidad de amantes de la comida rápida y personalizada. En Chefcitos App, puedes disfrutar de una experiencia única al crear y personalizar tus comidas favoritas según tus gustos y preferencias."
            });
            return true
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = emailController;

