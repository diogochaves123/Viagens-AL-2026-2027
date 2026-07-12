<script setup lang="ts">
import { challenges } from '~~/data/content'
</script>

<template>
  <section id="desafios" class="section-padding bg-slate-50">
    <div class="container-custom">
      <div class="mb-10">
        <h2 class="section-title">Desafios que a gente <span>prevê</span></h2>
        <p class="text-slate-600 max-w-xl mt-3">
          Não vamos fingir que vai ser tudo fácil. Mas já temos ideia de como lidar com o que costuma aparecer.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        <div
          v-for="item in challenges"
          :key="item.challenge"
          class="bg-white rounded-xl border border-slate-200 p-6"
        >
          <p class="text-xs font-semibold text-slate-400 uppercase mb-2">Desafio</p>
          <p class="font-semibold text-slate-900 mb-4">{{ item.challenge }}</p>
          <p class="text-xs font-semibold text-[#258CE6] uppercase mb-2">O que vamos fazer</p>
          <p class="text-slate-600 text-sm leading-relaxed">{{ item.solution }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
