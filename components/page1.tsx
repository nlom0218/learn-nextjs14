async function fetching() {
  await new Promise((res) => setTimeout(res, 1000));
  //   throw new Error('에러 발생!');
}

export default async function Page1() {
  await fetching();

  return <div>Page1</div>;
}
