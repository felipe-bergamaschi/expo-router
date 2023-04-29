import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  function login(data) {
    // api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

    AsyncStorage.setItem('user', JSON.stringify(data))

    setUser(data)
    setIsAuthenticated(true)
  }

  async function logout() {
    // api.defaults.headers.common['Authorization'] = undefined;

    await AsyncStorage.removeItem('user')

    setUser(null)
    setIsAuthenticated(false)
  }

  async function loadStorageData() {
    const storageUser = await AsyncStorage.getItem('user')

    if (storageUser) {
      setUser(JSON.parse(storageUser))
      setIsAuthenticated(true)
    }

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    loadStorageData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        isAuthenticated,
        loading,
        logout
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
