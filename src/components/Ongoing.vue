<template>
  <section class="p-3 bg-yellow-50 rounded-lg m-3 mt-0 border-orange-200 border-1px dark:bg-yellow-200 dark:border-orange-300 dark:border-opacity-30 dark:bg-opacity-15">
    <h2 class="text-lg pb-1">Ongoing issues</h2>
    <ul>
      <template v-for="(item, index) in list" :key="`all-${item.id}`">
        <li class="pt-1">
          <div class="flex items-center justify-between">
            <h3 class="text-gray-700 dark:text-warm-gray-300 mb-0.5" :title="item.description">{{ item.name }}</h3>
            <span class="w-12px h-12px rounded-full mr-1 flex-center" :class="item.availability === 'ok' ? 'bg-green-500' : 'bg-yellow-500'">
              <span class="w-12px h-12px block rounded-full animate-ping animation-slow bg-opacity-40" :class="item.availability === 'ok' ? 'bg-green-500' : 'bg-yellow-500'" />
            </span>
          </div>
          <p class="text-sm text-gray-500 dark:text-warm-gray-400" v-if="item.notes">{{ item.notes }}</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-xs text-gray-500 dark:text-warm-gray-400" v-if="item.timestamp">Last updated: {{ item.timestamp }}</span>
            <a class="text-xs text-primary-dark inline-flex items-center dark:text-primary-light hover:underline" target="_blank" v-if="item.url" :href="item.url">Find out more <mdi-open-in-new class="ml-0.5" /></a>
          </div>
        </li>
        <hr class="pb-1 mt-2.5 border-orange-100 dark:border-orange-200 dark:border-opacity-20" v-if="index !== list.length - 1">
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
