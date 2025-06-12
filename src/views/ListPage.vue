<script setup>
    import blog from './blog.js';
    import DetailPage from './DetailPage.vue';
    import {ref} from 'vue'; // vue.js에서 제공하는 ref 함수를 import합니다.
    const selectID = ref(null);
</script>

<template>
    <div class="container">
        <h2 class="title">블로그 목록</h2>
        <div class="row" @click="selectID = 1">
            <span class="title">글 제목</span>
            <span class="date">작성일</span>
        </div>
        <div class="row" @click="selectID = 2">
            <span class="title">{{ blog[0].title }}</span>
            <span class="date">{{ blog[0].date }}</span>
        </div>
        <div class="row" @click="selectID = 3">
            <span class="title">{{ blog[1].title }}</span>
            <span class="date">{{ blog[1].date }}</span>
        </div>
        <div class="row" @click="selectID = 4">
            <span class="title">{{ blog[2].title }}</span>
            <span class="date">{{ blog[2].date }}</span>
        </div>
    </div>
<DetailPage v-if="selectID" :aaa="blog[selectID-2]"/>
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