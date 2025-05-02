<template>
  <div class="about">
    <h1>우리에 대해서</h1>
    <p>우리는 웹사이트를 만드는 재미있는 팀입니다!</p>
    <div class="team">
      <div class="member">
        <img src="../assets/1.jpg" alt="홍길동 사진" class="profile-img" />
        <h3>홍길동</h3>
        <p>웹 디자이너</p>
      </div>
      <div class="member">
        <img src="../assets/2.jpg" alt="김철수 사진" class="profile-img" />
        <h3>김철수</h3>
        <p>프로그래머</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  border: 3px solid red;
  text-align: center;
  padding: 20px;
}
.team {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.member {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
}
.profile-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style> 