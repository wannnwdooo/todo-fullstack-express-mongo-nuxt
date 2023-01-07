import { todoCreateValidation } from "../validations/todoValidation.js";
import handleValidationErrors from "../utils/handleValidationErrors.js";
import * as TodoController from "../controllers/TodoControllers.js";
import express from "express";

export const router = new express.Router();

router.get("/todo", TodoController.get);
router.post(
  "/todo",
  todoCreateValidation,
  handleValidationErrors,
  TodoController.create
);
router.delete("/todo/:id", TodoController.remove);
router.patch(
  "/todo/:id",
  todoCreateValidation,
  handleValidationErrors,
  TodoController.update
);
