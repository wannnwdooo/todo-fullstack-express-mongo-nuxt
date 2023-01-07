import { body } from "express-validator";

export const todoCreateValidation = [
  body("text", "Текст не может быть короче 3 символов")
    .isLength({ min: 3 })
    .isString(),
];
