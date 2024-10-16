import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// UserProvider component that wraps the entire app to provide user context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Dorian Janninelle' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

