import { Router } from 'express';
import chirpStore from '../chirpstore';

let router = Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if(id) {
        res.send(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }
})

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id = req.params.id;
    if(id) {
        chirpStore.UpdateChirp(id, req.body);
        res.sendStatus(200);

    } else {
        res.sendStatus(403);
    }
});

router.delete('/:id?', (req, res) => {
    let id = req.params.id;
    if(id) {
        chirpStore.DeleteChirp(id);
        res.sendStatus(200);
    
    } else {
        res.sendStatus(403);
    }
});

export default router;