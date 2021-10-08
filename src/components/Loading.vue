<template>
  <div class="h-200px flex-center text-gray-300">
    {{ list.length === 0 && loading ? 'Loading…' : 'No data' }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

import { service } from '../types/service'

const props = defineProps<{
  list: service[],
  loading: boolean,
}>()

const { list, loading } = toRefs(props)
</script>
