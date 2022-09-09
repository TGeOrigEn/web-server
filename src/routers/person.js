const person = require('../contollers/person');

const Router = require('express');

const router = new Router();

router.post('/person', person.create);

router.get('/person', person.getAll);

router.get('/person', person.get);

router.put('/person', person.update);

router.delete('/person/:id', person.delete);

module.exports = router;
