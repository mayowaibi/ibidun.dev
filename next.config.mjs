/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config, { isServer }) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg")
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: {
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: [
								{
									name: "preset-default",
									params: {
										overrides: {
											removeViewBox: false,
										},
									},
								},
							],
						},
					},
				},
			},
			// Add a rule for audio file extensions
			{
				test: /\.(ogg|mp3|wav|mpe?g)$/i,
				exclude: config.exclude,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: config.inlineImageLimit,
							fallback: "file-loader",
							publicPath: `${config.assetPrefix}/_next/static/audio/`,
							outputPath: `${isServer ? "../" : ""}static/audio/`,
							name: "[name]-[hash].[ext]",
							esModule: config.esModule || false,
						},
					},
				],
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};

export default nextConfig;
