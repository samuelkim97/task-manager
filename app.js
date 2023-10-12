const express = require("express");
const app = express();
const router = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
// router
app.use("/api/v1/tasks", router);

app.get("/", (req, res) => {
	res.send("home page");
});

const port = 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log("Sever is listening on port 3000...");
		});
	} catch (error) {
		console.log(error);
	}
};

start();
