const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');

const app = express();
dotenv.config({ path: './config/.env' });

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/users', require('./routes/waitlistsRoutes'));
app.use('/api/subscribes', require('./routes/subscribesRoutes'));

__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is set and running on port: ${PORT}`),
);
