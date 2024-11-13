import mongoose from "mongoose"

// To monitor the status of the mongoDB connection

mongoose.connection.on('connecting', () => {
    console.log('db connecting, Status:', mongoose.connection.readyState)
})
mongoose.connection.on('connected', () => {
    console.log('db connected, Status:', mongoose.connection.readyState)
})
mongoose.connection.on('disconnecting', () => {
    console.log('db disconnecting, Status:', mongoose.connection.readyState)
})
mongoose.connection.on('disconnected', () => {
    console.log('db disconnected, Status:', mongoose.connection.readyState)
})

export const connectDB = async() => {
   try {
      const db = await mongoose.connect(process.env.DB_URI, {
        dbName:"GrowthSquare Database"
      })
      return db
   } catch (error) {
      throw new Error(error)
   }
}