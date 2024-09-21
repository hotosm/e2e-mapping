import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// FIXME replace with custom domain and remove base
	site: 'https://hotosm.github.io',
	base: '/e2e-mapping/',
	// Do not use server side rendering
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
					label: '0. Overview',
					slug: '0-overview',
					translations: {
						fr: 'Placeholder',
						es: 'Placeholder',
					},
				},
				{
					label: '1. Base Imagery',
					items: [
						{ label: '1a) Drone TM', slug: '1-imagery/a-drone-tm' },
						{ label: '1b) OpenAerialMap', slug: '1-imagery/b-oam' },
					],
					translations: {
						fr: 'Placeholder',
						es: 'Placeholder',
					},
				},
				{
					label: '2. Digitization',
					items: [
						{ label: '2a) Create Training Data', slug: '2-digitization/a-ml-training' },
						{ label: '2b) fAIr (AI-Assisted Mapping)', slug: '2-digitization/b-fair' },
						{ label: '2c) Validate fAIr Output', slug: '2-digitization/c-ml-validation' },
					],
					translations: {
						fr: 'Placeholder',
						es: 'Placeholder',
					},
				},
				{
					label: '3. Field Mapping',
					items: [
						{ label: '3a) Field Mapping Tasking Manager', slug: '3-field-map/a-fmtm' },
						{ label: '3b) Merging Data With OSM', slug: '3-field-map/b-conflation' },
					],
					translations: {
						fr: 'Placeholder',
						es: 'Placeholder',
					},
				},
				{
					label: '4. Using Collected Data',
					items: [
						{ label: '4a) Extraction from OpenStreetMap', slug: '4-data/a-extract' },
						{ label: '4b) Visualization Tools', slug: '4-data/b-visualize' },
					],
					translations: {
						fr: 'Placeholder',
						es: 'Placeholder',
					},
				},
				{
					label: 'Extra Resources',
					slug: 'resources',
					translations: {
						fr: 'Placeholder',
						es: 'Placeholder',
					},
				},
				{
					label: 'Case Studies',
					items: [
						{ label: '2024-04 Bali', slug: 'case-studies/2024-04-bali' },
						{ label: '2024-07 Argentina', slug: 'case-studies/2024-07-argentina' },
					],
					translations: {
						fr: 'Placeholder',
						es: 'Placeholder',
					},
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				fr: {
					label: 'Français',
					lang: 'fr',
				},
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
		}),
	],
});
