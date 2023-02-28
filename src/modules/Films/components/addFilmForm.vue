<template>
  <form @submit.prevent="addFilm">
    <header>
      <div class="cross" @click="openForm = !openForm"></div>
      <h3>Добавить фильм</h3>
    </header>
    <input placeholder="Название" v-model="filmName" type="text">
    <input placeholder="Год" v-model="filmDate" type="number">
    <input placeholder="Оценка" v-model="filmGrade" type="number">
    <input placeholder="Комментарий" v-model="filmComment" type="text">
    <button>Добавить</button>
  </form>
</template>
<script setup lang="ts">
import { addFilm, filmName, filmDate, filmGrade, filmComment, openForm} from '@/modules/Films/FilmsService'
</script>
<style scoped>
header{
  color: black;
}
form{
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: white;
  margin: 0 auto;
  margin-top: 30vh;
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
.cross{
  background-image: url('../assets/cross.svg');
  width: 16px;
  height: 16px;
  cursor: pointer;
}
h3{
  margin-bottom: 10px;
}
</style>