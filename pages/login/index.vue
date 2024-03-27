<template>
  <div>
    <h1>Welcome to the login page</h1>
    <CardLogin>
      LOGIN MAIN PAGE
      <NuxtLink
        to="/"
        class="bg-red-300"
      >
        Index
      </NuxtLink>
    </CardLogin>
  </div>
</template>
  
  <script setup>
  
  import CardLogin from '~/components/CardLogin.vue';
  
  definePageMeta({
    layout: 'custom'
  })
  
  </script>