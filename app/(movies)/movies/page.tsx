import Movie from '../../../components/movie/movie';
import styles from '../../../styles/movies.module.css';

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

export const metadata = {
  title: 'Movies',
};

async function getMovies() {
  return await fetch(API_URL).then((res) => res.json());
}

export default async function Movies() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          posterPath={movie.poster_path}
        />
      ))}
    </div>
  );
}
