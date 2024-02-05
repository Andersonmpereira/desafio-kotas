<template>
    <div class="search my-4">
      <input type="text" class="search__input w-full px-9 py-3.5 rounded-3xl text-sm font-normal" placeholder="Pesquise por nome ou código" v-model="searchTerm">
    </div>
</template>
  
<script setup lang="ts">
    import { usePokemonStore } from '~/store/pokemon'
  
    const pokemonStore = usePokemonStore() as ReturnType<typeof usePokemonStore>
    const searchTerm = ref('')
  
    watch(searchTerm, (newValue, oldValue) => {
        filterPokemons(newValue)
    })
  
    const filterPokemons = (searchTerm: string) => {
        const filteredPokemons = pokemonStore.pokemonsWithDetails.filter(pokemon => {
            const nameMatches = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            const codMatches = pokemon.details.id.toString().includes(searchTerm)
            return nameMatches || codMatches
        })
        pokemonStore.filterPokemons(searchTerm) // Passar apenas o 'searchTerm'
        pokemonStore.filteredPokemons = filteredPokemons // Definir 'filteredPokemons' como uma propriedade no store
    }
</script>
  