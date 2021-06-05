const express = require('express');
const app = express()
const morgan = require("morgan")
const db = require("./config/database")
const studentRoutes = require("./routes/studentRoutes")

app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))

// Test db
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error -", err))

const PORT = 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))

// app.get('/', (req, res) => {
//     res.send("Hello Index")
// })

app.use("/students", require("./routes/studentRoutes"))