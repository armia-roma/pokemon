import {usePokemonDetails} from "../hooks/usePokemonDetails";
import PokemonCard from "./PokemonCard";
import PokemonCardLoader from "./PokemonCardLoader";
export default function PokemonCardWithDetails({
	pokemon,
}: {
	pokemon: {name: string; url: string};
}) {
	const {data: details, isLoading: detailsLoading} = usePokemonDetails(
		pokemon.url
	);

	if (detailsLoading) {
		return <PokemonCardLoader />;
	}

	if (!details) {
		return <PokemonCardLoader />;
	}

	return (
		<PokemonCard
			pokemon={details}
			toggleFavorite={(name: string) => {}}
			isFavorite={(name: string) => false}
		/>
	);
}