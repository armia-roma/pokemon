"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Progress , Button, Badge, Card, HStack} from "@chakra-ui/react"
import { ArrowLeft, Heart } from "lucide-react"
import type { Pokemon } from "./../libs/types"

interface PokemonDetailProps {
  id: string
}

export function PokemonDetail({ id }: PokemonDetailProps) {
  const router = useRouter()
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchPokemon = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { signal: controller.signal })

        if (!response.ok) throw new Error("Pokemon not found")

        const data = await response.json()
        setPokemon(data)
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()

    return () => controller.abort()
  }, [id])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-32 mb-6"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-96 bg-muted rounded"></div>
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-32 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !pokemon) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive mb-4">Error: {error || "Pokemon not found"}</p>
        <Button onClick={() => router.push("/")}>Back to List</Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Button variant="ghost" onClick={() => console.log()}>
          <Heart
            className={`h-4 w-4 mr-2 "fill-red-500 text-red-500" : "text-muted-foreground"}`}
          />
          
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card.Root>
          <Card.Body className="p-6">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              {pokemon.sprites?.other?.["official-artwork"]?.front_default ? (
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default || "/placeholder.svg"}
                  alt={pokemon.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-muted-foreground">No image available</div>
              )}
            </div>
          </Card.Body>
        </Card.Root>

        <div className="space-y-6">
          <Card.Root>
            <Card.Header>
              <div className="flex items-center justify-between">
                <Card.Title className="text-3xl capitalize">{pokemon.name}</Card.Title>
                <span className="text-muted-foreground">#{pokemon.id.toString().padStart(3, "0")}</span>
              </div>
            </Card.Header>
            <Card.Body className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Types</h3>
                <div className="flex gap-2">
                  {pokemon.types?.map((type) => (
                    <Badge key={type.type.name} variant="solid">
                      {type.type.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Height</h3>
                  <p className="text-muted-foreground">{pokemon.height ? `${pokemon.height / 10} m` : "Unknown"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Weight</h3>
                  <p className="text-muted-foreground">{pokemon.weight ? `${pokemon.weight / 10} kg` : "Unknown"}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Abilities</h3>
                <div className="flex flex-wrap gap-2">
                  {pokemon.abilities?.map((ability) => (
                    <Badge key={ability.ability.name} variant="outline">
                      {ability.ability.name.replace("-", " ")}
                      {ability.is_hidden && " (Hidden)"}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Base Stats</h3>
                <div className="space-y-2">
                  {pokemon.stats?.map((stat) => (
                    <div key={stat.stat.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{stat.stat.name.replace("-", " ")}</span>
                        <span>{stat.base_stat}</span>
                      </div>
                       <Progress.Root >
						<HStack gap="5">
			
							<Progress.Track flex="1">
							<Progress.Range />
							</Progress.Track>
						</HStack>
						</Progress.Root>
                    </div>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card.Root>
        </div>
      </div>
    </div>
  )
}
