<script lang="ts">
  const colors = [
    "slate",
    "gray",
    "zinc",
    "neutral",
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
    slate: { border: "border-slate-600", text: "text-slate-500" },
    gray: { border: "border-gray-600", text: "text-gray-500" },
    zinc: { border: "border-zinc-600", text: "text-zinc-500" },
    neutral: { border: "border-neutral-600", text: "text-neutral-500" },
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
</script>

<div class="flex flex-wrap gap-4 p-8">
  {#each colors as color}
    <div class="mb-8">
      <h3 class="mb-2 text-xl font-bold capitalize">{color}</h3>

      {#each borders as borderSize}
        <div class={["m-2 flex h-24 w-24 items-center justify-center font-semibold", borderSize, colorClasses[color].border, colorClasses[color].text].join(" ")}>
          {color}
        </div>
      {/each}
    </div>
  {/each}
</div>
