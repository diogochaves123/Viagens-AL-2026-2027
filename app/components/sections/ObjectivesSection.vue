<script setup lang="ts">
import { objectives } from '~~/data/content'
</script>

<template>
  <section id="objetivos" class="section-padding bg-[#258CE6]">
    <div class="container-custom">
      <div class="mb-10">
        <h2 class="section-title text-white">Objetivos</h2>
        <p class="text-blue-100 max-w-xl mt-3">
          Facilitar a ida aos eventos com boa hospedagem, passagens negociadas e o menor custo possível para o grupo.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-5">
        <div
          v-for="(obj, i) in objectives"
          :key="obj.title"
          class="bg-white/10 border border-white/20 rounded-xl p-6"
        >
          <p class="text-[#FFCC00] font-bold text-sm mb-2">{{ String(i + 1).padStart(2, '0') }}</p>
          <h3 class="font-bold text-white text-lg mb-2">{{ obj.title }}</h3>
          <p class="text-blue-100 text-sm leading-relaxed">{{ obj.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
