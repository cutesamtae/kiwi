<script setup>
  import { RouterView } from 'vue-router'
  import blog from './views/blog.js';
  import router from './router';
</script>

  <template>
    <div class="app">
      <nav class="navigation">
        <router-link to="/">홈</router-link>
        <router-link to="/about">소개</router-link>
        <router-link to="/contact">연락하기</router-link>
        <router-link to="/page">페이지</router-link>
        <router-link to="/list">블로그 목록</router-link>
      </nav>
   
      <main>
        <router-view :aaa="blog"/>
      </main>
    </div>
  </template>

  <style scoped>
    .app {
      border: 3px solid black;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .navigation {
      border: 3px solid pink;
      background-color: #f0f0f0;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
    }

    .navigation a {
      margin-right: 20px;
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }

    .navigation a:hover {
      color: #4CAF50;
    }

    .router-link-active {
      color: #4CAF50 !important;
    }
  </style>