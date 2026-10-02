import React, { useState } from 'react';
import { Movie } from '../types/movie';

interface MovieFormProps {
  onAddMovie: (movie: Omit<Movie, 'id'>) => void;
}

export const MovieForm: React.FC<MovieFormProps> = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !genre.trim()) return;

    onAddMovie({ title, genre, rating, watched: false });
    setTitle('');
    setGenre('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>Adicionar Filme / Série</h3>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Gênero (ex: Ação, Sci-Fi)"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={styles.input}
        required
      />
      <div style={styles.ratingGroup}>
        <label>Nota: {rating}/5</label>
        <input
          type="range"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </div>
      <button type="submit" style={styles.button}>Cadastrar</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
    backgroundColor: '#1e293b',
    padding: '1.25rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    color: '#ffffff'
  },
  input: {
    padding: '0.6rem',
    borderRadius: '4px',
    border: '1px solid #475569',
    backgroundColor: '#0f172a',
    color: '#ffffff'
  },
  ratingGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  button: {
    padding: '0.6rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold' as const
  }
};