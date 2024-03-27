<template>
  <div
    class="card"
    style="padding: 2rem;"
  >
    <DataTable
      :value="products"
      table-style="min-width: 50rem;"
    >
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Products</span>
        </div>
      </template>
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      />
      <Column header="Image">
        <template #body="slotProps">
          <img
            :src="`${slotProps.data.image}`"
            class="w-1rem h-1rem border-round"
            width="50px"
          >
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
    definePageMeta({
        layout: 'custom'
    })

    // fetch the products
    const { data: products } = await useFetch('https://fakestoreapi.com/products');
    const columns = [
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Title' },
    { field: 'category', header: 'Category' },
    { field: 'price', header: 'Price' }
];
</script>