import React, { useState, useEffect } from 'react';

export const OfflineBadge: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div style={styles.badge}>
      ⚠️ Você está navegando em modo offline. As alterações continuam salvas localmente!
    </div>
  );
};

const styles = {
  badge: {
    backgroundColor: '#b91c1c',
    color: '#ffffff',
    padding: '0.75rem',
    textAlign: 'center' as const,
    fontWeight: 'bold',
    marginBottom: '1rem',
    borderRadius: '6px'
  }
};