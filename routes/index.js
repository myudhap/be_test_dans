var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth.controller');
const jobController = require('../controllers/job.controller');
const schema = require('../validation/auth.validation');
const validate = require('../helpers/validator');
const authGuard = require('../middleware/auth.guard');

router.post('/register', validate(schema.register), authController.register);
router.post('/login', validate(schema.login), authController.login);
router.get('/jobs', authGuard, jobController.list);
router.get('/jobs/:id', authGuard, jobController.detail);

module.exports = router;
