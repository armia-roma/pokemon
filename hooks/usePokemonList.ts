// hooks/usePokemonList.ts
import { useQuery } from "@tanstack/react-query";

const ITEMS_PER_PAGE = 12;
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchPokemonPage(currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const res = await fetch(`${API_URL}/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`);
  if (!res.ok) throw new Error("Failed to fetch Pokemon list");
  return res.json();
}

export function usePokemonList(currentPage: number) {
  return useQuery({
    queryKey: ["pokemonList", currentPage],
    queryFn: () => fetchPokemonPage(currentPage),
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
}
