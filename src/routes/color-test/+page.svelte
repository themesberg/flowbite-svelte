<script lang="ts">
  const fgBrand = ["fg-brand", "fg-brand-subtle", "fg-brand-strong"];
  const shikiFgBrand = [ "shiki-fg-brand", "shiki-fg-brand-subtle"];
  const textVariables = [
    "text-2xs",
    "spacing-8xl",
    "leading-9",
    "leading-8",
    "leading-7",
    "leading-6",
    "leading-5",
    "leading-4",
    "leading-none",
    "leading-heading-none",
    "tracking-tighter",
    "tracking-tight"
  ];

  const borderRadiusVariables = [
    "rounded-0",
    "rounded-xxs",
    "rounded-xs",
    "rounded-sm",
    "rounded",
    "rounded-base",
    "rounded-lg"
  ];
  const colors = [
    "brand",
    "danger",
    "success",
    "warning",
    "dark",
    "neutral",
    "slate",
    "gray",
    "zinc",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose"
  ] as const;

  const borders = ["border", "border-2", "border-4", "border-8"] as const;

  type ColorName = (typeof colors)[number];

  const colorClasses: Record<ColorName, { border: string; text: string }> = {
    brand: { border: "border-brand", text: "text-brand-soft" },
    danger: { border: "border-danger", text: "text-danger-soft" },
    success: { border: "border-success", text: "text-success-soft" },
    warning: { border: "border-warning", text: "text-warning-soft" },
    dark: { border: "border-dark", text: "text-dark-soft" },
    neutral: { border: "border-neutral-primary", text: "text-neutral-primary" },
    slate: { border: "border-slate-600", text: "text-slate-500" },
    gray: { border: "border-gray-600", text: "text-gray-500" },
    zinc: { border: "border-zinc-600", text: "text-zinc-500" },
    stone: { border: "border-stone-600", text: "text-stone-500" },
    red: { border: "border-red-600", text: "text-red-500" },
    orange: { border: "border-orange-600", text: "text-orange-500" },
    amber: { border: "border-amber-600", text: "text-amber-500" },
    yellow: { border: "border-yellow-600", text: "text-yellow-500" },
    lime: { border: "border-lime-600", text: "text-lime-500" },
    green: { border: "border-green-600", text: "text-green-500" },
    emerald: { border: "border-emerald-600", text: "text-emerald-500" },
    teal: { border: "border-teal-600", text: "text-teal-500" },
    cyan: { border: "border-cyan-600", text: "text-cyan-500" },
    sky: { border: "border-sky-600", text: "text-sky-500" },
    blue: { border: "border-blue-600", text: "text-blue-500" },
    indigo: { border: "border-indigo-600", text: "text-indigo-500" },
    violet: { border: "border-violet-600", text: "text-violet-500" },
    purple: { border: "border-purple-600", text: "text-purple-500" },
    fuchsia: { border: "border-fuchsia-600", text: "text-fuchsia-500" },
    pink: { border: "border-pink-600", text: "text-pink-500" },
    rose: { border: "border-rose-600", text: "text-rose-500" }
  };
  const bgColorClasses: Record<ColorName, string> = {
    brand: "bg-brand-soft",
    danger: "bg-danger-soft",
    success: "bg-success-soft",
    warning: "bg-warning-soft",
    dark: "bg-dark-soft",
    neutral: "bg-neutral-primary",
    slate: "bg-slate-100",
    gray: "bg-gray-100",
    zinc: "bg-zinc-100",
    stone: "bg-stone-100",
    red: "bg-red-100",
    orange: "bg-orange-100",
    amber: "bg-amber-100",
    yellow: "bg-yellow-100",
    lime: "bg-lime-100",
    green: "bg-green-100",
    emerald: "bg-emerald-100",
    teal: "bg-teal-100",
    cyan: "bg-cyan-100",
    sky: "bg-sky-100",
    blue: "bg-blue-100",
    indigo: "bg-indigo-100",
    violet: "bg-violet-100",
    purple: "bg-purple-100",
    fuchsia: "bg-fuchsia-100",
    pink: "bg-pink-100",
    rose: "bg-rose-100"
  };
</script>

<div class="flex flex-wrap gap-4 p-8">
  {#each fgBrand as token}
  <p class={`mb-2 text-${token}`}>text-{token}</p>
{/each}
</div>

<div class="flex flex-wrap gap-4 p-8">
{#each shikiFgBrand as token}
  <p class={`mb-2 text-${token}`}>text-{token}</p>
{/each}
</div>

<!-- textVariables classes -->
<div class="flex flex-wrap gap-4 p-8">
  {#each textVariables as textVariable}
    <p class={`mb-2 ${textVariable} bg-gray-200`}>{textVariable} - The quick brown fox jumps over the lazy dog.</p>
  {/each}
</div>

<!-- borderRadiusVariables classes -->
<div class="flex flex-wrap gap-4 p-8">
  {#each borderRadiusVariables as borderRadiusVariable}
    <p class={`leading-heading-none mb-2 ${borderRadiusVariable} bg-gray-200`}>{borderRadiusVariable} - The quick brown fox jumps over the lazy dog.</p>
  {/each}
</div>

<div class="flex flex-wrap gap-4 p-8">
  {#each colors as color}
    <div class="mb-8">
      <h3 class="mb-2 text-xl font-bold capitalize">{color}</h3>

      {#each borders as borderSize}
         <div class={`m-2 flex h-24 w-24 items-center justify-center font-semibold ${borderSize} ${colorClasses[color].border} ${colorClasses[color].text}`}>
          {color}
        </div>
      {/each}

      <div class="mt-4 flex flex-wrap">
        <div class={`m-2 flex h-24 w-24 items-center justify-center font-semibold ${bgColorClasses[color]} text-gray-900`}>bg</div>
      </div>
    </div>
  {/each}
</div>
