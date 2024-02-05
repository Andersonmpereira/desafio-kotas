<template>
    <section class="details max-w-5xl mx-auto">
        <Card>
            <Info 
                :img="pokemon.details.sprites.front_default"
                :name="pokemon.name"
                :attribute="pokemon.details.types"
            />
        </Card>
        <Card>
            <AbilitiesList :abilities="abilities" />
        </Card>
    </section>
</template>

<script setup>
    import { usePokemonStore } from '~/store/pokemon'
    import { useSinglePokemonStore } from '~/store/singlePokemon'
    
    const route = useRoute()
    const pokemonStore = usePokemonStore()
    const singlePokemonStore = useSinglePokemonStore()
    const params = route.params.pokemon.toLowerCase()

    const pokemon = pokemonStore.pokemonsWithDetails.find(pokemon => {
        return pokemon.name.toLowerCase() === params        
    })

    let abilities = []

    if (pokemon) {
        singlePokemonStore.fetchPokemonDetailsByUrl(pokemon.url)
        abilities = singlePokemonStore.abilitiesDetails
    }

    onBeforeUnmount(() => {
        singlePokemonStore.abilitiesDetails = []
    })
</script>