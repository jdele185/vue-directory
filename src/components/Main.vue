<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import MainSearch from './MainSearch.vue'
import { faker } from '@faker-js/faker'
const firstName = faker.name.firstName()
</script>

<template>
  <div class="wrapper">
    <MainSearch />
    <h1>Hello There, {{ firstName }}</h1>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply container mx-auto flex flex-col gap-4 py-4;
}
</style>
