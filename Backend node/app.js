const express = require('express');
const mongoose = require('mongoose');
const app = express();
const startCorsAnywhere = require('./cors-anywhere'); // Import the function
require('dotenv').config();

// Use CORS middleware
// app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000/', // Replace with your frontend URL
//   credentials: true, // if your frontend is sending credentials (like cookies)
// }));


const userRoutes = require('./routes/userRoutes');
const { mongoURI, port } = require('./config');

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(userRoutes);

startCorsAnywhere();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



















// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://divyanshbajpai10:Divmongodb99@cluster0.jkte1p0.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Create a user schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Middleware to parse JSON
// app.use(express.json());

// // Signup route
// app.post('/signup', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the username already exists
//     const existingUser = await User.findOne({ username });
//     console.log(existingUser,"bobbbbyybybyyb")
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user' });
//   }
// });

// // Login route
// app.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find the user by username
//     const user = await User.findOne({ username });

//     // If user doesn't exist
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Compare passwords
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (passwordMatch) {
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 6000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
