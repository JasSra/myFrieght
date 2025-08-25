// Re-export from the React client module to satisfy extensionless imports
// This file bridges extensionless imports to the React client module.
import { AuthProvider as _AuthProvider, useAuth as _useAuth } from './auth';
export const AuthProvider = _AuthProvider;
export const useAuth = _useAuth;
