<script setup>
    const {aaa} = defineProps(['aaa']);
</script>

<template>
    <div>
        <h2> {{ aaa.title }} </h2>
        <p> {{ aaa.content }} </p>
        <p> {{ aaa.date }} </p>
        
    </div>
</template>