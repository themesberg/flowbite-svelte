/** @type {import('apexcharts').ApexOptions} */
export default {
	colors: ['#1A56DB', '#FDBA8C'],
	series: [
		{
			name: 'Quantity',
			color: '#EF562F',
			data: [
				{ x: '01 Feb', y: 170 },
				{ x: '02 Feb', y: 180 },
				{ x: '03 Feb', y: 164 },
				{ x: '04 Feb', y: 145 },
				{ x: '05 Feb', y: 194 },
				{ x: '06 Feb', y: 170 },
				{ x: '07 Feb', y: 155 }
			]
		}
	],
	chart: {
		type: 'bar',
		height: '140px',
		fontFamily: 'Inter, sans-serif',
		foreColor: '#4B5563',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			columnWidth: '90%',
			borderRadius: 3
		}
	},
	tooltip: {
		shared: false,
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
				value: 1
			}
		}
	},
	stroke: {
		show: true,
		width: 5,
		colors: ['transparent']
	},
	grid: {
		show: false
	},
	dataLabels: {
		enabled: false
	},
	legend: {
		show: false
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
	yaxis: {
		show: false
	},
	fill: {
		opacity: 1
	}
};
