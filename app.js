import { connect } from "./Config/index.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
//import todoRoutes from "./Routes/ToDo.js";
import userRoutes from "./Routes/User.js";

/*    Configuration    */
const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/user", userRoutes);
//app.use("/api/v1/todo", todoRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
