import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import Header from '@components/Header/Header';
import supabase from 'services/supaClient';

const Layout: React.FC = () => {
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
    return <span className="loading loading-spinner text-success"></span>
  }

  return (
    <div>
      <Header />
      {session ? <Outlet /> : null}
    </div>
  );
};

export default Layout;