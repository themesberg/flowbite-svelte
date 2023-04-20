<script>
  import { Input, Label, Button, Checkbox, A, Breadcrumb, BreadcrumbItem, Heading, P } from '$lib'
  let formData = {
      first_name:'',
      last_name: '',
      company: '',
      website:'',
      email: '',
    }
  export const snapshot = { 
    capture: () => formData, 
    restore: (value) => (formData = value)
  };
</script>

<form class="p-16">
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">First name</Label>
      <Input type="text" id="first_name" placeholder="John" required bind:value={formData.first_name} />
    </div>
    <div>
      <Label for="last_name" class="mb-2">Last name</Label>
      <Input type="text" id="last_name" placeholder="Doe" required bind:value={formData.last_name} />
    </div>
    <div>
      <Label for="company" class="mb-2">Company</Label>
      <Input type="text" id="company" placeholder="Flowbite" required bind:value={formData.company} />
    </div>
    <div>
      <Label for="website" class="mb-2">Website URL</Label>
      <Input type="url" id="website" placeholder="flowbite.com" bind:value={formData.website} />
    </div>
  </div>
  <div class="mb-6">
    <Label for="email" class="mb-2">Email address</Label>
    <Input type="email" id="email" placeholder="john.doe@company.com" required bind:value={formData.email} />
  </div>
  <div class="mb-6">
    <Label for="password" class="mb-2">Password</Label>
    <Input type="password" id="password" placeholder="•••••••••" />
  </div>
  <div class="mb-6">
    <Label for="confirm_password" class="mb-2">Confirm password</Label>
    <Input type="password" id="confirm_password" placeholder="•••••••••" />
  </div>
  <Checkbox class="mb-6 space-x-1" required>I agree with the <A href="/">terms and conditions</A>.</Checkbox>
  <Button type="submit">Submit</Button>
</form>
