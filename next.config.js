/** @type {import('next').NextConfig} */
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	basePath: '/cid',
	webpack(config) {
		config.plugins.push(new WindiCSSWebpackPlugin())
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		})
		return config
	}
}

export default nextConfig
