const server = require('express');
const router = server.Router();
const emailController = require('../controllers/emailController')

router.post('/send-email', async (req,res) => {
    try {
        const {email} = req.body
        const emailUser = await emailController({email})
        res.status(200).json(emailUser);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = router;