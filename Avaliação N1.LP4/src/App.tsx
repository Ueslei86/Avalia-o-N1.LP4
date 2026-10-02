import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { OfflineBadge } from './components/OfflineBadge';
import { MovieForm } from './components/MovieForm';
import { MovieCard } from './components/MovieCard';
import { Movie } from './types/movie';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const saved = localStorage.getItem('cinelist_data');
    return saved ? JSON.parse(saved) : [
      { id: '1', title: 'Inception', genre: 'Sci-Fi', rating: 5, watched: true },
      { id: '2', title: 'The Dark Knight', genre: 'Ação', rating: 5, watched: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem('cinelist_data', JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (newMovie: Omit<Movie, 'id'>) => {
    const movieWithId = { ...newMovie, id: crypto.randomUUID() };
    setMovies([movieWithId, ...movies]);
  };

  const handleToggleWatched = (id: string) => {
    setMovies(movies.map(m => m.id === id ? { ...m, watched: !m.watched } : m));
  };

  const handleDeleteMovie = (id: string) => {
    setMovies(movies.filter(m => m.id !== id));
  };

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <OfflineBadge />
        <MovieForm onAddMovie={handleAddMovie} />
        <div>
          <h3>Meus Filmes e Séries ({movies.length})</h3>
          {movies.length === 0 ? (
            <p style={{ color: '#94a3b8' }}>Nenhum item adicionado ao catálogo.</p>
          ) : (
            movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onToggleWatched={handleToggleWatched}
                onDelete={handleDeleteMovie}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0f172a',
    minHeight: '100vh',
    color: '#f8fafc',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  main: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 1rem 2rem 1rem'
  }
};