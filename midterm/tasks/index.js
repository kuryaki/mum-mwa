const { Router } = require('express');
const router = Router();

const controller = require('./controller');

router.get('/', controller.list);
router.post('/', controller.create);
router.post('/:id', controller.complete);
router.delete('/:id', controller.remove);
router.get('/complete', controller.completed);

module.exports = router;
