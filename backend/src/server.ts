// src/server.ts
import app from './app';
import config from './config/env';

const server = app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});

server.on('error', (error: any) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${config.PORT} is in use. Trying a different port...`);
    server.close(() => {
      config.PORT += 1;
      app.listen(config.PORT, () => {
        console.log(`Server restarted on http://localhost:${config.PORT}`);
      });
    });
  }
});
