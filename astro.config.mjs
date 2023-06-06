import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	output: 'hybrid',
	experimental: {
		hybridOutput: true
	},
	adapter: node({
		mode: 'middleware'
	})
})