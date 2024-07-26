<script setup>
import { ref } from "vue";
const selected = ref("");
</script>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "chartSegment",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "chartSegment",
          type: "line",
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
          categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
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
          max: 1750,
          tickAmount: 5,
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
        colors: ["#55B586"],
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
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: false,
            },
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
          data: [50, 100, 240, 200, 50, 240],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="bg-white h-full">
    <div class="flex justify-between border-b border-b-slate-100">
      <h4 class="flex items-center px-4 py-2">
        Segment
        <span class="pi pi-info-circle ml-2"></span>
      </h4>
      <div class="flex items-center">
        <div class="px-4">
          <span>{{ selected }}</span>
          <select v-model="selected" class="px-4 py-2">
            <option disabled value="">All Segment</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </select>
        </div>
        <div class="px-4">
          <span>{{ selected }}</span>
          <select v-model="selected" class="px-4 py-2">
            <option disabled value="">2024</option>
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
    <div>
      <apexchart height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>
