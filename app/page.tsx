import { Suspense } from "react"
import { PokemonList } from "@/components/PokemonList"
import type { SearchParams } from "../libs/types"
import PokemonListSkeleton from "@/components/PokemonListSkeleton"


interface HomePageProps {
  searchParams: Promise<SearchParams>
}

export default async function HomePage({ searchParams }: HomePageProps) {

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-2">Pokemon Explorer</h1>
        <p className="text-muted-foreground text-center">Discover and explore Pokemon from the PokéAPI</p>
      </header>

      <Suspense fallback={<PokemonListSkeleton/>}>
        <PokemonList  />
      </Suspense>
    </div>
  )
}
