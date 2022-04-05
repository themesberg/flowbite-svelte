<script>
	import { Table } from '$lib/index';
	let header = ['Product name', 'Color', 'Category', 'Price', 'Action'];
	let products = [
		{
			name: 'Apple MacBook Pro 17',
			color: 'Silver',
			category: 'Laptop',
			price: '$2222',
			action: 'Edit'
		},
		{
			name: 'Microsoft Surface Pro',
			color: 'White',
			category: 'Laptop PC',
			price: '$1999',
			action: 'Edit'
		},
		{
			name: '	Magic Mouse 2',
			color: 'Black',
			category: 'Accessories',
			price: '$99',
			action: 'Edit'
		}
	];
</script>

<Table {header} {products} />
