<script setup lang="ts">
import { ref } from 'vue';
import LogoImg from './LogoImg.vue'
import InputText from 'primevue/inputtext';
const search = ref<string>()
</script>

<template>
  <div class="flex justify-center items-center">
    <logo-img />
  </div>
  <InputText type="text" v-model="search" class="input-text my-6" size="small"/>
</template>

<style scoped>
</style>