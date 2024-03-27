<template>
  <div>
    <h1>Welcome to the login page</h1>
    <CardLogin>
      This is an auto-imported component.
      <NuxtLink
        to="/"
        class="bg-red-300"
      >
        Index
      </NuxtLink>
    </CardLogin>
    <p>{{ count }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
import CardLogin from '~/components/CardLogin.vue';

import { useCounterStore } from '@/stores/counter'
const {count} = useCounterStore()
</script>
