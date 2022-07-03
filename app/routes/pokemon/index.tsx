import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { Link, useLoaderData } from "@remix-run/react";

export async function loader() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  return json(await res.json());
}
const Pokemon = () => {
  const pokemonList = useLoaderData();
  console.log(pokemonList);
  return (
    <div>
      {pokemonList.results.map((pokemon) => (
        <Link
          style={{ display: "block" }}
          to={`/pokemon/${pokemon.name}`}
          key={pokemon.name}
        >
          {pokemon.name}
        </Link>
      ))}
    </div>
  );
};

export default Pokemon;
