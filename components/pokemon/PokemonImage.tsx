interface Props {
	src?: string | null;
	alt: string;
}

export function PokemonImage({src, alt}: Props) {
	return (
		<div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
			{src ? (
				<img
					src={src}
					alt={alt}
					className="w-full h-full object-contain"
				/>
			) : (
				<div className="text-muted-foreground">No image available</div>
			)}
		</div>
	);
}
