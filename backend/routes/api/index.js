const router = require('express').Router();
const passportServices = require('../../services/passport');
const passport = require('passport');
const checkLogin = require('../../middlewares/requireLogin');
const checkStub = require('../../middlewares/requireStub');

const authRoutes = require('./auth');
const mongoRoutes = require('./mongo');
const volunteerRoutes = require('./volunteer');

router.use('/auth', authRoutes);
router.use('/db', checkStub, mongoRoutes);
router.use('/volunteer', checkLogin, volunteerRoutes);

module.exports = router;