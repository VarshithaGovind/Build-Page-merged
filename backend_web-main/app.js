const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
connectDB();

const corsOptions = {
  origin: function (origin, callback) {
    // requests made by the same server or tools like curl have no Origin header
    if (!origin) {
      return callback(null, true);
    }

    /* exact match for local dev */
    if (origin === 'http://localhost:3000') {
      return callback(null, true);
    }

    /* regex for all Vercel deployments */
    if (/^https:\/\/.*\.vercel\.app$/.test(origin)) {
      return callback(null, true);
    }

    /* anything else is rejected */
    return callback(new Error('Not allowed by CORS'));
  },

  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
};

app.use(cors(corsOptions));

// Additional CORS headers for extra compatibility
app.use((req, res, next) => {
  const origin = req.headers.origin;
  
  // Allow Vercel domains
  if (origin && origin.includes('.vercel.app')) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Your routes...
const miniRouter = require('./routes/mini');
const majorRouter = require('./routes/major');
const bookingRouter = require('./routes/Booking');
const projectRoute = require('./routes/Project');
const midProjectRoutes = require('./routes/midProjectRoutes');
const userRoutes = require('./routes/UserRoute');
const uiLibraryRoutes = require('./routes/uiLibraryRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

// Mount routes
app.use('/api/mini-projects', miniRouter);
app.use('/api/major-projects', majorRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/projects', projectRoute);
app.use('/api/mid-projects', midProjectRoutes);
app.use('/api/users', userRoutes);
app.use(uiLibraryRoutes);
app.use('/api/transactions', transactionRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    cors: 'enabled',
    env: process.env.NODE_ENV || 'development'
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Endpoint not found',
    path: req.path,
    method: req.method,
    availableRoutes: [
      '/api/mini-projects',
      '/api/major-projects', 
      '/api/bookings',
      '/api/projects',
      '/api/mid-projects',
      '/api/users',
      '/api/transactions',
      '/health'
    ]
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  if (process.env.NODE_ENV === 'development') {
    console.error('Stack:', err.stack);
  }
  
  res.status(err.status || 500).json({ 
    message: err.message || 'Server Error',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`🔒 CORS: Dynamic origin matching enabled`);

});

module.exports = app;
