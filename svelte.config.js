import adapter from '@sveltejs/adapter-static'; // yep, need to pnpm add -D @sveltejs/adapter-static

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
        //     base: process.env.NODE_ENV === 'production' ? '/why-i-am-different' : '',
            base: dev ? '' : process.env.BASE_PATH
		}
	}
};

export default config;