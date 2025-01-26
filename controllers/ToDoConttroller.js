const ToDoModel = require("../models/ToDoModel");

module.exports.getTodo = async (req, res) => {
  try {
    const todos = await ToDoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching To-Do list:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.CreateTodo = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text field is required" });
    }

    const newTodo = await ToDoModel.create({ text });

    console.log("Added successfully:", newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error adding To-Do:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.updateTodo = async (req, res) => {
  try {
    const { id, text } = req.body;

    if (!id || !text) {
      return res.status(400).json({ error: "Please provide both ID and text" });
    }

    const updatedTodo = await ToDoModel.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: "To-Do not found" });
    }

    console.log("Updated successfully:", updatedTodo);
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Error updating To-Do:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Please provide an ID" });
    }

    const todo = await ToDoModel.findById(id);
    if (!todo) {
      return res.status(404).json({ error: "Invalid ID, To-Do not found" });
    }

    await ToDoModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting To-Do:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
