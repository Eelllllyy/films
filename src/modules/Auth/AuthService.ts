import {ref} from 'vue'

export const login = ref<string>('')
export const password = ref<string>('')
export const signIn = () => {
  console.log(login.value, password.value)
}