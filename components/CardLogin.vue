<template>
  <Card class="max-w-sm">
    <template #title>
      Card Login
    </template>
    <template #content>
      <slot />
    </template>
    <template #footer>
      <Button
        id="btn-login"
        label="Login"
        type="button"
        class="w-full"
        :badge="`${badge}`"
        @click="incrementBadge"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
const badge = ref<number>(0)

const incrementBadge = () => {
  badge.value++
}
</script>