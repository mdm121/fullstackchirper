import { Router } from 'express';

let router = Router();

router.get('/', (req, res) => {
    res.send('Chirp Chirp!!');
})

export default router;