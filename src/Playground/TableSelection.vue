<script setup lang="ts">
import { ref } from 'vue'
import { demographics, transactions, receipts } from '../TableColumn/Tables'
import Select from 'primevue/select'
import Tree from 'primevue/tree'

const emit = defineEmits(['insert', 'update'])



const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const selectedDataSource = ref<string>()
const selectedTable = ref<string>()

const dataHierarchy = [
  {
    key: '0',
    label: 'Transactions',
    data: 'Transactions Folder',
    children: transactions.map((item, index) => ({
      key: `0-${index}`,
      label: `${item.data} (${item.type})`,
      data: `${item.data} (${item.type})`,
    }))
  },
  {
    key: '1',
    label: 'Demographics',
    data: 'Demographics Folder',
    children: demographics.map((item, index) => ({
      key: `1-${index}`,
      label: `${item.data} (${item.type})`,
      data: `${item.data} (${item.type})`,
    }))
  },
  {
    key: '2',
    label: 'Receipts',
    data: 'Receipts Folder',
    children: receipts.map((item, index) => ({
      key: `2-${index}`,
      label: `${item.data} (${item.type})`,
      data: `${item.data} (${item.type})`,
    }))
  }
]

</script>

<template>
  <div class="p-[1.125rem] flex flex-col gap-4">
    <label for="cleanroom">Data Source</label>
    <Select
      v-model="selectedDataSource"
      :options="cities"
      optionLabel="name"
      placeholder="Select a Data Source"
      class="w-full md:w-56"
    />
    <label for="cleanroom">Table</label>
    <Select
      v-model="selectedTable"
      :options="cities"
      optionLabel="name"
      placeholder="Select a Table"
      class="w-full md:w-56"
    />

    <h1 class="text-xl">Tables (3)</h1>
    <Tree :value="dataHierarchy" class="w-full md:w-[30rem]" pt:root:style="padding: 0;"></Tree>
  </div>
</template>
