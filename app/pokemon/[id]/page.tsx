import {Suspense} from "react";

import {PokemonDetail} from "@/components/pokemon/PokemonDetail";
import {notFound} from "next/navigation";

interface PokemonPageProps {
	params: Promise<{id: string}>;
}

export default async function PokemonPage({params}: PokemonPageProps) {
	const {id} = await params;

	if (!id) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<Suspense fallback={<div>Loading Pokemon details...</div>}>
				<PokemonDetail id={id} />
			</Suspense>
		</div>
	);
}
