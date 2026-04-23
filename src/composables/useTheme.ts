import {ref} from 'vue'

const isDark = ref(false);

const applyTheme = () => {
  const html = document.documentElement

  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const initTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  applyTheme()
}
  
initTheme()

export const useTheme = () => {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }
  return{
    isDark,
    toggleTheme
  }
}