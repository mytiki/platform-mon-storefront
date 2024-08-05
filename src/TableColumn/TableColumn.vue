<script setup lang="ts">
import { type PropType } from 'vue';
import TableColumnHeader from './TableColumnHeader.vue'
import TableTaxonomy from './TableTaxonomy.vue'
import type { Attributes } from '@/Dataset/types/DatasetResponse';

defineProps({
  table: {
    type: String,
    required: true
  },
  datasetAttributes: {
    type: Object as PropType<Attributes>,
    required: true
  }
})
</script>

<template>
  <div class="flex p-[1.125rem] flex-col items-start gap-8 self-stretch">
    <table-column-header :table="table" />
    <table-taxonomy :table="table" :taxonomy="datasetAttributes.taxonomy"/>
  </div>
</template>

