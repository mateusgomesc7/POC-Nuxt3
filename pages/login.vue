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
          <label for="ask">Ask a yes/no question (end with "?"):</label>
          <InputTextk
            id="ask"
            v-model="question"
            aria-describedby="ask-help"
          />
          <h3 id="ask-help">
            {{ 'Answer: ' + answer }}
          </h3>
        </div>
        <Divider />
        <div class="flex flex-col">
          <InputText
            id="state"
            v-model="state.someObject.object1"
          />
          <!-- <ProgressSpinner
            animation-duration=".5s"
          /> -->
          <ProgressBar
            :value="`${state.value}`"
            class="mt-2 h-2"
          />
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
const state = reactive({
  someObject: {
    object1: '',
  },
  value: 0
})
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

watch(() => state.someObject, () => {
  state.value = Math.random() * 100
  console.log('state changed')
},{ deep: true })


</script>
