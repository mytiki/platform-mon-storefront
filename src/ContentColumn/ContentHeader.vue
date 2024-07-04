<script setup lang="ts">

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
})

const emit = defineEmits(['toggle'])
</script>

<template>
  <div class="container flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h1 class="font-semibold capitalize text-[1.6875rem] ">{{ title }}</h1>
    </div>
    <h2 class="text-[0.89063rem] font-normal">
      {{ subtitle }}
    </h2>
    <hr class="mt-6 border-t border-solid border-black-100"/>
  </div>
</template>

<style scoped>
h1 {
  color: var(--primary-text-color);
  line-height: normal;
}

h2 {
  color: var(--secondary-text-color);
  line-height: normal;
}
</style>
