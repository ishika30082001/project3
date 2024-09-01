const { connect } = require("../database");

exports.createNotes = async (req, res) => {
  console.log(req.body);
  try {
    const { title, content } = req.body;
    const createData = `INSERT INTO notes (title,content) VALUES (?, ?)`;
    connect.query(createData, [title, content], (err, result) => {
      if (err) {
        console.error("Error inserting note:", err);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: result.insertId, title, content });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notesList = `SELECT * FROM notes`;
    connect.query(notesList, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteList = `DELETE FROM notes WHERE id=?`;
    connect.query(deleteList, [id], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "List deleted successfully" });
    });
  } catch (error) {
    console.log(error);
  }
};
