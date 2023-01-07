import TodoModel from "../models/Todo.js";

export const get = async (req, res) => {
  try {
    const todos = await TodoModel.find();

    res.json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Message: "Не удалось получить заметку",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new TodoModel({
      text: req.body.text,
      completed: req.body.completed,
    });

    const todo = await doc.save();

    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Message: "Не удалось создать заметку",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const todoId = req.params.id;

    TodoModel.findOneAndDelete(
      {
        _id: todoId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            Message: "Не удалось удалить заметку",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Заметка не найдена",
          });
        }
        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Message: "Не удалось создать заметку",
    });
  }
};

export const update = async (req, res) => {
  try {
    const todoId = req.params.id;

    await TodoModel.updateOne(
      {
        _id: todoId,
      },
      {
        text: req.body.text,
        completed: req.body.completed,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Message: "Не удалось обновить заметку",
    });
  }
};
