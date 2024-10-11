import express from 'express';
const router = express.Router();

// déclarer les != routes du module index
router.get('/', (req, res) => {
   res.send('<h1>Welcome</h1>');
});

export default router;
