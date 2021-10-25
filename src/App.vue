<template>
  <h1 class="font-display text-2xl px-3 py-5 font-bold flex items-center justify-start">
    <span class="w-15px h-15px bg-primary-dark rounded-full mr-3 ml-2 flex-center dark:bg-primary-light">
      <span class="w-15px h-15px bg-primary-dark block rounded-full animate-ping animation-slow bg-opacity-40 dark:bg-primary-light" />
    </span>
    Service availability
  </h1>
  <section class="px-3 py-2 bg-green-50 rounded-lg m-3 mt-0 text-green-500 border-green-200 border-1px dark:bg-green-200 dark:border-green-300 dark:border-opacity-30 dark:bg-opacity-15 flex items-center" v-if="ongoingList.length === 0 && errorList.length > 0 && list.length > 0 && !loading">
    <mdi-check-circle-outline class="mr-2 text-sm" /> All services are in operation.
  </section>
  <Ongoing type="error" :list="errorList" v-if="errorList.length > 0" />
  <Ongoing type="issue" :list="ongoingList" v-if="ongoingList.length > 0" />
  <AllServices :list="list" v-if="list.length > 0" />
  <Loading :list="list" :loading="loading" v-if="list.length === 0" />
  <footer class="-mt-0.5 pb-2.5 text-sm">
    <a target="_blank" class="inline-flex items-center mx-3 text-primary-dark dark:text-primary-light" href="https://www.itservices.manchester.ac.uk/help/serviceavailability/">Source<mdi-open-in-new class="text-xs ml-1" /></a><span class="text-gray-400 dark:text-gray-500 inline-block -ml-1">•&nbsp;&nbsp;Auto-refresh every 10 minutes</span>
  </footer>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from '@vue/runtime-core'

import { service } from './types/service'

const list = ref<service[]>([])
const loading = ref(false)

const ongoingList = computed(() => list.value.filter(item => item.availability === 'issues'))
const errorList = computed(() => list.value.filter(item => item.availability === 'error'))

/**
 * Load data from API
 */
const load = async () => {
  loading.value = true

  const response: Promise<{
    outcome: boolean,
    result: service[]
  }> = await fetch('https://webapps.manchester.ac.uk/shared/areas/serviceavailability/live/ajax/list_serviceavailability.php?xsi=14&advanced=1').then((res) => res.json()).catch(() => Promise.resolve([]))

  loading.value = false

  list.value = (await response).result
}

onMounted(async () => {
  load()
  setInterval(load, 600000)
})
</script>
