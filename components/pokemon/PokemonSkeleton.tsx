export function PokemonSkeleton() {
	return (
		<div className="max-w-4xl mx-auto animate-pulse">
			<div className="h-8 bg-gray-200 rounded w-32 mb-6"></div>
			<div className="grid md:grid-cols-2 gap-8">
				<div className="h-96 bg-gray-200 rounded"></div>
				<div className="space-y-4">
					<div className="h-8 bg-gray-200 rounded w-3/4"></div>
					<div className="h-4 bg-gray-200 rounded w-1/2"></div>
					<div className="h-32 bg-gray-200 rounded"></div>
				</div>
			</div>
		</div>
	);
}
export default PokemonSkeleton;
