"use client"
import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../../../lib/supabase.js'
import { redirect } from 'next/navigation';

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth
              supabaseClient={supabase}
              queryParams={{
                access_type: 'offline',
                prompt: 'consent',
                hd: 'domain.com',
              }}
              appearance={{ theme: ThemeSupa }} />)
  }
  else {
    redirect('/login/account-details');
  }
}