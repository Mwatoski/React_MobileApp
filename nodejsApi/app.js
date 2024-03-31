// server.js
const express = require("express");
const sequelize = require("./config/database.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("Error syncing database:", err));
