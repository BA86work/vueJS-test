<template>
    <div class="card flex justify-content-center">
        <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
</script>