import { json, LoaderFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );
  return json(await res.json());
};

const Pokemon = () => {
  const pokemon = useLoaderData();
  return <div>{pokemon.name}</div>;
};

export default Pokemon;
