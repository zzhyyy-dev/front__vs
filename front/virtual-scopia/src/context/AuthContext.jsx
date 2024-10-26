import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const savedUserType = localStorage.getItem('userType');
    const savedUserId = localStorage.getItem('userId');
    if (savedUserType && savedUserId) {
      setUserType(savedUserType);
      setUserId(savedUserId);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userType, userId, setUserType, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
