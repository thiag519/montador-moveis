<script setup lang="ts">
import mot1 from '../assets/montador/mot1.jfif'
import mot2 from '../assets/montador/mot2.jfif'
import mot3 from '../assets/montador/mot3.jfif'
import mot4 from '../assets/montador/mot4.jpg'

const services = [
  {
    title: "Montagem de móveis",
    desc: "Montagem completa com acabamento profissional",
    url: mot1  
  },
  {
    title: "Desmontagem",
    desc: "Desmontagem segura para mudanças",
    url: mot2
  },
  {
    title: "Instalação de painéis",
    desc: "Fixação e alinhamento perfeito",
    url: mot3
  },
  {
    title: "Reparos e ajustes",
    desc: "Correções e manutenção de móveis",
    url: mot4
  }
]
</script>

<template>
  <section id="servicos" class="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class=" max-w-6xl mx-auto px-6 text-center">

      <h2 class="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200">
        Serviços Profissionais
      </h2>

      <div class="justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="(item, index) in services"
          :key="index"
          class="bg-white max-w-lg p-6 rounded-2xl shadow hover:shadow-lg transition dark:bg-gray-800 flex flex-col 
          items-center"
        >
          <h3 class="font-semibold text-xl mb-2 text-gray-800 dark:text-gray-200">
            {{ item.title }}
          </h3>

          <p class="text-gray-600 text-xs dark:text-gray-200">
            {{ item.desc }}
          </p>
          <img :src="item.url" :alt="item.title" class="h-60 w-full object-cover max-w-xl py-3">
        </div>

      </div>
    </div>
  </section>
</template>