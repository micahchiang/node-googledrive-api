import * as express from 'express';

let router = express.Router();

router.get('/', (req,res) => {
    res.send('accessing drive');
});

router.get('/blogposts', (req,res) => {
    res.send('retrieving blog posts');
});

export = router;