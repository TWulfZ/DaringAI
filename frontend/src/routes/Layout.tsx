import  { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import Header from '@components/Header/Header';
import supabase from '@lib/supaClient';

const Layout = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !session && location.pathname !== '/loggin') {
      navigate('/loggin');
    }
  }, [session, loading, navigate, location]);

  if (loading) {
    return (
      <div className="flex h-dvh w-full flex-col items-center justify-center">
        <span className="loading loading-spinner text-success size-32"></span>
      </div>
    )
  }

  return (
    <div>
      <Header />
      {session ? <Outlet /> : null}
    </div>
  );
};

export default Layout;