<template>
  <div>
    <h1>Welcome to the login page</h1>
    <Tag :value="`${count}`" />
    <CardLogin>
      This is an auto-imported component.
      <NuxtLink
        to="/"
        class="bg-red-300"
      >
        Index
      </NuxtLink>
    </CardLogin>
    <Card class="mt-2 max-w-lg">
      <template #title>
        Yes or No (Watch)
      </template>
      <template #content>
        <div class="flex flex-col gap-2">
          <label for="ask">Ask a yes/no question:</label>
          <InputText
            id="ask"
            v-model="question"
            aria-describedby="ask-help"
          />
          <h3 id="ask-help">
            {{ 'Answer: ' + answer }}
          </h3>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
import CardLogin from '~/components/CardLogin.vue';
import { useCounterStore } from '@/stores/counter'

const question = ref('')
const answer = ref('yes/no')
const loading = ref(false)
const {count} = useCounterStore()

// watch works directly on a ref
watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})
</script>
