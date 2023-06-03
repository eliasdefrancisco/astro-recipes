import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import vanillaExtract from "astro-vanilla-extract";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), vanillaExtract()]
});