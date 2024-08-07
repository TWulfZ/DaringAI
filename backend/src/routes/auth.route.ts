// auth.routes.ts
import { Router } from 'express';
import { createClient } from '@supabase/supabase-js';
import logger from '@managers/logger.manager';

const router = Router();
const supabase = createClient(process.env.SUPABASE_URL!, process.env.ANON_KEY!);

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    res.json({ 
      message: 'Inicio de sesión exitoso',
      token: data.session.access_token
    });
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
      res.status(400).json({ error: error.message });
    }
  }
});

export default router;