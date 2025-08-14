
export interface PokemonListItem {
  name: string
  url: string
}

export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: PokemonListItem[]
}

export interface SearchParams {
  q?: string
  type?: string
  sort?: string
  page?: string
  favorites?: string
}
export interface Pokemon {
  id: number
  name: string
  url: string
  sprites: {
    front_default: string | null
    other: {
      "official-artwork": {
        front_default: string | null
      }
    }
  }
  types: Array<{
    type: {
      name: string
      url: string
    }
  }>
  height: number
  weight: number
  base_experience: number
  abilities: Array<{
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
  }>
  stats: Array<{
    base_stat: number
    stat: {
      name: string
      url: string
    }
  }>
}
