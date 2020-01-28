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
    burger.selectAll(function(data) {
        let hbsObject = {
            type: 'Burger',
            burgers: data
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// create
router.post('/api/burgers', function(req, res) {
    // console.log(res.body);
    burger.insertOne ([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(result) {
        // console.log(result);
        // send back the ID of the new quote
        res.json({ id: result.insertID });
    });
});

// put
router.put('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
    // console.log('condition', condition);

// update
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export router
module.exports = router;