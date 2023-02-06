<template>
  <div class="wrapper">
    <input type="text" placeholder="Search Staff Member" class="search" />
    <span class="icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    </span>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply relative flex w-full items-stretch;
  .search {
    @apply rounded-md border-0 px-6 py-4 text-blue-700 placeholder-blue-300 outline-none focus:ring focus:ring-orange-400;
  }
  .icon {
    @apply absolute right-0 z-10 py-4 pr-7 text-blue-400;
  }
}
</style>
