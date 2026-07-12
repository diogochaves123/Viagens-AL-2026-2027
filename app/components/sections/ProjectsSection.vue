<script setup lang="ts">
import { projects } from '~~/data/content'
</script>

<template>
  <section id="projetos" class="section-padding bg-slate-50">
    <div class="container-custom">
      <h2 class="section-title mb-3">O que vamos <span>fazer</span></h2>
      <p class="text-slate-600 mb-10 max-w-xl">
        Algumas coisas práticas que a pasta pretende colocar em marcha ainda neste semestre.
      </p>

      <div class="grid sm:grid-cols-2 gap-5">
        <article
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-xl p-6 border border-slate-200"
        >
          <p class="text-xs font-semibold text-[#258CE6] mb-2">{{ project.tag }}</p>
          <h3 class="font-bold text-slate-900">{{ project.title }}</h3>
          <p class="text-slate-600 text-sm mt-2 leading-relaxed">{{ project.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
