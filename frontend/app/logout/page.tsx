'use client';
import { useAuth } from '../../lib/auth';
import { useEffect } from 'react';

export default function LogoutPage() {
  const { logout } = useAuth();
  useEffect(() => { logout(); }, [logout]);
  return <div className="max-w-md mx-auto px-6 py-10">Signing out…</div>;
}
