<script setup lang="ts">
import type { PropType } from 'vue'
import type { Taxonomy } from '@/Dataset/types/DatasetResponse'

defineProps({
  table: {
    type: String,
    required: true
  },
  taxonomy: {
    type: Object as PropType<Taxonomy>,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col items-start gap-[0.625rem] self-stretch">
    <h2 class="text-[0.6875rem] font-bold uppercase leaning-normal">TAXONOMY</h2>
    <ul class="w-full flex flex-col gap-2">
      <li
        v-for="data of taxonomy[table.toLowerCase()]"
        :key="data.data"
        class="list-none flex flex-col items-start gap-1 self-stretch w-full"
      >
        <div
          class="flex justify-between items-start self-stretch text-[0.6875rem] font-normal lowercase leaning-normal"
        >
          <span>
            {{ data.data }}
          </span>
          <span>{{ data.type }}</span>
        </div>
        <span class="text-black/80 text-[0.5625rem] font-normal leaning-normal">{{
          data.description
        }}</span>
      </li>
    </ul>
  </div>
</template>
