<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

const selected = ref("");
export default {
  name: "chartProductionYear",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "chartProductionYear",
          type: "donut",
          stacked: true,
          width: "100%",
          height: "100%",
          toolbar: {
            show: false,
            tools: {
              download: false,
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
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "Total",
                  color: "#373d3f",
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                  },
                },
              },
            },
          },
        },
        legend: {
          show: true,
          position: "bottom",
          containerMargin: {
            right: 0,
          },
        },
        labels: ["Others", "2022", "2023", "2024"],
      },
      series: [25, 22, 15, 38],
    };
  },
};
</script>

<template>
  <div class="bg-white h-full ml-4">
    <div class="flex justify-between border-b border-b-slate-100">
      <h4 class="flex items-center px-4 py-2">
        Overall by Production Year
        <span class="pi pi-info-circle ml-2"></span>
      </h4>
    </div>
    <div>
      <apexchart height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>
