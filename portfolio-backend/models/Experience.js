import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  timePeriod: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: [String],
    required: true,
  },
});

const Experience = mongoose.model('Experience', ExperienceSchema);

export default Experience;
