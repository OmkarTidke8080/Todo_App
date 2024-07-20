/*
*Todo {
titl}


*/

import mongoose from "mongoose";
import { string } from "zod";

mongoose.connect("mongodb://localhost:27017/todo");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }, 
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
