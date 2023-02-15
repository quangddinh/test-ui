<template>
  <div class="!bg-[#30383a] h-full w-[200px] text-[#7BB5EF] px-4">{{ name }}</div>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
  },
});
</script>
