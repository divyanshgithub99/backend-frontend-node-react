const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.signup = async (req, res) => {
    try {
            const { username, mobile, password } = req.body;
        
            // Check if the username already exists
            const existingUser = await User.findOne({ '$or':[{username},{mobile}]  });
            console.log(existingUser,"existingUser")
            if (existingUser) {
                
              return res.status(400).json({ message: 'Username already exists' });
            }
        
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
        
            // Create a new user
            const newUser = new User({ username, mobile, password: hashedPassword });
            await newUser.save();
        
            res.status(201).json({ message: 'User created successfully' });
          } catch (error) {
            res.status(500).json({ message: 'Error creating user' });
          }
};



exports.login = async (req, res) => {
    try {
            const { username, password } = req.body;
        
            // Find the user by username
            const user = await User.findOne({ username });
        
            // If user doesn't exist
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
        
            // Compare passwords
            const passwordMatch = await bcrypt.compare(password, user.password);
            console.log(passwordMatch,"return true or false");
        
            if (passwordMatch) {
              res.status(200).json({ message: 'Login successful' });
            } else {
              res.status(401).json({ message: 'Invalid credentials' });
            }
          } catch (error) {
            res.status(500).json({ message: 'Error logging in' });
          }
};
