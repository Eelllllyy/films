<template>
  <section class="section">
    <header>
      <h1>
        Мои фильмы
      </h1>
      <div class="container-btn"><button @click="openForm = !openForm">Добавить фильм</button></div>
    </header>
    <transition name="fade">
      <div v-if="openForm" class="container-form" @click="openForm = !openForm">
      <addFilmForm class="film-form" @click.stop></addFilmForm>
    </div>
    </transition>
    <main>
      <table>
        <thead>
          <th>Название :</th>
          <th>Год :</th>
          <th>Моя оценка :</th>
          <th>Мой комменатрий :</th>
        </thead>
        <tbody>
          <tr v-for="oneFilm in allFilms" :key="oneFilm.id">
            <td>{{ oneFilm.title}}</td>
            <td>{{ oneFilm.date}}</td>
            <td>{{ oneFilm.grade}}</td>
            <td>{{ oneFilm.comment}}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </section>
</template>
<script setup lang="ts">
import addFilmForm  from '@/modules/Films/components/addFilmForm.vue'
import { allFilms, openForm } from '@/modules/Films/FilmsService'
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
header{
  display: flex;
  justify-content: space-between;
  padding: 2vw 0;
}
.section{
  background-color: black;
  color: white;
  width: 100vw;
  height: 100vh;
}
.container-form{
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.film-form{
  background: white;
  border-radius: 12px;
  width: 30vw;
  height: 42vh;
  padding: 10px;
}
table {
	width: 100%;
	border: none;
	margin-bottom: 20px;
}
table thead th {
	padding: 10px;
	font-weight: 500;
	font-size: 24px;
	line-height: 25px;
	text-align: left;
	border-top: 2px solid rgba(190, 91, 25, 0.897);
	border-bottom: 2px solid rgba(190, 91, 25, 0.897);
}
table tbody td {
	padding: 10px;
	font-size: 20px;
	line-height: 44px;
	border-top: 1px solid rgba(116, 54, 13, 0.897);
	text-align: left;
}
button{
  height: 4vh;
  padding: 9px;
  border-radius: 24px;
  outline: none;
  border: 1px solid rgba(190, 91, 25, 0.897);
  background-color: rgba(190, 91, 25, 0.897);
  cursor: pointer ;
  color: white;
}
input{
  padding-left: 20px;
}
h1{
  font-size: 40px;
}
.container-btn{
  display: flex;
  align-items: center;
}
@media(max-width: 600px){
  .film-form{
  width: 90vw;
  padding: 10px;
  }
  table thead th {
	font-size: 15px;
  }
}
</style>