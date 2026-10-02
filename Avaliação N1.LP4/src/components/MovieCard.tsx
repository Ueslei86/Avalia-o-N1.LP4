import React from 'react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  onToggleWatched: (id: string) => void;
  onDelete: (id: string) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onToggleWatched, onDelete }) => {
  return (
    <div style={{ ...styles.card, opacity: movie.watched ? 0.6 : 1 }}>
      <div>
        <h4 style={{ margin: 0, textDecoration: movie.watched ? 'line-through' : 'none' }}>
          {movie.title}
        </h4>
        <small style={{ color: '#94a3b8' }}>{movie.genre} • {'⭐'.repeat(movie.rating)}</small>
      </div>
      <div style={styles.actions}>
        <button onClick={() => onToggleWatched(movie.id)} style={styles.checkBtn}>
          {movie.watched ? 'Desmarcar' : 'Assistido'}
        </button>
        <button onClick={() => onDelete(movie.id)} style={styles.deleteBtn}>
          Excluir
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '0.75rem',
    color: '#ffffff'
  },
  actions: {
    display: 'flex',
    gap: '0.5rem'
  },
  checkBtn: {
    backgroundColor: '#059669',
    color: '#fff',
    border: 'none',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  deleteBtn: {
    backgroundColor: '#dc2626',
    color: '#fff',
    border: 'none',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};