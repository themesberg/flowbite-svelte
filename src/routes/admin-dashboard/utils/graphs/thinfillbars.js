// dark
// const signupsChartColors = {
//     backgroundBarColors: ['#374151', '#374151', '#374151', '#374151', '#374151', '#374151', '#374151']
// };
// light
const signupsChartColors = {
	backgroundBarColors: ['#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB']
};

/** @type {import('apexcharts').ApexOptions} */
export default {
	series: [
		{
			name: 'Users',
			data: [1334, 2435, 1753, 1328, 1155, 1632, 1336]
		}
	],
	labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
	chart: {
		type: 'bar',
		height: '140px',
		foreColor: '#4B5563',
		fontFamily: 'Inter, sans-serif',
		toolbar: {
			show: false
		}
	},
	theme: {
		monochrome: {
			enabled: true,
			color: '#EF562F'
		}
	},
	plotOptions: {
		bar: {
			columnWidth: '25%',
			borderRadius: 3,
			colors: {
				backgroundBarColors: signupsChartColors.backgroundBarColors,
				backgroundBarRadius: 3
			}
		}
		// dataLabels: {
		//     hideOverflowingLabels: false
		// }
	},
	xaxis: {
		floating: false,
		labels: {
			show: false
		},
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		}
	},
	tooltip: {
		shared: true,
		intersect: false,
		style: {
			fontSize: '14px',
			fontFamily: 'Inter, sans-serif'
		}
	},
	states: {
		hover: {
			filter: {
				type: 'darken',
				value: 0.8
			}
		}
	},
	fill: {
		opacity: 1
	},
	yaxis: {
		show: false
	},
	grid: {
		show: false
	},
	dataLabels: {
		enabled: false
	},
	legend: {
		show: false
	}
};
