// Vercel serverless function entry point
// This file exports the Express app for Vercel to handle requests

// Import the built app from dist
import app from '../dist/app.js';

// Export the app as a serverless function handler
export default app;
