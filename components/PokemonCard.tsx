import {Pokemon} from "../libs/types";
import {Card, Button, Badge} from "@chakra-ui/react";
import {Heart} from "lucide-react";
import Link from "next/link";
interface PokemonCardProps {
	pokemon: Pokemon;
	toggleFavorite: (name: string) => void;
	isFavorite: (name: string) => boolean;
}
function PokemonCard({pokemon, toggleFavorite, isFavorite}: PokemonCardProps) {
	return (
		<Card.Root
			key={pokemon.id}
			className="hover:shadow-lg transition-shadow"
		>
			<Card.Header className="pb-2">
				<div className="flex items-center justify-between">
					<Card.Title className="text-lg capitalize">
						{pokemon.name}
					</Card.Title>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => toggleFavorite(pokemon.name)}
						className="p-1"
					>
						<Heart
							className={`h-4 w-4 ${
								isFavorite(pokemon.name)
									? "fill-red-500 text-red-500"
									: "text-muted-foreground"
							}`}
						/>
					</Button>
				</div>
				<p className="text-sm text-muted-foreground">
					#{pokemon.id.toString().padStart(3, "0")}
				</p>
			</Card.Header>
			<Card.Body>
				<Link href={`/pokemon/${pokemon.id}`}>
					<div className="cursor-pointer">
						<div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
							{pokemon.sprites?.other?.["official-artwork"]
								?.front_default ? (
								<img
									src={
										pokemon.sprites.other[
											"official-artwork"
										].front_default || "/placeholder.svg"
									}
									alt={pokemon.name}
									className="w-full h-full object-contain"
								/>
							) : (
								<div className="text-muted-foreground">
									No image
								</div>
							)}
						</div>
						<div className="flex flex-wrap gap-1">
							{pokemon.types?.map((type) => (
								<Badge
									key={type.type.name}
									variant="solid"
									className="text-xs"
								>
									{type.type.name}
								</Badge>
							))}
						</div>
					</div>
				</Link>
			</Card.Body>
		</Card.Root>
	);
}

export default PokemonCard;
