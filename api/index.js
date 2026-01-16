// Vercel serverless function entry point
// This file exports the Express app for Vercel to handle requests

// Import the built app from dist
const app = require('../dist/app.js');

// Export the app as a serverless function handler
module.exports = app.default || app;
