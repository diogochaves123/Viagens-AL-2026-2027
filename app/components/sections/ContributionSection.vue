<script setup lang="ts">
import { contributions } from '~~/data/content'
</script>

<template>
  <section id="contribuicao" class="section-padding bg-white">
    <div class="container-custom">
      <div class="mb-10">
        <h2 class="section-title">Como todo mundo pode <span>ajudar</span></h2>
        <p class="text-slate-600 max-w-xl mt-3">
          A pasta não dá conta sozinha. Cada diretoria e cada CCLEO tem um papel nisso.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="group in contributions"
          :key="group.who"
          class="p-5 rounded-xl bg-slate-50 border border-slate-200"
        >
          <h3 class="font-bold text-[#258CE6] mb-3">{{ group.who }}</h3>
          <ul class="space-y-2">
            <li v-for="item in group.items" :key="item" class="text-sm text-slate-600 leading-relaxed">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
