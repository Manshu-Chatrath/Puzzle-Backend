const express = require("express");
const app = express();
const controller = require("../controller/controller");
app.get("/info", controller.info);
app.post("/save", controller.personalinfo);
app.put("/setrules", controller.update);
module.exports = app;
