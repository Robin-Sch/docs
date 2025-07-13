// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.robinsch.net',
	integrations: [
		mermaid({}),
		starlight({
      		plugins: [],
			title: 'Robin\'s Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Robin-Sch' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},

				{
					label: 'Documentation',
					autogenerate: { directory: 'docs' },
				},
			],
		}),
	],
});
