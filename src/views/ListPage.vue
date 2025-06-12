<script setup>
    const { aaa } = defineProps(['aaa']); // aaa는 blog.js에서 가져온 데이터
</script>

<template>
    <div class="row">
        <router-link to="/detail/1">{{ blog[0].title }}</router-link>
        <span class="date">{{ blog[0].date }}</span>
    </div>
    <div class="row">
        <router-link to="/detail/1">{{ blog[1].title }}</router-link>
        <span class="date">{{ blog[1].date }}</span>
    </div>
    <div class="row">
        <router-link to="/detail/1">{{ blog[2].title }}</router-link>
        <span class="date">{{ blog[2].date }}</span>
    </div>
</template>

<style scoped>.container {
        border: 1px solid lightgray;
        max-width: 9000px;
        width: 100%;
        margin: 0 auto;
        padding: 16px;
        box-sizing: border-box;
    }
    .title {
        text-align: left;
    }
 
    .date {
        text-align: right;
        color: #888;
        font-size: 12px;
    }
 
    .row {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #eee;
    }
</style>