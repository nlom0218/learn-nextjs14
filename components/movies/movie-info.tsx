import { API_URL } from '../../app/(movies)/movies/page';

async function getMovie(id: string) {
  await new Promise((res) => setTimeout(res, 2000));
  return await fetch(`${API_URL}/${id}`).then((res) => res.json());
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div>
      <div>{movie.title}</div>
      <span>{movie.overview}</span>
    </div>
  );
}
