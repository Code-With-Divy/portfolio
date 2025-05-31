'use client';
import { useEffect } from 'react';

export default function ErudaConsole() {
  useEffect(() => {
      const script = document.createElement('script');
      script.src = '//cdn.jsdelivr.net/npm/eruda';
      document.body.appendChild(script);
      script.onload = () => {
        window.eruda && window.eruda.init();
      };
    
  }, []);

  return null;
}