const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config() //archivo .env
const cookieParser = require('cookie-parser')

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");
//midleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//midleware de cookies
app.use(cookieParser())

//cors 
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
    
}));

// This is where we import the users routes function from our jokes.routes.js file
const rutas = require("./routes/autores.route")
rutas(app)

const rutasUsuario = require("./routes/users.route")
rutasUsuario(app)

//Aqui es donde definimos donde se va a ejecutar el servidor
app.listen(8000, () => console.log("The server is all fired up on port 8000"));