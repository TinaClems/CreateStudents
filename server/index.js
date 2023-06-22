// Step 1: Import required modules
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

// Step 2: Create an Express app
const app = express();

// Step 3: Set up middleware
app.use(bodyParser.json({ limit: '20mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(cors());

// Step 4: Set up routes
app.use('/students', studentRoutes);

// Step 5: Set up MongoDB connection URL and port
const CONNECTION_URL = 'mongodb+srv://Myskills:PASSWORD2@tina1.dazhlyf.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// Step 6: Establish connection to MongoDB
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    // Step 7: Start the server
    app.listen(PORT, () =>
      console.log(`Connection is established and running on port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));

// Step 8: Disable the useFindAndModify option in Mongoose
// mongoose.set('useFindAndModify', false);
