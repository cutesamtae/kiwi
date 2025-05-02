<template>
  <div class="contact">
    <h1>연락하기</h1>
    <div class="contact-form">
      <div class="form-group">
        <label>이름:</label>
        <input type="text" placeholder="이름을 입력하세요">
      </div>
      <div class="form-group">
        <label>이메일:</label>
        <input type="email" placeholder="이메일을 입력하세요">
      </div>
      <div class="form-group">
        <label>메시지:</label>
        <textarea placeholder="메시지를 입력하세요"></textarea>
      </div>
      <button>보내기</button>
    </div>
  </div>
</template>

<style scoped>
.contact {
  border: 3px solid blue;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>