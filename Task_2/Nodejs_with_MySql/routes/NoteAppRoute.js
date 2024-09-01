const express = require("express");
const { createNotes, getNotes, deleteNotes } = require("../Controller/NotesController");

const router = express.Router();

router.post("/notes/create", createNotes);
router.get("/getList", getNotes);
router.delete("/notes/:id", deleteNotes);
module.exports = router;
