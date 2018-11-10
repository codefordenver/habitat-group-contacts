const router = require('express').Router();
const passportServices = require('../../services/passport');
const passport = require('passport');

const authRoutes = require('./auth');
const mongoRoutes = require('./mongo');
const volunteerRoutes = require('./volunteer');

router.use('/auth', authRoutes);
router.use('/db', mongoRoutes);
router.use('/volunteer', volunteerRoutes);

module.exports = router;