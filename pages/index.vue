
<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img
          alt="user header"
          src="https://primefaces.org/cdn/primevue/images/usercard.png"
        >
      </template>
      <template #title>
        Advanced Card
      </template>
      <template #subtitle>
        Card subtitle
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
          quas!
        </p>
        <NuxtLink :to="`/login/${param}`">
          <Button
            label="login"
            link
          />
        </NuxtLink>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button
            label="Cancel"
            severity="secondary"
            outlined
            class="w-full"
            @click="console.log(store.doubleCount)"
          />
          <Button
            label="Save"
            class="w-full"
            @click="store.increment"
          />
        </div>
      </template>
    </Card>
    <p>{{ store.count }}</p>
    <CardBirthday />
  </div>
</template>

<script setup lang="ts">
import CardBirthday from '@/components/CardBirthday.vue'
import { useCounterStore } from '@/stores/counter'
import { ref } from "vue";

definePageMeta({
  middleware: 'auth',
  layout: 'custom'
})

const param = ref("route param");
const store = useCounterStore()
</script>

