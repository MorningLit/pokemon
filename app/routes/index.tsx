import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <p className="text-3xl">Pokemon!</p>
      <form method="get" action="/search">
        <input
          name="pokemon"
          className="border-b-rose-900 border-2"
          placeholder="Start searching for your favorite pokemon!"
        />
        <button type="submit">Search</button>
      </form>
      <Link prefetch="render" to={"/pokemon"}>
        Or see the full list of pokemon here
      </Link>
    </div>
  );
}
