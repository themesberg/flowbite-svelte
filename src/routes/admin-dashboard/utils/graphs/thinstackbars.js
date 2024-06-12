// dark
const visitorsChartColors = {
	fillGradientShade: 'dark',
	fillGradientShadeIntensity: 0.45
};

//light
// const visitorsChartColors = {
//     fillGradientShade: 'light',
//     fillGradientShadeIntensity: 1,
// }

/** @type {import('apexcharts').ApexOptions} */
export default {
	series: [
		{
			name: 'Visitors',
			data: [500, 590, 600, 520, 610, 550, 600]
		}
	],
	labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
	chart: {
		type: 'area',
		height: '305px',
		fontFamily: 'Inter, sans-serif',
		sparkline: {
			enabled: true
		},
		toolbar: {
			show: false
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: visitorsChartColors.fillGradientShade,
			shadeIntensity: visitorsChartColors.fillGradientShadeIntensity
		}
	},
	plotOptions: {
		area: {
			fillTo: 'end'
		}
	},
	theme: {
		monochrome: {
			enabled: true,
			color: '#EF562F'
		}
	},
	tooltip: {
		style: {
			fontSize: '14px',
			fontFamily: 'Inter, sans-serif'
		}
	}
};
