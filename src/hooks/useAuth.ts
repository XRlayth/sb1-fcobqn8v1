import { useState, useEffect } from 'react';
import { auth } from '../lib/auth';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(auth.isAuthenticated());
  const [user, setUser] = useState(auth.getCurrentUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsAuthenticated(auth.isAuthenticated());
    setUser(auth.getCurrentUser());
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const user = await auth.signIn(email, password);
      setIsAuthenticated(true);
      setUser(user);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const user = await auth.signUp(name, email, password);
      setIsAuthenticated(true);
      setUser(user);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const signOut = async () => {
    auth.signOut();
    setIsAuthenticated(false);
    setUser(null);
    return { error: null };
  };

  const updateUserProfile = async (data: any) => {
    try {
      if (!user) throw new Error('No user logged in');
      const updatedUser = auth.updateUserProfile(user.id, data);
      setUser(updatedUser);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  return {
    isAuthenticated,
    user,
    loading,
    signIn,
    signUp,
    signOut,
    updateUserProfile
  };
}