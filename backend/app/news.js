const express = require('express');
const multer = require('multer');
const path = require('path');
const { nanoid } = require('nanoid');
const config = require('../config');
const mysqlDb = require('../mysqlDb');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const router = express.Router();

router.get('/', async (req, res) => {
    const [allNews] = await mysqlDb.getConnection().query('SELECT * FROM ??', ['news']);
    res.send(allNews);
});

router.get('/:id', async (req, res) => {
    const [news] = await mysqlDb.getConnection().query(
        `SELECT * FROM ?? where id = ?`,
        ['news', req.params.id])
    if (!news) {
        return res.status(404).send({ error: 'News not found' });
    }

    res.send(news[0]);
});

router.post('/', upload.single('image'), async (req, res) => {
    if (!req.body.title || !req.body.description) {
        return res.status(400).send({ error: 'Data not valid' });
    }

    const news = {
        title: req.body.title,
        description: req.body.description,
    };

    if (req.file) {
        news.image = req.file.filename;
    }

    const newNews = await mysqlDb.getConnection().query(
        'INSERT INTO ?? (title, description, image , time) values (?, ?, ?, ?)',
        ['news', news.title, news.description, news.image, news.time]
    );

    res.send({
        ...news,
        id: newNews[0].insertId
    });
});

router.delete('/:id', async (req, res) => {
    const [news] = await mysqlDb.getConnection().query(
        `DELETE FROM ?? where id = ?`,
        ['news', req.params.id])

    res.send(news[0]);
});

module.exports = router;