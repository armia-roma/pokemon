import {usePokemonDetails} from "../hooks/usePokemonDetails";
import PokemonCard from "./PokemonCard";
import PokemonCardLoader from "./PokemonCardLoader";
import {useFavorites} from "../hooks/useFavorites";
export default function PokemonCardWithDetails({
	pokemon,
}: {
	pokemon: {name: string; url: string};
}) {
	const {data: details, isLoading: detailsLoading} = usePokemonDetails(
		pokemon.url
	);
	const {favorites, toggleFavorite, isFavorite} = useFavorites();

	if (detailsLoading) {
		return <PokemonCardLoader />;
	}

	if (!details) {
		return <PokemonCardLoader />;
	}

	return (
		<PokemonCard
			pokemon={details}
			toggleFavorite={toggleFavorite}
			isFavorite={isFavorite}
		/>
	);
}
