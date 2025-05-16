<script setup>
    import blog from './blog.js';
</script>

<template>
    <div class="list-page">
        <h2>블로그 목록</h2>
        <div class="row">
            <span class="title">글 제목</span>
            <span class="date">작성일</span>
        </div>
        <ul>
            <li v-for="post in blog" :key="post.id">
                <router-link :to="'/list/' + post.id">{{ post.title }}</router-link>
            </li>
        </ul>
    </div>
</template>