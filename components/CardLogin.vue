<template>
  <Card class="max-w-sm">
    <template #title>
      {{ $t('component.card_login.login_btn') }}
    </template>
    <template #content>
      <slot />
    </template>
    <template #footer>
      <Button
        id="login-btn"
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