require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/store", require("./routes/storeRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
