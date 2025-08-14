import { Box, Skeleton } from "@chakra-ui/react";
import PokemonCardLoader from "./PokemonCardLoader";

function PokemonListSkeleton({itemsPerPage = 12}: {itemsPerPage?: number}) {
	return 	(
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{Array.from({length: itemsPerPage}).map((_, i) => (
					<PokemonCardLoader key={i} />
				))}
			</div>
	
				
				<div 
					className="flex justify-center items-center gap-2">
					<Skeleton height="40px" width="80px" borderRadius="md" />
	
					<Skeleton height="40px" width="80px" borderRadius="md" />
				</div>
		</div>

	);
}

export default PokemonListSkeleton;
