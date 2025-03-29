// src/app.ts
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import lessonRoutes from './routes/lessonRoutes';
import taskRoutes from './routes/taskRoutes';
import chatRoutes from './routes/chatRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/api/check', (req, res) => {
  res.json({ 
    message: 'API working',
    routes: app._router.stack
      .filter(layer => layer.route)
      .map(layer => layer.route.path) 
  });
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/chat', chatRoutes);

export default app;
