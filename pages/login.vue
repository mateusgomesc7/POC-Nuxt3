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
          <InputText
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
            :value="state.value"
            class="mt-2 h-2"
          />
        </div>
      </template>
    </Card>
    <Card class="mt-2 max-w-lg">
      <template #content>
        <div class="flex flex-line justify-between">
          <div class="flex flex-col gap-2 ">
            <label for="first-name">Primeiro Nome</label>
            <InputText
              id="first-name"
              v-model="firstName"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="last-name"
            >Último Nome</label>
            <InputText
              id="last-name"
              v-model="lastName"
            />
          </div>
        </div>
        <Message>{{ fullName }}</Message>
      </template>
    </Card>
    <Card class="mt-2 max-w-lg">
      <template #content>
        <div class="flex flex-col gap-8">
          <label>Autor: {{ author.name }}</label>
          <div class="flex flex-row gap-5">
            <FloatLabel>
              <InputText
                id="add-livro"
                v-model="livro"
              />
              <label for="add-livro">Novo Livro</label>
            </FloatLabel>
            <Button
              label="Add"
              @click="adicionarNovoLivro"
            />
          </div>
          <div class="card flex flex-col gap-5 justify-content-center">
            <Listbox
              v-model="booksWrited"
              :options="books"
              multiple
              option-label="title"
              class="w-full md:w-14rem"
            >
              <template #option="slotOption">
                <div class="flex flex-row justify-between items-center">
                  <span>{{ slotOption.option.title }}</span>
                  <Button
                    label="X"
                    @click="removerLivro(slotOption.index)"
                  />
                </div>
              </template>
            </Listbox>
            <Button
              label="Select"
              @click="selecionarLivroParaAutor"
            />
          </div>
          <p>{{ publishedBooksMessage }}</p>
          <p>{{ author.books }}</p>
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
const firstName = ref('Mateus')
const lastName = ref('Gomes')
const books = ref([])
const booksWrited = ref([])
const livro = ref('')
const state = reactive({
  someObject: {
    object1: '',
  },
  value: 0
})

const {count} = useCounterStore()

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

const publishedBooksMessage = computed(() => {
  return author.books.length > 3 ? 'Autor Desenrolado' : 'Autor precisa se esforçar mais'
})

const author = reactive({
  name: fullName,
  books: []
})

const adicionarNovoLivro = () => {
  books.value.push({ title: livro.value })
  livro.value = ''
}

const removerLivro = (book) => {
  removerLivroDeAutor(books.value[book])
  books.value = books.value.filter((_, index) => index !== book)
}

const removerLivroDeAutor = (book) => {
  console.log(book)
  author.books = author.books.filter(b => b !== book)
  publishedBooksMessage
}

const selecionarLivroParaAutor = () => {
  books.value.forEach(book => {
    if (!author.books.includes(book))
      author.books.push(book)
  })
}

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
},{ deep: true })
</script>
