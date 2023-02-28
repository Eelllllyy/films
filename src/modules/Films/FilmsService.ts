import { ref } from 'vue'
export const openForm = ref<boolean>(false)
export const filmName = ref<string>('')
export const filmDate = ref<number | null>()
export const filmGrade = ref<number | null>()
export const filmComment = ref<string>('')
export const allFilms = ref<any>([])
export const addFilm = () => {
  let film :object = {
    title : filmName.value,
    date: filmDate.value,
    grade: filmGrade.value,
    comment: filmComment.value,
    id: Date.now()
  }
  allFilms.value?.push(film)
  openForm.value = false;
  filmName.value = '';
  filmDate.value = null;
  filmGrade.value = null;
  filmComment.value = '';
}