import { tv } from "tailwind-variants";

export const highlightcompo = tv({
  slots: {
    base: "mt-4 max-w-4xl rounded bg-neutral-secondary-strong",
    badge: "absolute -top-8 right-[8px]",
    button: "absolute right-2 top-2 rounded px-2 py-1 bg-primary-800 text-white"
  },
  variants: {
    expanded: {
      true: { base: "min-h-full" },
      false: { base: "" }
    }
  }
});

export const codewrapper = tv({
  slots: {
    base: "max-w-4xl mx-auto rounded-md border border-default-strong bg-neutral-primary bg-gradient-to-r",
    inner: "p-6"
  }
});

export const h1Cls = tv({
  base: "my-8 text-3xl mx-auto max-w-4xl"
});

export const h2Cls = tv({
  base: "my-6 text-2xl"
});

export const h3Cls = tv({
  base: "my-4 text-xl"
});
