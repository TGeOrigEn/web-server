const career = require('../contollers/career');

const Router = require('express');

const router = new Router();

router.post('/career', career.create);

router.get('/career/:id', career.get);

router.put('/career', career.update);

router.delete('/career/:id', career.delete);

module.exports = router;
