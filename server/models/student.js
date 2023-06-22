import mongoose from 'mongoose';
import Students from '../models/student.js';

const studentSchema = mongoose.Schema({
  regNo: Number,
  studentName: String,
  email: String,
  section: {
    type: String,
    default: 'A',
  },
  subjects: [String],
});

const student = mongoose.model('student', studentSchema);

export default student;
