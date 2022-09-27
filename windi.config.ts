import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	prefix: 'wd-',
	preflight: false,
	important: true,
	extract: {
		include: ['**/*.{jsx,tsx,css,less}'],
		exclude: ['node_modules', '.git', '.next']
	}
})
