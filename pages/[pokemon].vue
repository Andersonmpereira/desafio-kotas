<template>
    <section class="max-w-5xl mx-auto">
        <Card>
            <Info 
                :img="pokemon.details.sprites.front_default"
                :name="pokemon.name"
                :attribute="pokemon.details.types"
            />
        </Card>
        <Card>
            <AbilitiesList/>
        </Card>
    </section>
</template>

<script setup>
    import { usePokemonStore } from '~/store/pokemon'
    
    const route = useRoute()
    const pokemonStore = usePokemonStore()
    const params = route.params.pokemon.toLowerCase()

    const pokemon = pokemonStore.pokemonsWithDetails.find(pokemon => {
        return pokemon.name.toLowerCase() === params        
    })

    console.log(pokemon)
</script>