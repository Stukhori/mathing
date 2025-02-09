import { Request, Response } from 'express';
import { signupUser, loginUser, getUserProfile } from '../services/userService';

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const user = await signupUser(name, email, password);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const user = await getUserProfile(userId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
