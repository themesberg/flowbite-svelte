<script>
  import { EcommerceCard } from "$lib/index";
  let img2 = {
    src: "/images/product-2.jpeg",
    alt: "product image",
  };
  let img3 = {
    src: "/images/product-3.jpeg",
    alt: "product image",
  };
  let img4 = {
    src: "/images/product-4.jpeg",
    alt: "product image",
  };
</script>

<div class="flex flex-wrap mx-auto p-8">
  <div class="flex-auto p-4">
    <EcommerceCard
      title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
      link="/alerts"
      price="$543"
    />
  </div>
  <div class="flex-auto p-4">
    <EcommerceCard
      title="Women's Cashmere Sweaters Lorem ipsum dolor sit amet."
      link="/tabs"
      btnColor="red"
      stars="4.0"
      price="$461"
      img={img2}
    />
  </div>
  <div class="flex-auto p-4">
    <EcommerceCard
      title="Pink cup Lorem ipsum dolor sit amet et mete."
      link="/cards"
      btnColor="purple"
      stars="3"
      price="$321"
      img={img3}
    />
  </div>
  <div class="flex-auto p-4">
    <EcommerceCard
      title="Nintendo Game Lorem ipsum dolor sit amet."
      link="modals"
      btnColor="green"
      stars="5"
      price="$211"
      img={img4}
    />
  </div>
</div>
