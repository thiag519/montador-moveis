<script setup lang="ts">
import {useTheme} from '../composables/useTheme'
import dark from '../assets/noite.png'
import light from '../assets/sol.png'


const {toggleTheme, isDark} = useTheme()
</script>

<template>
  <header class="bg-white shadow-md h-10 dark:bg-gray-900 relative">
    <div class="max-w-6xl w-full mx-auto px-10 h-10 flex justify-between items-center fixed bg-white dark:bg-gray-900">
      <h1 class="text-xl font-bold text-gray-800 dark:text-gray-200">
        LOGO
      </h1>
      <div class="flex items-end justify-center gap-3 ">
        <button
          @click="toggleTheme"
          class="relative w-8 h-4 bg-gray-300 dark:bg-gray-700 rounded-full transition flex items-center"
        ><div class="w-4 h-4 text-[10px] text-center bg-white dark:bg-gray-400 text-gray-800 dark:text-gray-200 rounded-full shadow-md transform transition"
        :class="isDark ? 'translate-x-4 ' : 'translate-x-0'">
        
        <img :src="isDark? dark : light" :alt="isDark? 'lua' : 'sol'">
        </div>
        </button>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          class="bg-primary px-2.5 py-1.5 rounded-lg text-sm text-white"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </header>
</template>