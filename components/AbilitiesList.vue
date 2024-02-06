<template>
    <div class="abilities">
      <h2 class="p-4 capitalize text-center text-sm font-bold">Abilities</h2>
      <ul class="abilities__list">
        <li 
            v-for="(ability, index) in abilities" 
            :key="index"
            class="abilities__item p-4 font-normal text-xs"
        >
          {{ ability.effect }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>    
    const props = defineProps({
      abilities: Array 
    })
  </script>
  