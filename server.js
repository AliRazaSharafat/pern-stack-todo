import express from "express";
import cors from "cors";
import TodoRouter from "./routes/todo.js";

const app = express();

app.use(cors());
app.use(express.json()); // req.body

// todos router
app.use("/todos", TodoRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is listening on PORT:" + PORT));
