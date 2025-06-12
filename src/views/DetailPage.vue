<script setup>
    const {aaa, id} = defineProps(['aaa', 'id']);
    const post = aaa[id - 1]; // id는 1부터 시작하므로 배열 인덱스는 id - 1
</script>

<template>
    <div class="detail">
        <h2> {{ aaa.title }} </h2>
        <p> {{ aaa.content }} </p>
        <p> {{ aaa.date }} </p>    
    </div>
</template>