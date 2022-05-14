<script>
  import { Label, TextInput, Checkbox, Button } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiClockSolid, HiCheckOutline, HiMailSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Form example</span>
    <Card>
      <form class="flex flex-col gap-4">
        <div>
          <Label class="mb-2 block" for="email">Your email</Label>
          <TextInput id="email" type="email" placeholder="name@flowbite.com" required={true} />
        </div>
        <div>
          <Label class="mb-2 block" for="password">Your password</Label>
          <TextInput id="password" type="password" required={true} />
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label for="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <HighlightSvelte
        code={`<form class="flex flex-col gap-4">
  <div>
    <Label class="mb-2 block" for="email">Your email</Label>
    <TextInput id="email" type="email" placeholder="name@flowbite.com" required={true} />
  </div>
  <div>
    <Label class="mb-2 block" for="password">Your password</Label>
    <TextInput id="password" type="password" required={true} />
  </div>
  <div class="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label for="remember">Remember me</Label>
  </div>
  <Button type="submit">Submit</Button>
</form>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Input sizing</span>
    <Card>
      <div class="flex flex-col gap-4">
        <div>
          <Label class="mb-2 block" for="small">Small input</Label>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <Label class="mb-2 block" for="base">Base input</Label>
          <TextInput id="base" type="text" sizing="md" />
        </div>
        <div>
          <Label class="mb-2 block" for="large">Large input</Label>
          <TextInput id="large" type="text" sizing="lg" />
        </div>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-col gap-4">
  <div>
    <Label class="mb-2 block" for="small">Small input</Label>
    <TextInput id="small" type="text" sizing="sm" />
  </div>
  <div>
    <Label class="mb-2 block" for="base">Base input</Label>
    <TextInput id="base" type="text" sizing="md" />
  </div>
  <div>
    <Label class="mb-2 block" for="large">Large input</Label>
    <TextInput id="large" type="text" sizing="lg" />
  </div>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Disabled inputs</span>
    <Card>
      <div class="flex flex-col gap-4">
        <TextInput type="text" placeholder="Disabled input" disabled={true} />
        <TextInput type="text" placeholder="Disabled readonly input" disabled={true} readOnly={true} />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-col gap-4">
  <TextInput type="text" placeholder="Disabled input" disabled={true} />
  <TextInput type="text" placeholder="Disabled readonly input" disabled={true} readOnly={true} />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Shadow inputs</span>
    <Card>
      <form class="flex flex-col gap-4">
        <div>
          <Label class="mb-2 block" for="email">Your email</Label>
          <TextInput id="email" type="email" placeholder="name@flowbite.com" required={true} shadow={true} />
        </div>
        <div>
          <Label class="mb-2 block" for="password">Your password</Label>
          <TextInput id="password" type="password" required={true} shadow={true} />
        </div>
        <div>
          <Label class="mb-2 block" for="repeat-password">Repeat password</Label>
          <TextInput id="repeat-password" type="password" required={true} shadow={true} />
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label for="agree">
            I agree with the
            <a href="/forms" class="text-blue-600 hover:underline dark:text-blue-500"> terms and conditions </a>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
      <HighlightSvelte
        code={`<form class="flex flex-col gap-4">
  <div>
    <Label class="mb-2 block" for="email">Your email</Label>
    <TextInput id="email" type="email" placeholder="name@flowbite.com" required={true} shadow={true} />
  </div>
  <div>
    <Label class="mb-2 block" for="password">Your password</Label>
    <TextInput id="password" type="password" required={true} shadow={true} />
  </div>
  <div>
    <Label class="mb-2 block" for="repeat-password">Repeat password</Label>
    <TextInput id="repeat-password" type="password" required={true} shadow={true} />
  </div>
  <div class="flex items-center gap-2">
    <Checkbox id="agree" />
    <Label for="agree">
      I agree with the
      <a href="/forms" class="text-blue-600 hover:underline dark:text-blue-500"> terms and conditions </a>
    </Label>
  </div>
  <Button type="submit">Register new account</Button>
</form>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Helper text</span>
    <Card>
      <div>
        <Label class="mb-2 block" for="email">Your email</Label>
        <TextInput id="email" type="email" placeholder="name@flowbite.com" required={true}>
          <div slot="helper">
            We'll never share your details. Read our
            <a href="/forms" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
          </div>
        </TextInput>
      </div>
      <HighlightSvelte
        code={`<div>
  <Label class="mb-2 block" for="email">Your email</Label>
  <TextInput id="email" type="email" placeholder="name@flowbite.com" required={true}>
    <div slot="helper">
      We'll never share your details. Read our
      <a href="/forms" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
    </div>
  </TextInput>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Input element with icon </span>
    <Card>
      <div>
        <Label class="mb-2 block" for="email">Your email</Label>
        <TextInput id="email" type="email" placeholder="name@flowbite.com" required={true} icon={HiMailSolid} />
      </div>
      <HighlightSvelte
        code={`<div>
  <Label class="mb-2 block" for="email">Your email</Label>
  <TextInput id="email" type="email" placeholder="name@flowbite.com" required={true} icon={HiMailSolid} />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Input element with addon </span>
    <Card>
      <div>
        <Label class="mb-2 block" for="username">Username</Label>
        <TextInput id="username" placeholder="Bonnie Green" required={true} addon="@" />
      </div>
      <HighlightSvelte
        code={`<div>
  <Label class="mb-2 block" for="email">Your email</Label>
  <TextInput id="email" type="email" placeholder="name@flowbite.com" required={true} icon={HiMailSolid} />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Success and error validation </span>
    <Card>
      <div class="flex flex-col gap-4">
        <div>
          <Label class="mb-2 block" for="username" color="green">Your name</Label>
          <TextInput id="username" placeholder="Bonnie Green" required={true} color="green">
            <div slot="helper">
              <span class="font-medium">Alright!</span> Username available!
            </div>
          </TextInput>
        </div>
        <div>
          <Label class="mb-2 block" for="username" color="red">Your name</Label>
          <TextInput id="username" placeholder="Bonnie Green" required={true} color="red">
            <div slot="helper">
              <span class="font-medium">Oops!</span> Username already taken!
            </div>
          </TextInput>
        </div>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-col gap-4">
  <div>
    <Label class="mb-2 block" for="username" color="green">Your name</Label>
    <TextInput id="username" placeholder="Bonnie Green" required={true} color="green">
      <div slot="helper">
        <span class="font-medium">Alright!</span> Username available!
      </div>
    </TextInput>
  </div>
  <div>
    <Label class="mb-2 block" for="username" color="red">Your name</Label>
    <TextInput id="username" placeholder="Bonnie Green" required={true} color="red">
      <div slot="helper">
        <span class="font-medium">Oops!</span> Username already taken!
      </div>
    </TextInput>
  </div>
</div>`}
      />
    </Card>
  </div>
</div>
