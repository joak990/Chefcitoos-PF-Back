const nodemailer = require('nodemailer');


const emailController = async (data) => {
    try {
        // console.log('email',email);
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
                    subject: '¡Bienvenid@ a Chefcitoos App!',
                    text : "enviando desde nodemailer prueba"
                });
        console.log(info);
        return true
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = emailController;

