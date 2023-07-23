import express from "express";
import { getTodos, addTodo, updateTodo, getTodo, deleteTodo } from "../controller/todo.js";

const router = express.Router();

router.get("/:id", getTodo);

router.get("/", getTodos);

router.post("/", addTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
