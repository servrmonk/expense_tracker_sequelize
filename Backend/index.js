const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cors = require('cors')
const db = require('./utils/db')

app.use(cors({origin:"http://localhost:5173"}))
// app.use(cors())


app.use(bodyParser.json());

app.use("/api", userRoutes);

app.use((req, res) => {
  res.status(404).send({ msg: "Error hai bhai" });
});
db.sync()
  .then(() => {
    console.log("Database synchronized successfully.");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

