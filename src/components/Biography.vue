<template>
  <div class="text-white bg-[#4b4b4b] p-10 relative" v-if="bio && Object.keys(bio).length">
    <div class="font-medium text-3xl absolute left-40 top-[-45px]">{{ bio.name }}</div>
    <div class="h-[100px] w-[100px] absolute top-[-50px]">
      <img src="../assets/images/profile/Vito_Corleone.jpg" alt="No Image" class="h-full rounded-lg" />
    </div>
    <div class="bg-[#222224] rounded-md p-4 mt-10">
      <div class="text-lg font-medium my-2">Biography</div>
      <div class="text-sm text-[#f0f0f0]">{{ bio.biography }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  bio: {
    default: {},
    type: Object as any,
  },
});
</script>
