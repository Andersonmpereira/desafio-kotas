import { defineStore } from 'pinia'
import type { Store } from 'pinia'

export const useSinglePokemonStore = defineStore({
  id: 'singlePokemon',
  state: () => ({
    pokemonDetails: null as PokemonDetail | null,
    abilitiesDetails: [] as AbilityDetail[]
  }),
  actions: {
    async fetchPokemonDetailsByUrl(this: Store, url: string): Promise<void> {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.pokemonDetails = data;

        await this.fetchAbilitiesDetails();
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
      }
    },
    async fetchAbilitiesDetails(this: Store): Promise<void> {
      try {
        if (!this.pokemonDetails) return;

        const abilities = this.pokemonDetails.abilities;
        const abilitiesUrls = abilities.map(ability => ability.ability.url);

        for (const url of abilitiesUrls) {
          const response = await fetch(url);
          const data = await response.json();
          const effectEntry = data.effect_entries.find((entry: any) => entry.language.name === 'en');
          if (effectEntry) {
            this.abilitiesDetails.push({
              effect: effectEntry.effect,
              short_effect: effectEntry.short_effect
            });
          }
        }
      } catch (error) {
        console.error('Error fetching abilities details:', error);
      }
    },
    clearAbilitiesDetails(this: Store): void {
      this.abilitiesDetails = [];
    } // Adicionando a função clearAbilitiesDetails para limpar as abilitiesDetails
  }
});
