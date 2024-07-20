// index.js
import express from "express";
// import mongoose from "mongoose";
import Todo from "./db.js";
import { createTodo, updateTodo } from "./type.js"; // Ensure these are correctly defined

const app = express();
const port = 3000;
app.use(express.json());

// Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/todoDB");

app.listen(port, () => {
  console.log(`Server is listening at PORT : ${port}`);
});

app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsePayload = createTodo.safeParse(createPayLoad);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }

  // Create a new todo in the database
  const newTodo = new Todo({
    title: createPayLoad.title,
    description: createPayLoad.description,
  });

  await newTodo.save();

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await Todo.find({});
  console.log(todos); // promise
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayLoad = req.body;
  const parsePayload = updateTodo.safeParse(updatePayLoad);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });

    return;
  }

  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});
