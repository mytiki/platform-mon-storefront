<script setup lang="ts">
import type { PropType } from 'vue'
import { type LegalComplianceRsp } from './types/LegalComplianceRsp'


defineProps({
  agreements: {
    type: Object as PropType<LegalComplianceRsp>,
    required: true
  }
})

</script>

<template>
  <div class=" flex p-[1.125rem] flex-col items-start gap-[0.625rem] self-stretch">
    <h1 class="text-[0.6875rem] font-bold leaning-normal uppercase">DATA SOURCE AGREEMENTS</h1>
    <div
      class="agreement-checkbox-container flex border border-solid border-black/20 rounded-md w-full"
      v-for="dataset in agreements.data"
      :key="dataset.id"
    >
      <div class="flex items-center justify-center py-[0.375rem] px-[0.625rem] gap-[0.625rem] self-stretch">
        <input type="checkbox" :id="`${dataset.attributes.name}`" @click="console.log('test')" />
        <label :for="`${dataset.attributes.name}`"></label>
      </div>
      <div class="odd-div block border-x border-solid border-black/20 p-[0.375rem] text-[0.6875rem] font-normal">{{ Number(dataset.attributes.records).toLocaleString() }} RECORDS</div>
      <span
      class="pl-[0.375rem] flex justify-start items-center gap-[0.375rem] font-normal underline uppercase text-[0.6875rem]"
        ><a :href="dataset.attributes.link" target="_blank">
          {{ dataset.attributes.name }}
        </a></span
      >
    </div>
  </div>
</template>

<style scoped>
input[type='checkbox'] + label {
  display: block;
  height: 1.2em;
  width: 0.6875rem;
  height: 0.6875rem;
  border: 1px solid var(--accent-color);
  border-radius: 0.1em;
  cursor: pointer;
}
input[type='checkbox']:checked + label:after {
  display: flex;
  align-items: center;
  justify-content: center;
  content: '\2713';
  font-size: 0.65em;
  cursor: pointer;
  color: #00000090;
}

input[type='checkbox'] {
  display: none;
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
  outline: 0;
  cursor: pointer;
}
</style>
