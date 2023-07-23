import { pool } from "../config/db.js";

// get all todos
export const getTodos = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM todo");
    res.json(response.rows);
  } catch (error) {
    console.log("error", error);
  }
};

// add todo
export const addTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const response = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(response.rows[0]);
  } catch (error) {
    console.log("error", error);
  }
};

// get todo by id
export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [
      id,
    ]);
    res.json(response.rows[0]);
  } catch (error) {
    console.log("error", error);
  }
};

// update todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query("UPDATE todo SET description=$1 WHERE todo_id=$2", [
      description,
      id,
    ]);
    res.json({ message: "Todo updated" });
  } catch (error) {
    console.log("error", error);
  }
};

// delete todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM todo WHERE todo_id=$1", [id]);
    res.json({ message: "Todo updated" });
  } catch (error) {
    console.log("error", error);
  }
};
