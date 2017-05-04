const router = require('express').Router();
const md5 = require('md5');
const db = require('../../core/db');

router
    .get('/', function (req, res) {
        db.user
            .findAll()
            .then(function (result) {
                res.status(200).send(JSON.stringify(result));
            });
    })
    .put('/', function (req, res) {
        db.user
            .create({
                first_name: req.body.first_name,
                middle_name: req.body.middle_name,
                surname: req.body.surname,
                login: req.body.login,
                password: md5(req.body.password)
            })
            .then(function () {
                res.sendStatus(200);
            });
    })
    .post('/', function (req, res) {
        db.user
            .update({
                    first_name: req.body.first_name,
                    middle_name: req.body.middle_name,
                    surname: req.body.surname,
                    login: req.body.login,
                    password: md5(req.body.password)
                },
                {
                    where: {id: req.body.id}
                })
            .then(function () {
                res.sendStatus(200);
            })
    })
    .delete('/', function (req, res) {
        db.user
            .destroy({where: {id: req.body.id}})
            .then(function () {
                res.sendStatus(200);
            });
    });

module.exports = router;
