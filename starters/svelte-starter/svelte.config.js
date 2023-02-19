import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
