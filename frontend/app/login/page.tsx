'use client';
import { useAuth } from '../../lib/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  async function handleLogin() {
    await login();
    router.push('/dashboard');
  }
  const isMock = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_MOCK_AUTH !== '0';
  return (
    <div className="max-w-md mx-auto px-6 py-10 text-center">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {isMock ? 'Design mode: clicking Continue will enter the back office with a mock session.' : 'Use your company login via Azure AD B2C.'}
      </p>
      <button onClick={handleLogin} className="mt-6 rounded-md bg-brand text-white px-4 py-2">Continue</button>
    </div>
  );
}
