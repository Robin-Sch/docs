// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.robinsch.net',
	integrations: [
		starlight({
      		plugins: [starlightBlog({
				title: 'Guides',
				prefix: 'guides',
				authors: {
					robin: {
						name: 'Robin',
						url: 'https://www.robinsch.net',
						picture: 'https://robinsch.net/img/avatar.webp'
					}
				}
			})],
			title: 'Robin\'s Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Robin-Sch' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
