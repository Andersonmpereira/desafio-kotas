<template>
  <section class="max-w-5xl mx-auto">
    <Search />
  </section>
  <section class="max-w-5xl mx-auto">
    <h1 class="text-sm font-bold my-8">Pokémons</h1>
  </section>
  <section 
    class="max-w-5xl mx-auto grid xl:grid-cols-5 sm:grid-cols-2 gap-x-4 gap-y-6" 
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
  
  interface PokemonWithDetails {
    name: string
    url: string
    details: any 
  }

  const pokemonStore = usePokemonStore() as ReturnType<typeof usePokemonStore>
  const scrollComponent = ref<HTMLElement | null>(null)
  let isScrolling = false

  onMounted(async () => {
    await pokemonStore.fetchPokemons()
    await pokemonStore.fetchPokemonDetails()
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = async () => {
    if (isScrolling) return

    isScrolling = true

    await loadMorePokemons()

    isScrolling = false
  }

  const loadMorePokemons = async () => {
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