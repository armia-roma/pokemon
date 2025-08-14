import { Box, Skeleton } from "@chakra-ui/react";

function PokemonListSkeleton() {
	return 	(
		<div>
			<div 
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
				{Array.from({length: 8}).map((_, index) => (
					<Box key={index} className="rounded-lg border">
						{/* Image skeleton */}
						<Skeleton height="150px" borderRadius="md" />
					</Box>
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
