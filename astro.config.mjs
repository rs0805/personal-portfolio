import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
  site: 'https://example.com',
  devToolbar: { enabled: false },
  integrations: [icon()],
});
