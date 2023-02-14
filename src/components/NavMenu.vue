<script setup>
import { ref } from 'vue'

const brand = ref('🏢 Faux Company Directory 🏢')
</script>

<template>
  <nav>
    <div class="wrapper">
      <a class="brand">
        <span class="brand-title">{{ brand }}</span>
      </a>
      <div class="menu">
        <a href="#" class="menu-item">Departments</a>
        <a href="#" class="menu-item">Settings</a>
        <a href="#" class="menu-logout">Logout</a>
        <a href="#" class="menu-login">Login</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 bg-slate-900 text-slate-200;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
    .brand {
      &-title {
        @apply text-2xl font-bold text-orange-400;
      }
    }
    .menu {
      @apply flex gap-3.5;
      &-item {
        @apply rounded-md px-4 py-2 hover:bg-blue-200 hover:text-slate-900;
      }
      &-login {
        @apply rounded-md bg-orange-400 px-4 py-2 text-slate-900 hover:bg-blue-200;
      }
      &-logout {
        @apply rounded-md bg-orange-800 px-4 py-2 text-slate-900 hover:bg-red-600;
      }
    }
  }
}
</style>
