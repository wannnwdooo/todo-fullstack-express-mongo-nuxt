import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, required: true },
});
export default mongoose.model("Todo", TodoSchema);
