const express = require("express");
const router = express.Router();
const midProjectController = require("../controller/midProjectController");
//Auth middleWare
const authMiddleware = require("../middleware/authMiddleware");
const { protect } = authMiddleware;
//isclub MiddleWare
const clubMiddleware = require("../middleware/clubMiddleware");


router.get("/build/mid-projects",  midProjectController.getAllMidProjects);

router.get("/build/mid-project/:id", protect, clubMiddleware, midProjectController.getMidProject);

module.exports = router;