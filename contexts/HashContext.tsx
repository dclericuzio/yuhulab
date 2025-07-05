"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

interface HashContextType {
    currentHash: string;
    setCurrentHash: (hash: string) => void;
}

const HashContext = createContext<HashContextType | undefined>(undefined);

export function HashProvider({ children }: { children: React.ReactNode }) {
    const [currentHash, setCurrentHash] = useState('');

    useEffect(() => {
        // Set initial hash
        setCurrentHash(window.location.hash);
        
        // Listen for hash changes
        const handleHashChange = () => {
            const newHash = window.location.hash;
            setCurrentHash(newHash);
        };
        
        // Also listen for popstate (back/forward buttons)
        const handlePopState = () => {
            const newHash = window.location.hash;
            setCurrentHash(newHash);
        };
        
        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('popstate', handlePopState);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const handleSetCurrentHash = (hash: string) => {
        setCurrentHash(hash);
    };

    return (
        <HashContext.Provider value={{ currentHash, setCurrentHash: handleSetCurrentHash }}>
            {children}
        </HashContext.Provider>
    );
}

export function useHash() {
    const context = useContext(HashContext);
    if (context === undefined) {
        throw new Error('useHash must be used within a HashProvider');
    }
    return context;
} 