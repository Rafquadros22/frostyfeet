const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: "Enter an exercise name!",
  },
  duration: {
    type: Number,
    required: "Enter an exrecise duration in minutes!",
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [exerciseSchema],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
