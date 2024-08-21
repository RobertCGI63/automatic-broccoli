import Header from "../components/Header";

export default async function Blog() {
  const data = await fetch('https://api.github.com/repos/vercel/next.js').then((res) =>
    res.json())
  return (
    <>
      <Header title="Writing Blog" />
      <p>{data.stargazers_count}</p>
    </>
  );
}
