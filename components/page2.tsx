async function fetching() {
  await new Promise((res) => setTimeout(res, 1000));
  //   throw new Error('에러 발생!');
}

export default async function Page2() {
  await fetching();

  return <div>Page2</div>;
}
