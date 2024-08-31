import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movies/movie-info';
import MovieVideos from '../../../../components/movies/movie-videos';
import { title } from 'process';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Props) {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default function MovieDetail({ params: { id } }: Props) {
  return (
    <div>
      <Suspense fallback={<div>info 로딩 중...</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>비디오 로딩 중...</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
