const express = require("express");
const router = express.Router();
const {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
} = require("../controller/task");

router.route("/").get(getAllTasks).post(createTask);
router
	.route("/:id")
	.get((req, res) => {
		const { id } = req.params;
		res.send(`get single task ID: ${id}`);
	})
	.patch((req, res) => {
		const { id } = req.params;
		res.send(`patch single task ID: ${id}`);
	})
	.delete((req, res) => {
		const { id } = req.params;
		res.send(`delete single task ID: ${id}`);
	});

module.exports = router;
