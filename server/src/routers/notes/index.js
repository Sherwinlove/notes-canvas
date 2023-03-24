import express from "express";
import { getNote } from "../../services/notes/index.js";

const router = express.Router();

router.get("/note/:id", (req, res) => {
  const id = req.params?.id;
  const note = getNote(id);

  res.send(note);
  console.log(`You've successfully hit the GET NOTE with an id of: ${id} !!!`);
});

export { router as NoteRouter };
