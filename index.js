const express = require("express");
const app = express();
const PORT = 7777;//Thala for a reason :)

//Deploy link - https://codechef-webdev-backend.onrender.com

//middleware
app.use(express.json());

//routes
const appRouter = require("./routes/index.js");
app.use("/", appRouter);

app.get("/", (req, res) => {
    res.send("Nothing in here, go to- /fox or /ciry");
});

//Start script - "npm start"
app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
});