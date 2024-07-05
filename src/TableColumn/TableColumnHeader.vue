<script setup lang="ts">
const props = defineProps({
  table: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="header-container flex flex-col items-start gap-[0.375rem] self-stretch">
    <h1 class="text-[0.6875rem] font-bold uppercase leaning-normal">TABLE</h1>
    <div class="w-full rounded-sm border border-solid border-black/10 flex p-[0.375rem] items-start flex-col text-[0.6875rem] font-normal leaning-normal low">tiki.{{ table.toLowerCase() }}</div>
  </div>
</template>

