<template>
    <div
        class="h-4 w-20 mx-1 rounded-lg text-white text-xs leading-4 text-center uppercase"
        :class="type" 
    >
        {{ type }}
    </div>
</template>

<script setup>
    const props = defineProps({
        type: String
    })
</script>