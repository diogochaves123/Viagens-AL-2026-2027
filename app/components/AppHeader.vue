<script setup lang="ts">
const menuOpen = ref(false)

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Diretores', href: '#diretores' },
  { label: 'A pasta', href: '#proposito' },
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Eventos', href: '#cronograma' },
  { label: 'Projetos', href: '#projetos' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm"
  >
    <div class="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
      <a href="#inicio" class="flex items-center gap-3 shrink-0" @click="closeMenu">
        <img
          src="/images/logo-al-2026.png"
          alt="LEO Clube Soledade - AL 2026/2027"
          class="h-10 md:h-14 w-auto object-contain"
        />
      </a>

      <nav class="hidden lg:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-[#258CE6] rounded-lg transition-colors"
        >
          {{ item.label }}
        </a>
        <a
          href="#convite"
          class="ml-2 px-4 py-2 text-sm font-bold text-slate-900 bg-[#FFCC00] hover:bg-[#e6b800] rounded-lg transition-colors"
        >
          Participe
        </a>
      </nav>

      <button
        class="lg:hidden p-2 rounded-lg text-[#258CE6] hover:bg-blue-50"
        aria-label="Abrir menu"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="menuOpen"
        class="lg:hidden border-t border-blue-100 bg-white px-4 py-4 flex flex-col gap-1"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#258CE6] rounded-xl"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <a
          href="#convite"
          class="mt-2 px-4 py-3 text-center text-sm font-bold text-slate-900 bg-[#FFCC00] rounded-xl"
          @click="closeMenu"
        >
          Participe
        </a>
      </nav>
    </Transition>
  </header>
</template>
