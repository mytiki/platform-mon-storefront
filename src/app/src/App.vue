<script setup lang="ts">
import MainLayout from './MainLayout/MainLayout.vue'
import { onMounted } from 'vue'
import AuthService from '@/AuthService/index'

onMounted(async () => {
  await AuthService.initialize()
})
</script>

<template>
  <main-layout />
</template>

<style scoped></style>
