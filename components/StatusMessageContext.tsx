"use client"
import React, { createContext, useContext, useState } from 'react';

type StatusContextType = {
  status: string;
  setStatus: (msg: string) => void;
};

const StatusMessageContext = createContext<StatusContextType | undefined>(undefined);

export function useStatusMessage() {
  const ctx = useContext(StatusMessageContext);
  if (!ctx) throw new Error('useStatusMessage must be used within StatusMessageProvider');
  return ctx;
}

export function StatusMessageProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState('');
  return (
    <StatusMessageContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusMessageContext.Provider>
  );
} 