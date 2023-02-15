<template>
  <div>
    <div>
      <div
        class="bg-[url('/src/assets/images/Godfather_header.jpg')] opacity-80 bg-fixed bg-center bg-cover h-[200px] flex items-center"
      >
        <img src="../assets/logo/logo.svg" alt="No Image" class="mx-4" />
      </div>
      <div class="flex bg-[#30383a]">
        <div class="flex flex-col h-full">
          <div v-for="item in arr">
            <Menu
              :name="item.name"
              @click="onGetBio(item)"
              class="cursor-pointer py-5"
              :class="
                employee && Object.keys(employee).length && item?.name === employee?.name
                  ? '!bg-[#f0f0f0] text-[#368ca1] font-semibold text-xl'
                  : ''
              "
            />
          </div>
        </div>
        <div v-if="employee && Object.keys(employee).length" class="bg-[#4b4b4b]">
          <Biography :bio="employee" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Menu from '@/components/Menu.vue';
import Biography from '@/components/Biography.vue';
import employeeData from '@/core/dummy/EmployeeData.json';

const arr = ref<any>(employeeData.employees);
const employee = ref<any>();
const onGetBio = (item: any) => {
  employee.value = item;
};
</script>
