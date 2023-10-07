import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	ssr: {
		noExternal: [
		  'gsap',
		  'gsap/dist/ScrollTrigger',
		],
	},
	plugins: [sveltekit()]
});
