const express = require("express");
const app = express();
const PORT = 7777;//Thala for a reason :)

//middleware
app.use(express.json());

//routes
const appRouter = require("./routes/index.js");
app.use("/", appRouter);

//Start script - "npm start"
app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
});