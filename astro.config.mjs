import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// FIXME replace with custom domain and remove base
	site: 'https://hotosm.github.io',
	base: 'e2e-mapping',
	output: "static",
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	// Temp workaround until PNPM bundling `sharp` is fixed
	image: {
		service: passthroughImageService(),
	},
	integrations: [
		starlight({
			title: 'End-to-End Mapping',
			social: {
				github: 'https://github.com/hotosm/e2e-mapping',
			},
			sidebar: [
				{
					label: '1. Base Imagery',
					items: [
						{ label: 'a) Drone TM', slug: '1-imagery/a-drone-tm' },
						{ label: 'b) OpenAerialMap', slug: '1-imagery/b-oam' },
					],
				},
				{
					label: '2. Digitization',
					items: [
						{ label: 'a) Tasking Manager Training', slug: '2-digitization/a-tm-training' },
						{ label: 'b) fAIr (AI-Assisted Mapping)', slug: '2-digitization/b-fair' },
						{ label: 'c) Tasking Manager Validation', slug: '2-digitization/c-tm-validation' },
					],
				},
				{
					label: '3. Field Mapping',
					items: [
						{ label: 'a) Field Mapping Tasking Manager', slug: '3-field-map/a-fmtm' },
						{ label: 'b) Merging Data With OSM', slug: '3-field-map/b-conflation' },
					],
				},
				{
					label: '4. Using Collected Data',
					items: [
						{ label: 'a) Extraction from OpenStreetMap', slug: '4-data/a-extract' },
						{ label: 'b) Visualization Tools', slug: '4-data/b-visualize' },
					],
				},
			],
		}),
	],
});
