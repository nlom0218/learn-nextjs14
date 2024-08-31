'use client';

import Link from 'next/link';
import styles from '../../styles/movie.module.css';
import { useRouter } from 'next/navigation';

type Movie = {
  title: string;
  id: string;
  posterPath: string;
};

export default function Movie({ title, id, posterPath }: Movie) {
  const router = useRouter();
  const onClickPoster = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie} onClick={onClickPoster}>
      <img src={posterPath} alt={title} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
