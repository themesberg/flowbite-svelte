<script lang="ts">
  import { ProductDrawer } from "flowbite-svelte-admin-dashboard";
  import { Button, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";

  // Types
  interface Product {
    id: number;
    name: string;
    price: string;
    technology: string;
    category: string;
    description: string;
    discount: string;
  }

  // State
  let drawerOpen = false;
  let productData: Partial<Product> | undefined;
  let drawerTitle = "";
  let editingProductId: number | null = null;

  // Products database
  let products: Product[] = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "1199",
      technology: "APPLE",
      category: "SMARTPHONE",
      description: "Latest iPhone with titanium design and A17 Pro chip",
      discount: "5"
    },
    {
      id: 2,
      name: "MacBook Air M3",
      price: "1299",
      technology: "APPLE",
      category: "LAPTOP",
      description: "Lightweight laptop with M3 chip and 18-hour battery life",
      discount: "10"
    },
    {
      id: 3,
      name: "Samsung Galaxy S24",
      price: "899",
      technology: "SAMSUNG",
      category: "SMARTPHONE",
      description: "AI-powered smartphone with excellent camera",
      discount: ""
    }
  ];

  // Form configuration
  const additionalFields = [
    {
      name: "technology",
      label: "Technology/Brand",
      placeholder: "Select brand",
      options: [
        { value: "APPLE", label: "Apple" },
        { value: "SAMSUNG", label: "Samsung" },
        { value: "GOOGLE", label: "Google" },
        { value: "MICROSOFT", label: "Microsoft" }
      ]
    },
    {
      name: "category",
      label: "Category",
      placeholder: "Select category",
      options: [
        { value: "SMARTPHONE", label: "Smartphone" },
        { value: "LAPTOP", label: "Laptop" },
        { value: "TABLET", label: "Tablet" },
        { value: "ACCESSORY", label: "Accessory" }
      ]
    },
    {
      name: "discount",
      label: "Discount",
      placeholder: "No discount",
      options: [
        { value: "5", label: "5% Off" },
        { value: "10", label: "10% Off" },
        { value: "15", label: "15% Off" },
        { value: "20", label: "20% Off" },
        { value: "25", label: "25% Off" }
      ]
    }
  ];

  // Helper function to get form data
  function getFormData(formData: FormData): Omit<Product, "id"> {
    return {
      name: String(formData.get("name") || ""),
      price: String(formData.get("price") || ""),
      technology: String(formData.get("technology") || ""),
      category: String(formData.get("category") || ""),
      description: String(formData.get("description") || ""),
      discount: String(formData.get("discount") || "")
    };
  }

  // Helper function to generate new ID
  function generateNewId(): number {
    return products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
  }

  // Actions
  function addNewProduct() {
    editingProductId = null;
    productData = undefined;
    drawerTitle = "Add New Product";
    drawerOpen = true;
  }

  function editProduct(product: Product) {
    editingProductId = product.id;
    productData = {
      name: product.name,
      price: product.price,
      technology: product.technology,
      category: product.category,
      description: product.description,
      discount: product.discount
    };
    drawerTitle = "Edit Product";
    drawerOpen = true;
  }

  function duplicateProduct(product: Product) {
    editingProductId = null;
    productData = {
      name: `Copy of ${product.name}`,
      price: product.price,
      technology: product.technology,
      category: product.category,
      description: product.description,
      discount: ""
    };
    drawerTitle = "Duplicate Product";
    drawerOpen = true;
  }

  function createFromTemplate(category: string, technology: string) {
    editingProductId = null;
    productData = {
      name: "",
      price: "",
      technology: technology,
      category: category,
      description: `New ${category.toLowerCase()} product`,
      discount: ""
    };
    drawerTitle = `Add New ${category}`;
    drawerOpen = true;
  }

  function handleFormSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = getFormData(formData);

    if (editingProductId !== null) {
      // Update existing product
      products = products.map((product) => (product.id === editingProductId ? { ...product, ...data } : product));
      console.log("Updated product:", editingProductId);
    } else {
      // Create new product
      const newProduct: Product = {
        id: generateNewId(),
        ...data
      };
      products = [...products, newProduct];
      console.log("Created new product:", newProduct);
    }

    // Reset and close
    editingProductId = null;
    productData = undefined;
    drawerOpen = false;
  }

  function deleteProduct(productId: number) {
    if (confirm("Are you sure you want to delete this product?")) {
      products = products.filter((p) => p.id !== productId);
      console.log("Deleted product:", productId);
    }
  }
</script>

<div class="p-6">
  <div class="mb-6 flex items-center justify-between">
    <h1 class="text-2xl font-bold dark:text-white">Product Management</h1>
    <Button onclick={addNewProduct}>Add New Product</Button>
  </div>

  <!-- Quick templates -->
  <div class="mb-6 rounded p-4">
    <h3 class="mb-2 font-semibold dark:text-white">Quick Templates:</h3>
    <div class="flex gap-2">
      <Button color="lime" onclick={() => createFromTemplate("SMARTPHONE", "APPLE")}>iPhone Template</Button>
      <Button color="indigo" onclick={() => createFromTemplate("SMARTPHONE", "SAMSUNG")}>Samsung Phone</Button>
      <Button color="cyan" onclick={() => createFromTemplate("LAPTOP", "APPLE")}>MacBook Template</Button>
    </div>
  </div>

  <!-- Products table -->
  <div class="overflow-x-auto">
    <Table hoverable>
      <TableHead>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Price</TableHeadCell>
        <TableHeadCell>Brand</TableHeadCell>
        <TableHeadCell>Category</TableHeadCell>
        <TableHeadCell>Discount</TableHeadCell>
        <TableHeadCell>Actions</TableHeadCell>
      </TableHead>
      <TableBody>
        {#each products as product}
          <TableBodyRow>
            <TableBodyCell>{product.name}</TableBodyCell>
            <TableBodyCell>${product.price}</TableBodyCell>
            <TableBodyCell>{product.technology}</TableBodyCell>
            <TableBodyCell>{product.category}</TableBodyCell>
            <TableBodyCell>{product.discount ? `${product.discount}%` : "None"}</TableBodyCell>
            <TableBodyCell class="space-x-2">
              <button onclick={() => editProduct(product)} class="bg-gray-100 text-sm text-blue-600 hover:text-blue-800 dark:bg-gray-600 dark:text-blue-200">Edit</button>
              <button onclick={() => duplicateProduct(product)} class="bg-gray-100 text-sm text-green-600 hover:text-green-800 dark:bg-gray-600 dark:text-green-600">Duplicate</button>
              <button onclick={() => deleteProduct(product.id)} class="bg-gray-100 text-sm text-red-600 hover:text-red-800 dark:bg-gray-600 dark:text-red-600">Delete</button>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  </div>
</div>

<ProductDrawer bind:open={drawerOpen} title={drawerTitle} data={productData} {additionalFields} onsubmit={handleFormSubmit} />
