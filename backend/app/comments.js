const express = require('express');
const mysqlDb = require('../mysqlDb');


const router = express.Router();

router.get('/', async (req, res) => {
    const [comments] = await mysqlDb.getConnection().query('SELECT * FROM ??', ['comments']);
    res.send(comments);
});

router.post('/', async (req, res) => {
    if (!req.body.author || !req.body.comment) {
        return res.status(400).send({ error: 'Data not valid' });
    }

    const comments = {
        author: req.body.author ? req.body.author : 'Anonymous',
        comment: req.body.comment,
    };

    const newComments = await mysqlDb.getConnection().query(
        'INSERT INTO ?? (author, comment) values (?, ?)',
        ['news', comments.title, comments.comment]
    );

    res.send({
        ...comments,
        id: newComments[0].insertId
    });
});

router.delete('/:id', async (req, res) => {
    const [comments] = await mysqlDb.getConnection().query(
        `DELETE * FROM ?? where id = ?`,
        ['comments', req.params.id])

    res.send(comments[0]);
});

module.exports = router;