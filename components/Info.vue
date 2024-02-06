<template>
    <NuxtLink :to="'/'+name" class="flex flex-col justify-center items-center min-h-44">
        <img :src="img">
        <h2 class="text-sm font-bold capitalize"> {{ name }} </h2>
        <p 
            v-if="cod"
            class="my-3 text-xs font-bold">
                Cód: {{ cod }} 
        </p>
        <div class="flex justify-center">
            <Label 
                v-for="attr in attribute"
                :type="attr.type.name"           
            />
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        img: String,
        name: String,
        cod: Number,
        attribute: Array
    })
</script>