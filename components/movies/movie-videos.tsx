import { API_URL } from '../../app/(movies)/movies/page';

async function getVideos(id: string) {
  await new Promise((res) => setTimeout(res, 3000));
  //   throw new Error('에러 발생!');
  return await fetch(`${API_URL}/${id}/videos`).then((res) => res.json());
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
}
