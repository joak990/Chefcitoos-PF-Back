const server = require('express');
const router = server.Router();

const newAssessment = require('../controllers/createAssessment')

router.post('/', async (req, res) => {
    try {
        const { creation_id, user_id, content, vote } = req.body;
        const createAssessment = await newAssessment({ creation_id, user_id, content, vote })
        res.status(200).send(createAssessment);
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message });
    }
})

// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedCreation = await deleteCreation(id)
//         res.status(200).send(deletedCreation);
//     } catch (error) {
//         res.status(400).send({ error: error.message })
//     }
// })

// router.get('/', async (req, res) => {
//     try {
//         const getCreation = await getCreations()
//         res.status(200).send(getCreation);
//     } catch (error) {
//         res.status(400).send({ error: error.message })
//     }
// })

module.exports = router;