const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.routes");
const resignationRoutes = require("./routes/resignation.routes");
const questionnaireRoutes = require("./routes/questionnaire.routes");
const config = require("./config/config");

const app = express();

mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB", err));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/resignation", resignationRoutes);
app.use("/api/questionnaire", questionnaireRoutes);

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));

module.exports = app;
