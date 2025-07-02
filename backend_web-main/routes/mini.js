const express = require('express');
const router = express.Router();

const miniController = require('../controller/miniController');

// GET all mini projects
router.get('/', miniController.getAll);

// GET a single mini project by ID
router.get('/:id', miniController.get);

// CREATE a new mini project
router.post('/', miniController.create);

// DELETE a mini project by ID
router.delete('/:id', miniController.delete);

module.exports = router;
