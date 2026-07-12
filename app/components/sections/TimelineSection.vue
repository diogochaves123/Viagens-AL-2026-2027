<script setup lang="ts">
import { timeline } from '~~/data/content'
</script>

<template>
  <section id="cronograma" class="section-padding bg-white">
    <div class="container-custom max-w-2xl">
      <h2 class="section-title mb-3">Eventos do <span>1º semestre</span></h2>
      <p class="text-slate-600 mb-10">
        Datas que já estão no radar. A organização de cada um começa com antecedência.
      </p>

      <div class="space-y-6">
        <article
          v-for="event in timeline"
          :key="event.title"
          class="p-6 rounded-xl border border-slate-200 bg-slate-50"
        >
          <time class="text-sm font-semibold text-[#258CE6]">{{ event.date }}</time>
          <h3 class="text-lg font-bold text-slate-900 mt-1">{{ event.title }}</h3>
          <p class="text-slate-500 text-sm mt-0.5">{{ event.location }}</p>
          <p class="text-slate-600 text-sm mt-3 leading-relaxed">{{ event.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
