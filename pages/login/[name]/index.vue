<template>
  <div>
    <h1>Welcome to the login page</h1>
    <CardLogin>
      LOGIN/NAME
      ROUTE NAME: {{ name }}
    </CardLogin>
  </div>
</template>
  
  <script setup>
  
  import CardLogin from '~/components/CardLogin.vue';
  import { ref } from "vue";
  
  definePageMeta({
    layout: 'custom'
  })
  
  const route = useRoute();
  const name = ref(route.params.name);

  
  </script>