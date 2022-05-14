<script>
  import { ListGroup, ListGroupItem } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import {
    HiAdjustmentsOutline,
    HiCloudDownloadSolid,
    HiHomeSolid,
    HiInboxInSolid,
    HiUserCircleSolid,
  } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default list</span>
    <Card>
      <ListGroup class="w-48">
        <ListGroupItem>Profile</ListGroupItem>
        <ListGroupItem>Settings</ListGroupItem>
        <ListGroupItem>Messages</ListGroupItem>
        <ListGroupItem>Download</ListGroupItem>
      </ListGroup>
      <HighlightSvelte
        code={`<ListGroup class="w-48">
  <ListGroupItem>Profile</ListGroupItem>
  <ListGroupItem>Settings</ListGroupItem>
  <ListGroupItem>Messages</ListGroupItem>
  <ListGroupItem>Download</ListGroupItem>
</ListGroup>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">List group with links</span>
    <Card>
      <ListGroup class="w-48">
        <ListGroupItem active={true} href="/list-group">Profile</ListGroupItem>
        <ListGroupItem href="/list-group">Settings</ListGroupItem>
        <ListGroupItem href="/list-group">Messages</ListGroupItem>
        <ListGroupItem href="/list-group">Download</ListGroupItem>
      </ListGroup>
      <HighlightSvelte
        code={`<ListGroup class="w-48">
  <ListGroupItem active={true} href="/list-group">Profile</ListGroupItem>
  <ListGroupItem href="/list-group">Settings</ListGroupItem>
  <ListGroupItem href="/list-group">Messages</ListGroupItem>
  <ListGroupItem href="/list-group">Download</ListGroupItem>
</ListGroup>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">List group with icons </span>
    <Card>
      <ListGroup class="w-48">
        <ListGroupItem active={true} icon={HiUserCircleSolid}>Profile</ListGroupItem>
        <ListGroupItem icon={HiAdjustmentsOutline}>Settings</ListGroupItem>
        <ListGroupItem icon={HiInboxInSolid}>Messages</ListGroupItem>
        <ListGroupItem icon={HiCloudDownloadSolid}>Download</ListGroupItem>
      </ListGroup>
      <HighlightSvelte
        code={`<ListGroup class="w-48">
  <ListGroupItem active={true} icon={HiUserCircleSolid}>Profile</ListGroupItem>
  <ListGroupItem icon={HiAdjustmentsOutline}>Settings</ListGroupItem>
  <ListGroupItem icon={HiInboxInSolid}>Messages</ListGroupItem>
  <ListGroupItem icon={HiCloudDownloadSolid}>Download</ListGroupItem>
</ListGroup>`}
      />
    </Card>
  </div>
</div>
