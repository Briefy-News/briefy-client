import { useState, useEffect } from 'react';

const useA2HS = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const installApp = () => {
    let result = false;
    deferredPrompt?.prompt();
    deferredPrompt?.userChoice.then((res: any) => {
      if (res.outcome === 'accepted') {
        result = true;
      }
      clearPrompt();
    });
    return result;
  };

  const clearPrompt = () => {
    setDeferredPrompt(null);
  };

  return { deferredPrompt, installApp, clearPrompt };
};

export default useA2HS;
