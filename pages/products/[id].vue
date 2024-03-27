<template>
    <div>
        <p>Product details for id: {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores fugit deleniti odio sint, vitae vel totam excepturi! Quas cupiditate optio vel fuga ratione necessitatibus cum eos modi explicabo nobis.</p>
    </div>
    <NuxtLink to="/products"><Button label="voltar"/></NuxtLink>
</template>

<script setup>
    import { ref } from "vue";

    const route = useRoute();
    const id = ref(route.params.id);

    const uri = "https://fakestoreapi.com/products/" + id
    const { data : products } = await useFetch()

</script>