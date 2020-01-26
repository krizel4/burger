// import burger.js
const express = require('express');

const router = express.Router();

// import the model to use its db functions
const burger = require('../models/burger.js');
// =============
// ROUTERS
// =============

// all
router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// create
router.post('/api/burgers', function(req, res) {
    burger.create ([
        'burger_name', 'devoured'
    ], [
        req.body.name, req.body.sleepy
    ], function(result) {
        // send back the ID of the new quote
        res.json({ id: result.insertID });
    });
});

// put
router.put('/api/burgers:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    console.log('condition', condition);

// update
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// delete
router.delete('/api/burgers/:id', function(req, res) {
    const condition = 'id = ' + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows = 0) {
            // If no rows were changed, then the ID must not exist so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export router
module.exports = router;