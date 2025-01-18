import express from "express";

import Skill from "../models/Skill.js";
import auth from "../middleware/auth.js";
import { skillSchema } from "../validators/skillValidator.js";
import validate from "../middleware/validate.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

router.post("/", auth, validate(skillSchema), async (req, res) => {
  try {
    const newSkill = new Skill(req.body);
    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.put("/:id", auth, async (req, res) => {
  const { name, category } = req.body;
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    if (name) skill.name = name;
    if (proficiency) skill.proficiency = proficiency;

    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error updating skill", error: err.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try{
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json({ message: 'Skill deleted successfully' });
  }catch(err){
    res.status(500).json({
      message : 'Server Error',
      error : err.message
    })
  }
});

export default router;
