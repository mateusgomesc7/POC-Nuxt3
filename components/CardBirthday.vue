<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <div class="grid justify-items-center mt-4">
        <span class="pi pi-stopwatch justify-self-center text-3xl" />
      </div>
    </template>
    <template #title>
      Aniversários
    </template>
    <template #subtitle>
      Faltam quantos dias?
    </template>
    <template #content>
      <p class="m-0">
        Mateus Gomes - {{ daysToBirthday('2024-04-15') }} dias
      </p>
      <p
        class="m-0"
      >
        Data: <span v-date-formatted>15-04</span>
      </p>
      <p class="mt-2">
        Marcela Kramer - {{ daysToBirthday('2025-01-27') }} dias
      </p>
      <p
        class="m-0"
      >
        Data: <span v-date-formatted>27-01</span>
      </p>
      <p class="mt-2">
        Pablo Estrela - {{ daysToBirthday('2025-02-21') }} dias
      </p>
      <p
        class="m-0"
      >
        Data: <span v-date-formatted>21-02</span>
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">

  const { daysToBirthday } = useFormatation()

</script>