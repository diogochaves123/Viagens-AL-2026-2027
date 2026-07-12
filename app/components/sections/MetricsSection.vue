<script setup lang="ts">
import { metrics } from '~~/data/content'
</script>

<template>
  <section id="metricas" class="section-padding bg-slate-50">
    <div class="container-custom">
      <div class="mb-10">
        <h2 class="section-title">Como vamos saber se deu <span>certo</span></h2>
        <p class="text-slate-600 max-w-xl mt-3">
          Nada muito complicado — vamos acompanhar números e resultados ao longo do ano, com destaque para quem
          participou.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="bg-white rounded-xl p-5 border border-slate-200"
        >
          <h3 class="font-bold text-slate-900 mb-2">{{ metric.label }}</h3>
          <p class="text-slate-600 text-sm">{{ metric.target }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
