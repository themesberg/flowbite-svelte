<script lang="ts">
  import { Input } from "flowbite-svelte";
  const carMakers = ["Toyota", "Ford", "Honda", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Volkswagen", "Hyundai", "Kia", "Mazda", "Subaru", "Lexus", "Audi", "Jeep", "Dodge", "Ram", "GMC", "Cadillac", "Chrysler", "Buick", "Infiniti", "Acura", "Volvo", "Porsche", "Jaguar", "Land Rover", "Mini", "Mitsubishi", "Genesis", "Tesla", "Fiat", "Peugeot", "Renault", "Alfa Romeo", "Citroën", "SEAT", "Skoda", "Saab", "Suzuki", "Isuzu", "Scion", "Hummer", "Lincoln", "Opel", "Daewoo", "Rivian", "Lucid", "Polestar", "Bugatti", "Maserati", "Ferrari", "Lamborghini", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Pagani", "Koenigsegg", "Maybach", "Tata", "Mahindra", "Perodua", "Proton", "Chery", "Geely", "Great Wall", "BYD", "NIO", "XPeng", "VinFast", "Zotye", "FAW", "BAIC", "Lancia", "Dacia", "Cupra", "Roewe", "Holden", "Smart"];
</script>

<Input data={carMakers} placeholder="Type to search cars..." />

<Input data={carMakers} clearable placeholder="Clearable" />