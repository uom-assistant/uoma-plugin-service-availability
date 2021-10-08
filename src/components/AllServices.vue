<template>
  <section class="p-3 bg-true-gray-100 rounded-lg m-3 mt-0 dark:bg-true-gray-700">
    <h2 class="text-lg pb-1">All Services</h2>
    <ul>
      <template v-for="(item, index) in list" :key="`all-${item.id}`">
        <li class="pt-1 flex items-center justify-between" :class="{ '-mb-0.5': index === list.length - 1 }">
          <h3 class="text-gray-700 dark:text-gray-300 flex items-center justify-between" :title="item.description">{{ item.name }}<a target="_blank" class="inline-flex items-center" v-if="item.url" :href="item.url"><mdi-information-outline class="text-sm ml-1.5 text-gray-500 dark:text-gray-400" /></a></h3>
          <span class="w-12px h-12px rounded-full mr-1 flex-center" :class="item.availability === 'ok' ? 'bg-green-500' : 'bg-yellow-500'">
            <span class="w-12px h-12px block rounded-full animate-ping animation-slow bg-opacity-40" :class="item.availability === 'ok' ? 'bg-green-500' : 'bg-yellow-500'" />
          </span>
        </li>
        <hr class="pb-1 mt-2 dark:border-true-gray-600" v-if="index !== list.length - 1">
      </template>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

import { service } from '../types/service'

const props = defineProps<{
  list: service[]
}>()

const { list } = toRefs(props)
</script>
