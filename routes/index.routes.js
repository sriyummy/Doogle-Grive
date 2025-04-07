const express = require ('express');
const authMiddleware = require ('../middlewares/auth');

const router = express.Router();
const upload = require ('../config/multer.config');
const fileModel = require ('../models/files.models');

router.get ('/home', authMiddleware, (req, res) => {
    res.render ('home');
});

router.post ('/upload', authMiddleware, upload.single ('file'), async (req, res) => {
    const newFile = await fileModel.create ({
        path: req.file.path,
        originalname: req.file.originalname
    });
});

module.exports = router;