<template>
  <div>
    <div class="card">
      <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a
              v-ripple
              :href="href"
              v-bind="props.action"
              @click="navigate"
            >
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            v-ripple
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span
              v-if="hasSubmenu"
              class="pi pi-fw pi-angle-down ml-2"
            />
          </a>
        </template>
      </Menubar>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";
const { locale } = useI18n();

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'Login',
        icon: 'pi pi-user',
        route: '/login'
    },
    {
        label: 'Products',
        icon: 'pi pi pi-pencil',
        route: '/products'
    },
    {
        label: 'Languages',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'English',
                icon: 'pi pi-fw pi-pencil',
                command: () => locale.value = 'en'
            },
            {
                label: 'Portugues',
                icon: 'pi pi-fw pi-pencil',
                command: () => locale.value = 'ptbr'
            }
        ]
    }
]);
</script>