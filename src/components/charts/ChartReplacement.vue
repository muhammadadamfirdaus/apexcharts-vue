<script setup>
import { ref } from "vue";
const selected = ref("");
</script>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "chartReplacement",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "chartReplacement",
          type: "bar",
          stacked: true,
          width: "100%",
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
        },
        yaxis: {
          min: 0,
          max: 1000,
          tickAmount: 4,
          axisBorder: {
            show: false,
          },
          labels: {
            show: true,
          },
        },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        zoom: {
          enabled: true,
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        colors: ["#C2B6F6", "#4E80ED", "#55B586", "#F2BC80"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            borderRadiusApplication: "around", // 'around', 'end'
            borderRadiusWhenStacked: "all", // 'all', 'last'
          },
        },
      },
      series: [
        {
          name: "<2022",
          data: [50, 100, 240, 200, 50, 240, 50],
        },
        {
          name: "2022",
          data: [250, 200, 80, 150, 250, 80, 250],
        },
        {
          name: "2023",
          data: [250, 250, 250, 150, 120, 40, 30],
        },
        {
          name: "2024",
          data: [250, 150, 150, 250, 120, 500, 150],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="bg-white h-full mr-4">
    <div class="flex justify-between border-b border-b-slate-100">
      <h4 class="flex items-center px-4 py-2">
        Replacement
        <span class="pi pi-info-circle ml-2"></span>
      </h4>
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
    </div>
    <div>
      <apexchart height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>
