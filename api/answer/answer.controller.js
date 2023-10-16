const pool = require("../../config/database");

require("dotenv").config();
const { Answer, getAnswers } = require("./answer.service");

module.exports = {
  postAnswer: (req, res) => {
    const { answerDescription } = req.body;

    if (!answerDescription) {
      return res.status(400).json({ msg: "Nothing has been provided" });
    }
    // comes from auth
    req.body.userId = req.id;

    Answer(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      return res.status(200).json({
        msg: "New answer added successfully",
        data: results,
      });
    });
  },
  getAllAnswers: (req, res) => {
    const questionId = req.params.questionId;

    getAnswers(questionId, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "questions not found" });
      }
      return res.status(200).json({ data: results });
    });
  },

  // getAllAnswers2: (req, res) => {
  //   getAnswers(req.body.questionId, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({ msg: "questions not found" });
  //     }
  //     return res.status(200).json({ data: results });
  //   });
  // },
};
