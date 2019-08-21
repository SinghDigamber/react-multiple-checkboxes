let mongoose = require('mongoose'),
    express = require('express'),
    checkboxRouter = express.Router();

let check = require('../models/Checkbox');

checkboxRouter.route('/checkbox-save').post((req, res, next) => {
    check.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

checkboxRouter.route('/').get((req, res) => {
    check.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = checkboxRouter;
