<template>
    <div>
      <h1>Welcome to the login page</h1>
      <CardLogin>
        LOGIN/NAME/ID
        ROUTE NAME: {{ name }}
        ROUTE ID: {{ id }}
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
  const id = ref(route.params.id);

  
  </script>