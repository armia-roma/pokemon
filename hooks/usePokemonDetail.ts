"use client";

import {useQuery} from "@tanstack/react-query";
import type {Pokemon} from "@/libs/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetchPokemonById(id: string): Promise<Pokemon> {
	if (!id) throw new Error("No Pokemon ID provided");

	const res = await fetch(`${API_URL}/pokemon/${id}`);

	if (!res.ok) {
		if (res.status === 404) {
			throw new Error("Pokemon not found");
		}
		throw new Error(`Failed to fetch Pokemon: ${res.status}`);
	}

	const data: Pokemon = await res.json();
	return data;
}

export function usePokemonDetail(id: string) {
	const {
		data: pokemon,
		isLoading,
		isFetching,
		error,
		isError,
	} = useQuery({
		queryKey: ["pokemonDetail", id],
		queryFn: () => fetchPokemonById(id),
		staleTime: 5 * 60 * 1000, // 5 minutes
		retry: (failureCount, error) => {
			// Don't retry on 404 errors
			if (error.message.includes("not found")) return false;
			return failureCount < 2;
		},
		enabled: !!id,
	});

	return {
		pokemon: pokemon || null,
		loading: isLoading || isFetching,
		error: isError ? error?.message || "An error occurred" : null,
	};
}
