import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import lit from "@astrojs/lit";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), lit(), svelte()]
});