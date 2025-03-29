import { cleanupExpiredSessions } from './services/sessionService';
import app from './app';
import config from './config/env';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const PORT = process.env.PORT || config.PORT;

async function startServer() {
  try {
    // 1. Cleanup expired sessions
    await cleanupExpiredSessions();
    console.log('✅ Initial session cleanup complete');

    // 2. Test database connection
    await prisma.$connect();
    console.log('✅ Database connection established');

    // 3. Start server
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

    // 4. Handle server errors
    server.on('error', (error: NodeJS.ErrnoException) => {
      if (error.code === 'EADDRINUSE') {
        console.warn(`Port ${PORT} is in use. Trying port ${Number(PORT) + 1}...`);
        server.close(() => {
          app.listen(Number(PORT) + 1);
        });
      } else {
        console.error('❌ Server error:', error.message);
        process.exit(1);
      }
    });

    // 5. Handle process termination
    process.on('SIGTERM', () => {
      console.log('🛑 SIGTERM received - shutting down gracefully');
      server.close(() => {
        prisma.$disconnect().then(() => process.exit(0));
      });
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();