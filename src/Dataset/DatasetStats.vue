<script setup lang="ts">
import type { Stats } from './types'
import { type PropType } from 'vue'

defineProps({
  stats: {
    required: true,
    type: Object as PropType<Stats>
  }
})
</script>

<template>
  <div class="flex py-2.5 px-0 flex-col items-start gap-2.5 self-stretch grow shrink-0 basis-0">
    <div class="flex flex-col gap-2.5">
      <div class="flex text-[0.6875rem] font-normal">
        <span class="font-bold uppercase text-[0.6875rem] w-[6.25rem]">Updates</span>
        {{ stats.updates }}
      </div>
      <div class="flex text-[0.6875rem] font-normal">
        <span class="font-bold uppercase text-[0.6875rem] w-[6.25rem]">Updated At</span>
        {{ stats.updated_at.toLocaleString() }}
      </div>
      <div class="flex text-[0.6875rem] font-normal">
        <span class="font-bold uppercase text-[0.6875rem] w-[6.25rem]">years</span>
        {{ stats.years }}
      </div>
    </div>
    <div>
      <span class="font-bold uppercase text-[0.6875rem] w-[6.25rem]">CONTAINS</span>
      <div class="flex p-1.5 items-start content-start gap-2 self-stretch flex-wrap">
        <div class="rounded-full border border-black/10 p-1 px-2 justify-center items-center text-[0.6875rem] font-normal leading-normal uppercase" v-for="contain in stats.contains" :key="contain">
          {{ contain }}
        </div>
      </div>
    </div>
    <div>
      <span class="font-bold uppercase text-[0.6875rem] w-[6.25rem]">APPROVED FOR</span>
      <div class="flex p-1.5 items-start content-start gap-2 self-stretch flex-wrap">
        <div class=" flex rounded-full border border-black/10 p-1 px-2 justify-center items-center text-[0.6875rem] font-normal leading-normal uppercase" v-for="approved in stats.approved_for">{{ approved }}</div>
      </div>
    </div>
  </div>
</template>
