require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const controllers = require("./controller.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.get("/api/houses", controllers.getHouses);
app.post("/api/houses", controllers.createHouses);
app.delete("/api/houses/:id", controllers.deleteHouses);

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Servers listening on port ${port}`);
});
