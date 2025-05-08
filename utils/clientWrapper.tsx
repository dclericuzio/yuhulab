"use client";
import { useLayoutEffect } from 'react';
import setResponsiveFontSize from '@/utils/setResponsiveFontSize';

export default function ClientWrapper(){
    useLayoutEffect(() => {
        setResponsiveFontSize();
        window.addEventListener('resize', setResponsiveFontSize);
        return () => window.removeEventListener('resize', setResponsiveFontSize);
    }, []);

    return null;
};