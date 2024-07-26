<script setup>
import { ref } from "vue";
import ChartReplacement from "./charts/ChartReplacement.vue";
import ChartProductionYear from "./charts/ChartProductionYear.vue";
import ChartSegment from "./charts/ChartSegment.vue";
import ChartReplacementReason from "./charts/ChartReplacementReason.vue";
import TableReplacementIDByRegion from "./tables/TableReplacementIDByRegion.vue";
import TableReplacementIDByDealer from "./tables/TableReplacementIDByDealer.vue";

const selected = ref("");
</script>

<template>
  <div>
    <div class="flex justify-between mb-8">
      <h1 class="flex items-center text-lg font-bold">Replacement</h1>
      <div class="flex items-center">
        <div class="px-4 py-1 bg-white">03/01/2024 - 03/07/2024</div>
        <div class="px-4">
          <span>{{ selected }}</span>
          <select v-model="selected" class="px-4 py-2">
            <option disabled value="">All Year</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </select>
        </div>
        <div class="px-4 py-1 bg-white">
          Download CSV
          <span class="pi pi-file-pdf"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="flex">
    <div class="basis-9/12">
      <ChartReplacement />
    </div>
    <div class="basis-3/12">
      <ChartProductionYear />
    </div>
  </div>
  <div class="flex my-8">
    <div class="class basis-full">
      <ChartSegment />
    </div>
  </div>
  <div class="flex my-8">
    <div class="class basis-full">
      <ChartReplacementReason />
    </div>
  </div>
  <div class="flex my-8">
    <div class="class basis-full">
      <TableReplacementIDByRegion />
    </div>
  </div>
  <div class="flex my-8">
    <div class="class basis-full">
      <TableReplacementIDByDealer />
    </div>
  </div>
</template>
