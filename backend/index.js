const express = require('express');
const cors = require('cors'); // Import the cors middleware
const tasksRouter = require('./routes/tasks');
const app = express();

app.use(express.json());

// Use the cors middleware with specific origin
app.use(cors({ origin: 'http://localhost:3000' }));

const PORT = process.env.PORT || 5000;

app.use('/api/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
