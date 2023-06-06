import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'
import { configDotenv } from 'dotenv'

configDotenv()

// https://astro.build/config
export default defineConfig({
	integrations: [preact(), sitemap()],
	output: 'hybrid',
	experimental: {
		hybridOutput: true
	},
	adapter: node({
		mode: 'middleware'
	}),
	site: process.env.DOMAIN_URL
})