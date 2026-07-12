<script setup lang="ts">
import { directors } from '~~/data/content'

const photoLoaded = reactive<Record<string, boolean>>(
  Object.fromEntries(directors.map((d) => [d.name, false])),
)
</script>

<template>
  <section id="diretores" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="section-title">Quem cuida da <span>pasta</span></h2>
        <p class="section-subtitle mx-auto">
          Diogo, Gustavo e Bruno — diretores de Viagens neste AL.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="director in directors"
          :key="director.name"
          class="bg-slate-50 rounded-2xl p-8 border border-slate-200"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="relative w-28 h-28 rounded-full overflow-hidden bg-[#258CE6] flex items-center justify-center mb-5 ring-2 ring-[#FFCC00]"
            >
              <img
                v-show="photoLoaded[director.name]"
                :src="director.photo"
                :alt="director.name"
                class="w-full h-full object-cover"
                @load="photoLoaded[director.name] = true"
                @error="photoLoaded[director.name] = false"
              />
              <span v-show="!photoLoaded[director.name]" class="text-2xl font-bold text-white">
                {{ director.initials }}
              </span>
            </div>

            <h3 class="text-lg font-bold text-slate-900">{{ director.name }}</h3>
            <p class="text-[#258CE6] font-medium text-sm mt-1">{{ director.role }}</p>
            <p class="mt-2 text-slate-500 text-sm">{{ director.time }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
