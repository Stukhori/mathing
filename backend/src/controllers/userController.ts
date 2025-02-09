import { Request, Response } from 'express';
import { signupUser, loginUser, getUserProfile } from '../services/userService';

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await signupUser(name, email, password);
  res.json({ user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await loginUser(email, password);
  res.json({ token });
};

export const getProfile = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const profile = await getUserProfile(parseInt(userId));
  res.json({ profile });
};