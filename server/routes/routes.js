const Model = require("../models/model");

const express = require("express");

const router = express.Router();

// POST Method
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    priority: req.body.priority,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET_ALL Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
    // res.send({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET_BY_ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE_BY_ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE_BY_ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Your "${data.name}" note has been deleted...`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
