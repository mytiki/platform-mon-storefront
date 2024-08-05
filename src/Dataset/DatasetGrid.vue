<script setup lang="ts">
import DatasetStats from './DatasetStats.vue'
import { onMounted, type PropType } from 'vue'
import ChartService from '../ChartService/index'
import { type ChartData } from '../ChartService/types/Chart'
import type { Attributes } from '@/Dataset/types/DatasetResponse';
import Button from 'primevue/button';



const props = defineProps({
  datasetAttributes: {
    type: Object as PropType<Attributes>,
    required: true
  }
})

const chartsData: ChartData[][] = props.datasetAttributes.charts

onMounted(() => {
  ChartService.renderDatasetScreenChart(
    chartsData,
    'chart-button-container',
    'dataset-last-grid-container'
  )
})
</script>

<template>
  <div id="dataset-first-grid-container" class="grid grid-cols-[40%_60%] gap-4">
    <dataset-stats :stats="datasetAttributes.stats" />
    <div id="first-chart-container" class="flex flex-col items-center justify-center">
      <div id="chart-button-container" class="flex gap-8 items-center justify-center"></div>
      <div class="button-container flex flex-col items-center justify-center gap-4 mt-6 self-stretch">
        <Button label="View Sample" severity="success" class="w-44"/>
        <Button label="Compliance Report" severity="contrast" outlined class="w-44"/>
      </div>
    </div>
  </div>

  <div id="dataset-last-grid-container" class="mt-8 grid grid-cols-[50%_50%] gap-4"></div>
</template>

<style scoped>
@media (max-width: 960px) {
  #dataset-first-grid-container {
    grid-template-columns: 100%;
  }
  #dataset-last-grid-container {
    grid-template-columns: 100%;
  }
}
</style>
