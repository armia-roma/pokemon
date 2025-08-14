"use client";

import {Button, Badge, Card} from "@chakra-ui/react";
import {ArrowLeft, Heart} from "lucide-react";
import {useRouter} from "next/navigation";
import {usePokemonDetail} from "@/hooks/usePokemonDetail";

import {PokemonSkeleton} from "./PokemonSkeleton";
import {PokemonError} from "./PokemonError";
import {PokemonImage} from "./PokemonImage";
import {PokemonStats} from "./PokemonStats";
import {useFavorites} from "@/hooks/useFavorites";

interface Props {
	id: string;
}

export function PokemonDetail({id}: Props) {
	const router = useRouter();
	const {pokemon, loading, error} = usePokemonDetail(id);
	const {toggleFavorite, isFavorite} = useFavorites();
	if (loading) return <PokemonSkeleton />;
	if (error || !pokemon)
		return <PokemonError message={error || "Pokemon not found"} />;

	return (
		<div className="max-w-4xl mx-auto">
			{/* Header Actions */}
			<div className="flex items-center justify-between mb-6">
				<Button variant="ghost" onClick={() => router.back()}>
					<ArrowLeft className="h-4 w-4 mr-2" /> Back
				</Button>
				<Button
					variant="ghost"
					onClick={() => toggleFavorite(pokemon.name)}
				>
					<Heart
						className={` ${
							isFavorite(pokemon.name)
								? "fill-red-500 text-red-500"
								: "text-muted-foreground"
						} h-4 w-4 mr-2`}
					/>
				</Button>
			</div>

			{/* Content */}
			<div className="grid md:grid-cols-2 gap-8">
				<Card.Root>
					<Card.Body className="p-6">
						<PokemonImage
							src={
								pokemon.sprites?.other?.["official-artwork"]
									?.front_default
							}
							alt={pokemon.name}
						/>
					</Card.Body>
				</Card.Root>

				<div className="space-y-6">
					<Card.Root>
						<Card.Header>
							<div className="flex items-center justify-between">
								<Card.Title className="text-3xl capitalize">
									{pokemon.name}
								</Card.Title>
								<span className="text-muted-foreground">
									#{pokemon.id.toString().padStart(3, "0")}
								</span>
							</div>
						</Card.Header>
						<Card.Body className="space-y-4">
							{/* Types */}
							<div>
								<h3 className="font-semibold mb-2">Types</h3>
								<div className="flex gap-2">
									{pokemon.types?.map((t) => (
										<Badge
											key={t.type.name}
											variant="solid"
										>
											{t.type.name}
										</Badge>
									))}
								</div>
							</div>

							{/* Height & Weight */}
							<div className="grid grid-cols-2 gap-4">
								<div>
									<h3 className="font-semibold">Height</h3>
									<p className="text-muted-foreground">
										{pokemon.height
											? `${pokemon.height / 10} m`
											: "Unknown"}
									</p>
								</div>
								<div>
									<h3 className="font-semibold">Weight</h3>
									<p className="text-muted-foreground">
										{pokemon.weight
											? `${pokemon.weight / 10} kg`
											: "Unknown"}
									</p>
								</div>
							</div>

							{/* Abilities */}
							<div>
								<h3 className="font-semibold mb-2">
									Abilities
								</h3>
								<div className="flex flex-wrap gap-2">
									{pokemon.abilities?.map((ab) => (
										<Badge
											key={ab.ability.name}
											variant="outline"
										>
											{ab.ability.name.replace("-", " ")}
											{ab.is_hidden && " (Hidden)"}
										</Badge>
									))}
								</div>
							</div>

							{/* Stats */}
							<PokemonStats stats={pokemon.stats} />
						</Card.Body>
					</Card.Root>
				</div>
			</div>
		</div>
	);
}
