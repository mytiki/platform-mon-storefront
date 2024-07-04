<script setup lang="ts">
import { onMounted, type PropType } from 'vue'
import ChartService from '../ChartService/index'
import { type ChartData } from '../ChartService/types/Chart'

const props = defineProps({
  title: {
    required: true,
    type: String
  },
  containerId: {
    type: String,
    required: true
  },
  chartData: {
    required: true,
    type: Object as PropType<ChartData>
  }
})

onMounted(() => {
  try {
    ChartService.renderLegalComplianceChart(props.chartData, props.containerId)
  } catch {
    ;(e: any) => console.log(e)
  }
})
</script>

<template>
  <div class="border border-solid border-black/20 mt-4 rounded-md">
    <h1 class="flex p-3 items-start gap-2 self-stretch text-xs font-normal leading-normal uppercase">{{ title }}</h1>
    <div :id="containerId"></div>
  </div>
</template>

