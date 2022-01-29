<script>
  import { Card } from "$lib/index";
</script>

<div class="container mx-auto p-8">
  <Card header="Simple card with header and content" content="Your content" />
</div>

<div class="container mx-auto p-8">
  <Card
    img="/images/image-1.jpeg"
    header="Card with link and image"
    content="Your content."
    link="/"
  />
</div>

<div class="container mx-auto p-8">
  <Card header="Card with link" content="Your content" link="/" />
</div>

<div class="container mx-auto p-8">
  <Card
    img="https://via.placeholder.com/382x255"
    header="Card with image"
    content="Your content"
  />
</div>
