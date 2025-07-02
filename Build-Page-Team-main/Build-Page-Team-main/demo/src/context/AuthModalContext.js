import React, { createContext, useContext, useState } from 'react';

const AuthModalContext = createContext();

export function useAuthModalContext() {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error('useAuthModalContext must be used within AuthModalProvider');
  }
  return context;
}

export function AuthModalProvider({ children }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const openRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  return (
    <AuthModalContext.Provider value={{
      isLoginModalOpen,
      isRegisterModalOpen,
      openLogin,
      openRegister,
      closeModals
    }}>
      {children}
    </AuthModalContext.Provider>
  );
}
