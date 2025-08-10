import type { ApexOptions } from 'apexcharts';

interface MainChartColors {
  borderColor: string;
  labelColor: string;
  opacityFrom: number;
  opacityTo: number;
}

export default function getChartOptions(dark: boolean): ApexOptions {
  let mainChartColors: MainChartColors;

  if (dark) {
    mainChartColors = {
      borderColor: '#374151',
      labelColor: '#9CA3AF',
      opacityFrom: 0,
      opacityTo: 0.15
    };
  } else {
    mainChartColors = {
      borderColor: '#F3F4F6',
      labelColor: '#6B7280',
      opacityFrom: 0.45,
      opacityTo: 0
    };
  }

  const options: ApexOptions = {
    chart: {
      height: 420,
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      foreColor: mainChartColors.labelColor,
      toolbar: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        opacityFrom: mainChartColors.opacityFrom,
        opacityTo: mainChartColors.opacityTo,
        stops: [0, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      style: {
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif'
      }
    },
    grid: {
      show: true,
      borderColor: mainChartColors.borderColor,
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15
      }
    },
    series: [],
    markers: {
      size: 5,
      strokeColors: '#ffffff',
      hover: {
        size: undefined,
        sizeOffset: 3
      }
    },
    xaxis: {
      categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: '14px',
          fontWeight: 500
        }
      },
      axisBorder: {
        color: mainChartColors.borderColor
      },
      axisTicks: {
        color: mainChartColors.borderColor
      },
      crosshairs: {
        show: true,
        position: 'back',
        stroke: {
          color: mainChartColors.borderColor,
          width: 1,
          dashArray: 10
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: '14px',
          fontWeight: 500
        },
        formatter: function (value: number): string {
          return '$' + value;
        }
      }
    },
    legend: {
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: 'Inter, sans-serif',
      labels: {
        colors: [mainChartColors.labelColor]
      },
      itemMargin: {
        horizontal: 10
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false
            }
          }
        }
      }
    ]
  };

  return options;
}
