require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const userRouter = require("./api/users/user.router");
const questionRouter = require("./api/question/question.router");
const answerRouther = require("./api/answer/answer.router");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => res.json({ message: "Evangadi forum backed api" }));
app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answer", answerRouther);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
