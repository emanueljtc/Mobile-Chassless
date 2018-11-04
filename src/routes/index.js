const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Mobile Chassless 1.1' })

});

module.exports = router;