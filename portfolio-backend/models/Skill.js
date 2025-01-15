import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    name : {
        type : String,
        required: True
    },
    proficiency: {
        type: number,
        required: True
    }
})

const Skill = mongoose.Model('Skill', SkillSchema);
export default Skill;