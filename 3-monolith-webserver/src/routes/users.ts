import express from 'express';
const router = express.Router();

// déclarer les != routes du module index
// find all (GET /users)
router.get('/', (req, res) => {
    res.send('Data users...');
});

// find one (GET /users/1)
router.get('/:id', (req, res) => {
    res.send('Data from user ...');
});

export default router