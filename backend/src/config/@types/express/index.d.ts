import type { User } from '@supabase/supabase-js';
import { Express } from 'express-serve-static-core';

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}