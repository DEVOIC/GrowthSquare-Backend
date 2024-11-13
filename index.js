import { app } from "./src/app.js"
import { connectDB } from "./src/database/database.js"

const PORT = process.env.PORT
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at port ${PORT}`)
    })
})
