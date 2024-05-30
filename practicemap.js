// gen.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3030;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle location updates from the Android app
app.post('/update-location', (req, res) => {
  // Extract latitude and longitude from the request body
  const { latitude, longitude } = req.body;
  
  // Check if latitude and longitude are provided
  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    // Store the location data in your database (e.g., MongoDB)
    // Assuming you have some function to store location data in the database
    storeLocationInDatabase(latitude, longitude);
    
    // Respond with a success message
    res.json({ message: 'Location updated successfully' });
  } catch (error) {
    console.error('Error storing location:', error);
    res.status(500).json({ error: 'Failed to update location' });
  }
});

// Example function to store location data in the database
function storeLocationInDatabase(latitude, longitude) {
  // Implement logic to store location data in your database (e.g., MongoDB)
  // This is just a placeholder function
  console.log(`Storing location: Latitude - ${latitude}, Longitude - ${longitude}`);
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
