<script>
    import blog from './blog.js'; // 이 파일에서 blog.js를 import합니다.
    export default {
        name: 'DetailPage',
        data() {
            return {
                blog
            }; // blog.js에서 가져온 데이터를 data 속성에 저장합니다.
        },
        created() {
            const postId = this.$route.params.id;
            this.post = blog.find((post) => post.id === parseInt(postId));
        },
    };
</script>

<template>
    <div class="detail-page">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <p>작성일: {{ post.date }}</p>
        <router-link to="/list">목록으로 돌아가기</router-link>
    </div>
</template>