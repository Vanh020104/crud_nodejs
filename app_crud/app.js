const express = require('express');
const blogRouter = require('./router/BlogRouter');
const app = express();


app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/crud_mongodb');
module.exports =app;
