<script setup lang="ts">
import { useRouter } from 'vue-router'
import camelize from '@/utils/camelize'
import { type MainRouter } from '@/router/types/MainRouter'
import Router from '../router/router'
import { onBeforeMount, ref } from 'vue'
import Menu from 'primevue/menu'

const navList = ref<MainRouter[]>()

const items = ref()

onBeforeMount(async () => {
  navList.value = await Router.getRoutes()
  items.value = navList.value.map((item) => ({
    label: item.sectionName.charAt(0).toUpperCase() + item.sectionName.slice(1), // Capitalizing the first letter
    items: item.navList.map((navItem) => ({
      label: navItem,
      command: () => {
        handleRouting(navItem,item.sectionName)
      }
    })),
  }
  ))
})

const router = useRouter()

const selectedRoute = ref<string>(Router.getInitialRoute())

const handleRouting = (route: string, section: string) => {
  selectedRoute.value = route
  const nextRoute = `/${camelize(section)}/${camelize(route)}`
  router.push(nextRoute)
}
</script>

<template>
  <div class="card flex justify-center">
    <Menu :model="items" :command="(evt:any)=>console.log('test', evt)"/>
  </div>
</template>

