// src/types/express/index.d.ts
declare global {
  namespace Express {
    interface Request {
      userId: number;
    }
  }
}
