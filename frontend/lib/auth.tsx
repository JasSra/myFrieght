'use client';
import { PublicClientApplication, AccountInfo } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const mock = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_MOCK_AUTH === '1';

const msalInstance = new PublicClientApplication({
  auth: {
    clientId: process.env.NEXT_PUBLIC_AAD_B2C_CLIENT_ID || '00000000-0000-0000-0000-000000000000',
    authority: process.env.NEXT_PUBLIC_AAD_B2C_AUTHORITY,
    knownAuthorities: process.env.NEXT_PUBLIC_AAD_B2C_TENANT ? [process.env.NEXT_PUBLIC_AAD_B2C_TENANT] : undefined,
    redirectUri: process.env.NEXT_PUBLIC_AAD_B2C_REDIRECT_URI || (typeof window !== 'undefined' ? window.location.origin + '/login/callback' : undefined),
  },
  cache: { cacheLocation: 'localStorage' },
});

interface AuthContextValue {
  account: AccountInfo | null;
  token: string | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({ account: null, token: null, login: async () => {}, logout: async () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<AccountInfo | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (mock) {
      const mk = localStorage.getItem('mock_token');
      if (mk) setToken(mk);
      return;
    }
    msalInstance.initialize().then(() => {
      const acc = msalInstance.getAllAccounts()[0] || null;
      if (acc) setAccount(acc);
    });
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    account,
    token,
    login: async () => {
      if (mock) {
        const t = 'mock.' + Math.random().toString(36).slice(2);
        localStorage.setItem('mock_token', t);
        setToken(t);
        return;
      }
      const res = await msalInstance.loginPopup({ scopes: ['openid', 'offline_access'] });
      setAccount(res.account || null);
      const tokenRes = await msalInstance.acquireTokenSilent({ scopes: ['openid'], account: res.account!, redirectUri: window.location.origin + '/login/callback' });
      setToken(tokenRes.accessToken);
    },
    logout: async () => {
      if (mock) {
        localStorage.removeItem('mock_token');
        setToken(null);
        return;
      }
      await msalInstance.logoutPopup({ postLogoutRedirectUri: '/' });
      setAccount(null);
      setToken(null);
    }
  }), [account, token]);

  return (
    <MsalProvider instance={msalInstance}>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </MsalProvider>
  );
}

export function useAuth() { return useContext(AuthContext); }
