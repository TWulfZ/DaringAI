import supabase from '@services/auth/auth.service';
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token no encontrado' });
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Token no válido' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Autorización fallida' });
  }
};