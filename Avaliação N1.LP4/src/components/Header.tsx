import React from 'react';

export const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1>🎬 CineList PWA</h1>
      <p>Gerencie seus filmes salvos até mesmo sem internet</p>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    textAlign: 'center' as const,
    borderRadius: '0 0 12px 12px',
    color: '#f8fafc',
    marginBottom: '1.5rem'
  }
};