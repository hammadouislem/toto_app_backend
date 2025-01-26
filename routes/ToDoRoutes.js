const express = require("express");
const router = express.Router();
const ToDoController = require("../controllers/ToDoConttroller");

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all To-Dos
 *     description: Fetches all To-Do items from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved list of To-Dos
 */
router.get("/todos", ToDoController.getTodo);

/**
 * @swagger
 * /add:
 *   post:
 *     summary: Create a new To-Do
 *     description: Adds a new To-Do item.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "Learn Swagger"
 *     responses:
 *       201:
 *         description: To-Do created successfully
 */
router.post("/add", ToDoController.CreateTodo);

/**
 * @swagger
 * /update:
 *   put:
 *     summary: Update a To-Do
 *     description: Updates an existing To-Do item.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "65a95f7b8c1234567890abcd"
 *               text:
 *                 type: string
 *                 example: "Updated task"
 *     responses:
 *       200:
 *         description: To-Do updated successfully
 */
router.put("/update", ToDoController.updateTodo);

/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Delete a To-Do
 *     description: Deletes a To-Do item by its ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "65a95f7b8c1234567890abcd"
 *     responses:
 *       200:
 *         description: To-Do deleted successfully
 */
router.delete("/delete", ToDoController.deleteTodo);

module.exports = router;
