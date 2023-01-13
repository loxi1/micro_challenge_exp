const express = require("express");
const datetime = require('node-datetime');
const FechaRoter = express.Router();
let dt = datetime.create();

let {_now} = dt;

FechaRoter.get("/what-time", async (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Ok",
            data: dt.format('H:M:S')
        })
    } catch (error) {
        return res.status(500).send({
            success: true,
            message: error.message
        })
    }
})

FechaRoter.get("/what-date", async (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Ok",
            data: dt.format('Y-m-S')
        })
    } catch (error) {
        return res.status(500).send({
            success: true,
            message: error.message
        })
    }
})

FechaRoter.get("/what-date-time", async (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Ok",
            data: _now
        })
    } catch (error) {
        return res.status(500).send({
            success: true,
            message: error.message
        })
    }
})

module.exports = FechaRoter