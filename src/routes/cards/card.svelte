<script>
  import { Card } from "$lib/index";
</script>

<div class="flex flex-wrap mx-auto p-8">
  <div class="flex-auto m-2">
    <Card header="Simple card with header and content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
      consequatur modi ab nisi perferendis placeat natus repellendus officiis
      ipsa.
    </Card>
  </div>
  <div class="flex-auto m-2">
    <Card header="Card with link" link="/" btnLabel="About Me">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
      consequatur modi ab nisi perferendis placeat natus repellendus officiis
      ipsa.</Card
    >
  </div>
  <div class="flex-auto m-2">
    <Card
      img="/images/image-1.jpeg"
      header="Card with link and image"
      link="/"
      btnLabel="Bla bla"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
      consequatur modi ab nisi perferendis placeat natus repellendus officiis
      ipsa.</Card
    >
  </div>
  <div class="flex-auto m-2">
    <Card img="/images/image-2.jpeg" header="Card with image"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
      consequatur modi ab nisi perferendis placeat natus repellendus officiis
      ipsa.
    </Card>
  </div>
</div>

<div class="flex flex-wrap mx-auto p-8">
  <div class="flex-auto m-2">
    <Card
      img="/images/image-1.jpeg"
      header="Red button"
      link="/"
      btnColor="red"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
      consequatur modi ab nisi perferendis placeat natus repellendus officiis
      ipsa.</Card
    >
  </div>
  <div class="flex-auto m-2">
    <Card
      img="/images/image-1.jpeg"
      header="Yellow button"
      link="/"
      btnColor="yellow"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
      consequatur modi ab nisi perferendis placeat natus repellendus officiis
      ipsa.</Card
    >
  </div>
  <div class="flex-auto m-2">
    <Card
      img="/images/image-1.jpeg"
      header="Purple button"
      link="/"
      btnColor="purple"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
      consequatur modi ab nisi perferendis placeat natus repellendus officiis
      ipsa.</Card
    >
  </div>
</div>
