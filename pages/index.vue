<template>
  <section class="max-w-5xl mx-auto">
    <Search />
  </section>
  <section class="max-w-5xl mx-auto">
    <h1 class="text-sm font-bold my-8">Pokémons</h1>
  </section>
  <section 
    class="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6" 
    ref="scrollComponent"
  >
    <Card v-for="pokemon in pokemonList" :key="pokemon.name">
      <Info 
        :img="pokemon.details.sprites.front_default"
        :name="pokemon.name"
        :cod="pokemon.details.id"
        :attribute="pokemon.details.types"
      />
    </Card>
  </section>   
</template>
  
<script setup lang="ts">
  import { usePokemonStore } from '~/store/pokemon'
  import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

  const pokemonStore = usePokemonStore()
  const scrollComponent = ref<HTMLElement | null>(null)
  let isScrolling = false

  const fetchDataIfNeeded = async () => {
    if (pokemonStore.pokemonsWithDetails.length === 0) {
      await pokemonStore.fetchPokemons()
      await pokemonStore.fetchPokemonDetails()
    }
  }

  onMounted(async () => {
    await fetchDataIfNeeded()
    window.addEventListener('scroll', handleLoadMorePokemons)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleLoadMorePokemons)
  })

  const handleLoadMorePokemons = async () => {
    if (isScrolling) return

    isScrolling = true

    await loadMorePokemonsOnScroll()

    isScrolling = false
  }

  const loadMorePokemonsOnScroll = async () => {
    if (!scrollComponent.value) return

    const scrollHeight = scrollComponent.value.scrollHeight
    const scrollTop = scrollComponent.value.scrollTop
    const clientHeight = scrollComponent.value.clientHeight

    if (scrollHeight - scrollTop <= clientHeight + 1) {
      await pokemonStore.fetchMorePokemons()
    }
  }

  const pokemonList = computed(() => {
    return pokemonStore.pokemonsWithDetails
  })
</script>
