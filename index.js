const express = require("express");
const app = express();
var cors = require("cors");
const route = require("./route/route");
app.use(express.json());
app.use(cors());
app.use(route);
app.listen(process.env.PORT || 2000);
