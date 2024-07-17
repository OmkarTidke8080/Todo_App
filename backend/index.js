import express from "express";
import { createTodo } from "./type.js";

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, (req, res) => {
  console.log(`Server is listening at PORT : ${port}`);
});

app.post("/", async function (req, res) {
  const createPayLoad = req.body;
  const parsePayload = createTodo.safeParse(createPayLoad);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }
  // put it in mongo db
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find();
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

  await todo.update(
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
