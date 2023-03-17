<script setup>


import { array, name, email, jobDescriptor } from 'minifaker'
import 'minifaker/locales/en'



</script>

<template>
  <div class="card" @click="selectCard">
    <div class="card-details">
      <p class="card-details-name">{{ array(1, () => name()) }}</p>
      <p class="card-details-email">{{ array(1, () => email()) }}</p>
      <p class="card-details-job">{{ array(1, () => jobDescriptor()) }}</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply cursor-pointer overflow-hidden rounded-md bg-orange-300
    p-8 shadow-md transition-transform duration-300 hover:scale-110 
    hover:shadow-2xl hover:shadow-green-700;
  &-image {
    img {
      @apply mx-auto rounded-full object-contain;
    }
  }
  &-details {
    @apply flex flex-col gap-2 pt-6 text-center;
    &-name {
      @apply text-2xl font-bold text-slate-900;
    }
    &-jobDescriptor {
      @apply -mt-2 text-xs font-bold text-yellow-800;
    }
    &-email {
      @apply pt-4 text-lg italic text-green-700;
    }
  }
}
</style>
