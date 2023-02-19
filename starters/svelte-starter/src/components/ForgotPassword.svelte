<script>
  import { ForgotPassword } from "flowbite-svelte-admin-dashboard";
  import { Label, Input } from "flowbite-svelte";
  const onSubmit = (e) => {
    const formData = new FormData(e.target);

    const data = {};
    for (const field of formData.entries()) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data);
  };
</script>

<ForgotPassword on:submit={onSubmit}>
  <div>
    <Label for="email" class="mb-2">Your email</Label>
    <Input
      type="email"
      name="email"
      id="email"
      placeholder="name@company.com"
      required
    />
  </div>
</ForgotPassword>
