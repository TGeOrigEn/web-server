const rank = require('../contollers/rank');

const Router = require('express');

const router = new Router();

router.post('/rank', rank.create);

router.get('/rank/:id', rank.get);

router.put('/rank', rank.update);

router.delete('/rank/:id', rank.delete);

module.exports = router;
