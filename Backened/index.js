import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
import path from "path";
const app = express();


app.use(cors());
app.use(express.json());
dotenv.config();
const PORT=process.env.PORT || 4000;
const URI =process.env.MongoDBURI;

// connect to mongoDB
try{
   mongoose.connect(URI);
   console.log("Connected to mongoDB");
}catch(error)
{
     console.log("Error: ", error);
}
const __dirname= path.resolve();
//defining routes
app.use("/book" ,bookRoute)
app.use("/user" ,userRoute)
// for deployment
app.use(express.static(path.join(__dirname,"/Frontend/dist")));
app.get('*',(_,res)=>{
  res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"));
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})