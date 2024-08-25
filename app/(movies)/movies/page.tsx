import Link from 'next/link';

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
    <div>
      {movies.map((movie) => (
        <li>
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </div>
  );
}
