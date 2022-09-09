const activity = require('../contollers/activity');

const Router = require('express');

const router = new Router();

router.post('/activity', activity.create);

router.get('/activity/:id', activity.getAll);

router.put('/activity', activity.update);

router.delete('/activity/:id', activity.delete);

module.exports = router;
