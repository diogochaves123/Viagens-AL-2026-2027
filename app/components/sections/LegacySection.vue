<script setup lang="ts">
import { motto } from '~~/data/content'
</script>

<template>
  <section id="legado" class="section-padding bg-white">
    <div class="container-custom max-w-3xl">
      <h2 class="section-title mb-6">O que queremos deixar no <span>fim do AL</span></h2>

      <p class="text-slate-700 leading-relaxed mb-5">
        Que o clube tenha ido a mais eventos do que no ano passado, que a organização tenha ficado mais clara e que a
        gente saiba exatamente o que fazer quando chegar 2027/2028.
      </p>
      <p class="text-slate-700 leading-relaxed mb-10">
        Queremos que ninguém tenha ficado de fora por falta de informação ou por acharem que era caro demais — e que
        quem foi tenha voltado com vontade de continuar no clube.
      </p>

      <blockquote class="border-l-4 border-[#FFCC00] pl-6 py-2">
        <p class="text-lg text-slate-800 italic leading-relaxed">"{{ motto }}"</p>
        <footer class="mt-3 text-sm text-slate-500">Pasta de Viagens · AL 2026/2027</footer>
      </blockquote>
    </div>
  </section>
</template>
