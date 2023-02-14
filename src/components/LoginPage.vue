<script setup>
const { login } = useAuth()

const logUserIn = () => {}
</script>

<template>
  <form @submit="logUserIn">
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button type="submit" class="bg-green-500 px-4 py-2" @click="login('admin', 'admin')">Login</button>
  </form>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto mt-80 flex max-w-md flex-col gap-4;
}
</style>
