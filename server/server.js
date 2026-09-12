import express from 'express';
import cors from 'cors';

// 1. Create our Express application
const app = express();
const PORT = 5000;

// 2. Middleware setup
// Enable CORS so our React frontend (running on localhost:5173 or other ports) can send requests to this server
app.use(cors());

// Enable JSON body parsing so Express can read incoming JSON data in req.body
app.use(express.json());

// Helper function to validate email format using a simple regex pattern
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 3. API Routes
// Root route for quick health check in the browser
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio backend server is running!' });
});

// POST /api/contact - handles incoming contact form submissions
app.post('/api/contact', (req, res) => {
  // Extract data sent from the React frontend
  const { name, email, subject, message } = req.body;

  // Validation 1: Check that name is not empty
  if (!name || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Name is required.'
    });
  }

  // Validation 2: Check that email is present and properly formatted
  if (!email || !email.trim() || !isValidEmail(email.trim())) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  // Validation 3: Check that message is not empty
  if (!message || !message.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Message cannot be empty.'
    });
  }

  // Log the received message to the server terminal
  const timestamp = new Date().toLocaleString();
  console.log('\n===========================================');
  console.log('📨 NEW CONTACT FORM SUBMISSION RECEIVED');
  console.log(`⏰ Time:    ${timestamp}`);
  console.log(`👤 Name:    ${name.trim()}`);
  console.log(`📧 Email:   ${email.trim()}`);
  console.log(`📌 Subject: ${subject?.trim() || '(No subject provided)'}`);
  console.log(`💬 Message:\n${message.trim()}`);
  console.log('===========================================\n');

  // Return a success JSON response to the frontend
  return res.status(200).json({
    success: true,
    message: 'Message received successfully!'
  });
});

// 4. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📬 API endpoint ready at http://localhost:${PORT}/api/contact`);
});
