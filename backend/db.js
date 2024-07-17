/*
*Todo {
titl}


*/

import mongoose from "mongoose";
import { string } from "zod";

const URL = "mongodb://localhost:27017/todo";

mongoose.connect(URL, () => {
  console.log("Mongo Db Connected");
});

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

export const todo = mongoose.model("todos", todoSchema);
