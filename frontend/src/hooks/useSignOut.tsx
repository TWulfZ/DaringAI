import { useNavigate } from 'react-router-dom';
import supabaseClient from 'services/supaClient';

export const useSignOut = () => {
  const navigate = useNavigate();
  
  return async () => {
    const { error } = await supabaseClient.auth.signOut();
    navigate("/");
    if (error) console.error(error);
  }
}