import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

// --------------- Importing Main Route ---------------
import mainRoute from "./routes/main.route.js"

// --------------- Importing Other Files ---------------
import Errorhandler from "./utilities/APIErrorHandler.js"

dotenv.config()
const app = express()

// --------------- Parsing Middlewares ---------------
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// ---------------------------------------
app.get("/", (request, response)=>{
    response.status(200).send("API is working fine")
})

// --------------- Middlewares (Routes) ---------------
app.use(mainRoute)

// --------------- Middlewares (Error Handler) ---------------
app.use(Errorhandler)

export { app }
