/** @type {import('apexcharts').ApexOptions} */
export default {
	colors: ['#EF562F', '#FDBA8C'],
	series: [
		{
			name: 'Desktop PC',
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
		},
		{
			name: 'Phones',
			color: '#FDBA8C',
			data: [
				{ x: '01 Feb', y: 120 },
				{ x: '02 Feb', y: 294 },
				{ x: '03 Feb', y: 167 },
				{ x: '04 Feb', y: 179 },
				{ x: '05 Feb', y: 245 },
				{ x: '06 Feb', y: 182 },
				{ x: '07 Feb', y: 143 }
			]
		},
		{
			name: 'Gaming/Console',
			color: '#17B0BD',
			data: [
				{ x: '01 Feb', y: 220 },
				{ x: '02 Feb', y: 194 },
				{ x: '03 Feb', y: 217 },
				{ x: '04 Feb', y: 279 },
				{ x: '05 Feb', y: 215 },
				{ x: '06 Feb', y: 263 },
				{ x: '07 Feb', y: 183 }
			]
		}
	],
	chart: {
		type: 'bar',
		height: '420px',
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
