import {PokemonList} from "@/components/PokemonList";

import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {fetchPokemonPage} from "@/hooks/usePokemonList";
import {Suspense} from "react";

export default async function HomePage() {
	const queryClient = new QueryClient();

	// Prefetch data on the server
	await queryClient.prefetchQuery({
		queryKey: ["pokemon-list", 1],
		queryFn: () => fetchPokemonPage(1), // Fetch the first page by default
	});
	return (
		<div className="container mx-auto px-4 py-8">
			<header className="mb-8">
				<h1 className="text-4xl font-bold text-center mb-2">
					Pokemon Explorer
				</h1>
				<p className="text-muted-foreground text-center">
					Discover and explore Pokemon from the PokéAPI
				</p>
			</header>

			<HydrationBoundary state={dehydrate(queryClient)}>
				<Suspense
					fallback={
						<div className="text-center py-8">
							Loading Pokemon...
						</div>
					}
				>
					<PokemonList />
				</Suspense>
			</HydrationBoundary>
		</div>
	);
}
