const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = require('./app');
const { initializeSocket } = require('./socket');

const port = process.env.PORT || 3000;

// Apply CORS for Express
app.use(cors({
  origin: "https://uber-g2qt.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}));

// Create HTTP server
const server = http.createServer(app);

// Initialize socket.io
const io = new Server(server, {
  cors: {
    origin: "https://uber-g2qt.vercel.app",
    methods: ["GET", "POST"]
  }
});

// Pass io instance to socket module
initializeSocket(io);

// Start server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
