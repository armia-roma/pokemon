import Image from "next/image";

interface Props {
	src?: string | null;
	alt: string;
}

export function PokemonImage({src, alt}: Props) {
	return (
		<div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
			{src ? (
				<Image src={src} alt={alt} fill className="object-contain" />
			) : (
				<div className="text-muted-foreground">No image available</div>
			)}
		</div>
	);
}
