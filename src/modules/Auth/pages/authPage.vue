<template>
<section class="section-auth">
  <main class="main-auth">
    <form class="form-auth" @submit.prevent="signIn">
      <div>
        <h1>Добро пожаловать!</h1>
        <div class="line-down"></div>
      </div>
      <h3>Введите ваши данные:</h3>
      <input v-model="login" placeholder="Логин" type="text">
      <input v-model="password" placeholder="Пароль" type="password">
      <button @click="$router.push('/films')">Войти</button>
    </form>
  </main>
</section>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {signIn, login, password} from '@/modules/Auth/AuthService'

</script>
<style scoped>
.section-auth{
  width: 100%;
  height: 100vh;
  background: url('../assets/wrapper_auth.jpg') no-repeat center center / cover;

}
.main-auth{
  background-color: rgba(0, 0, 0, 0.582);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-auth{
  width: 30vw;
  height: 47vh;
  margin: 0 auto;
  background-color: white;
  box-shadow: 2px 2px 2px black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 24px;
}
input, button{
  width: 50%;
  height: 4vh;
  margin: 0 auto;
  border-radius: 24px;
  outline: none;
  border: 1px solid rgba(190, 91, 25, 0.897);
  cursor: pointer ;
}
input{
  padding-left: 20px;
  
}
button{
  background-color: rgba(190, 91, 25, 0.897);
  color: white;
}
input:focus{
  background-color: rgba(255, 229, 156, 0.212)  ;
}
.line-down{
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.774);
  margin-top: 15px;
}
@media(max-width: 600px){
  input, button{
  width: 90%;
  height: 4vh;
  }
  .form-auth{
  width: 75vw;
  height: 50vh;
  }
}
</style>