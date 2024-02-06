import { defineStore } from 'pinia'
import type { Store } from 'pinia'

interface Pokemon {
  name: string
  url: string
}

interface PokemonWithDetails extends Pokemon {
  details: any
}

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    pokemons: [] as Pokemon[],
    pokemonsWithDetails: [] as PokemonWithDetails[],
    filteredPokemons: [] as PokemonWithDetails[],
    originalPokemonList: [] as PokemonWithDetails[],
    nextUrl: '',
    loadingMore: false,
    isLoadingMore: false
  }),
  actions: {
    async fetchPokemons(this: Store): Promise<void> {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24')
      const { results, next } = await response.json()
      this.pokemons = results
      this.nextUrl = next
    },
    async fetchPokemonDetails(this: Store): Promise<void> {
      for (const pokemon of this.pokemons) {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        this.pokemonsWithDetails.push({ ...pokemon, details: data })
        this.originalPokemonList = this.pokemonsWithDetails
      }
    },
    async fetchMorePokemons(this: Store): Promise<void> {
      if (!this.nextUrl || this.loadingMore) return

      this.loadingMore = true
      this.isLoadingMore = true

      const response = await fetch(this.nextUrl)
      const { results, next } = await response.json()

      this.nextUrl = next
      this.pokemons = []

      for (const pokemon of results) {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        this.pokemonsWithDetails.push({ ...pokemon, details: data })
      }

      this.loadingMore = false
      this.isLoadingMore = false
    },
    filterPokemons(this: Store, searchTerm: string): void {
      if (searchTerm.trim() === '') {
        this.pokemonsWithDetails = this.originalPokemonList
        return
      }

      const filteredPokemons = this.originalPokemonList.filter(pokemon => {
        const nameMatches = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        const codMatches = pokemon.details.id.toString().includes(searchTerm)
        return nameMatches || codMatches
      })

      this.pokemonsWithDetails = filteredPokemons
    }
  }
})