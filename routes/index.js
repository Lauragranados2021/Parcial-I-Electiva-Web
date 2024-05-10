const router = require("express").Router();

const { renderFile } = require("ejs");
const { products } = require("./../resources/files/data.json");
const { parse } = require("path");
const { readdir } = require("fs");
const mapProducts=new Map (Object.entries(products))
router.get("/", (req, res) =>
    res.render("index.ejs", { title: "Venta de productos", data: mapProducts })
);
module.exports = router;