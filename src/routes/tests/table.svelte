<script>
	import { Table } from '$lib/index';
	let header = ['Product name', 'Color', 'Category', 'Price', 'Action'];
	let items = [
		['Apple MacBook Pro 17', 'Silver', 'Laptop', '$2222', 'Edit'],
		['Microsoft Surface Pro', 'White', 'Laptop PC', '$1999', 'Edit'],
		['	Magic Mouse 2', 'Black', 'Accessories', '$99', 'Edit']
	];
</script>

<Table {header} {items} />
