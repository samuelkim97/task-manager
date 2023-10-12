const getAllTasks = (req, res) => {
	res.send("get all tasks");
};
const createTask = (req, res) => {
	res.send("create task");
};
const getTask = (req, res) => {
	const { id } = req.params;
	res.send(`get single task ID: ${id}`);
};
const updateTask = (req, res) => {
	const { id } = req.params;
	res.send(`patch single task ID: ${id}`);
};
const deleteTask = (req, res) => {
	const { id } = req.params;
	res.send(`delete single task ID: ${id}`);
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
