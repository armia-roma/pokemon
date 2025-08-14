import { useQuery } from "@tanstack/react-query";

export function usePokemonDetails(url?: string) {
  return useQuery({
    queryKey: ["pokemonDetails", url || ""],
    queryFn: async () => {
      if (!url) throw new Error("No URL provided");
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch details for ${url}`);
      return res.json();
    },
    staleTime: Infinity,
    retry: 1,
    enabled: !!url,
  });
}