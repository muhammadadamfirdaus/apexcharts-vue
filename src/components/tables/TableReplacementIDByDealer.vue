<script setup>
import { ref } from "vue";

const selected = ref("");
</script>

<template>
  <div class="bg-white h-full">
    <div class="flex justify-between border-b border-b-slate-100">
      <h4 class="flex items-center px-4 py-2">Replacement ID by Dealer</h4>
      <div class="flex items-center">
        <div class="px-4">
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
        <div class="px-4">
          <select v-model="selected" class="px-4 py-2">
            <option disabled value="">All Dealer</option>
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
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-sm font-light border-b border-b-slate-100">
          <tr>
            <th class="px-6 py-3 font-normal">Dealer Name</th>
            <th class="px-6 py-3 font-normal">2024</th>
            <th class="px-6 py-3 font-normal">2023</th>
            <th class="px-6 py-3 font-normal">2022</th>
            <th class="px-6 py-3 font-normal"><< 2021</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">Dealer A</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">Dealer B</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">Dealer C</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">Dealer D</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">Dealer E</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">Dealer F</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">Dealer G</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
            <td class="px-6 py-4">22.321</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
