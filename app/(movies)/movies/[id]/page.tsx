import { Suspense } from 'react';
import MovieInfo from '../../../../components/movies/movie-info';
import MovieVideos from '../../../../components/movies/movie-videos';

export const metadata = {
  title: 'Movie detail',
};

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
