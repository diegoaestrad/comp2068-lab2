'use strict';
/*
 * Student Name: Diego Alejandro Estrada Beltrán
 * Student Number: 200427046
 */

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {

    calculate();

    function calculate(method, x, y) {
        var method = req.query.method;
        var x = parseInt(req.query.x);
        var y = parseInt(req.query.y);
        //console.log(method);
        //console.log(x);
        //console.log(y);


        if (method == 'add') {
            console.log(" ", x,"+",y, " = ", x + y);
        } else
            if (method == 'subtract') {
                console.log(" ", x, "-", y, " = ", x - y);
            } else
                if (method == 'multiply') {
                    console.log(" ", x, "*", y, " = ", x * y);
                } else
                    if (method == 'divide') {
                        console.log(" ", x, "/", y, " = ", x / y);
                    } else {
                        console.log("wrong function");
                    }

    }

    res.render('index', { title: 'Diego' });
});

module.exports = router;
