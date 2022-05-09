require("dotenv").config();
require("express-async-errors");
const express = require("express"); // Express web server framework
const cors = require("cors"); //allows to make requests from different domains
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const playListRoutes = require("./routes/playLists");
const searchRoutes = require("./routes/search");
const app = express();

connection();
app.use(cors());
app.use(express.json());

app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes);
app.use("/api/songs/", songRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/", searchRoutes);

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
