const express = require("express");
const app = express();
const cors = require("cors");
const CsbInspector = require("csb-inspector");
CsbInspector();
const morganBody = require("morgan-body");
morganBody(app);

// const { reportRequest } = require("./src/middlewares/logger");

// app.use(reportRequest);
app.use(cors());
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = app;
