<script setup lang="ts">
import ContentHeader from './ContentHeader.vue'

const props = defineProps({
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
  <div class="flex flex-col items-start self-stretch py-12 px-[1.6875rem] border-r border-solid border-black-100">
    <content-header
      :title="title"
      :subtitle="subtitle"
      @toggle="$emit('toggle')"
    />
    <div class="mt-6 w-full">
      <slot />
    </div>
  </div>
</template>
