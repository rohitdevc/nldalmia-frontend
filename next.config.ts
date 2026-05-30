import type { NextConfig } from "next";

const isNetlifyDomain = process.env.URL?.includes("netlify.app");

const nextConfig: NextConfig = {
	images: {
    remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.nldalmia.in',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: '**.cdninstagram.com',
				port: '',
				pathname: '/**'
			}
		]
	},
	async headers() {
	    if (!isNetlifyDomain) return [];
	    
	    return [
	      {
	        source: "/(.*)",
	        headers: [
	          {
	            key: "X-Robots-Tag",
	            value: "noindex, nofollow",
	          },
	        ],
	      },
	    ];
	 },

	 async redirects()  {
		return [
			{
				source: '/faculty/research-papers-published',
				destination: '/faculty/research-papers-published/journal-publications',
				permanent: true
			},
			{
				source: '/blog',
				destination: '/blogs',
				permanent: true
			},
			{
				source: '/blog/:year/:month/:day/:slug',
				destination: '/:slug',
				permanent: true,
			},
			{
				source: '/blogs/:year/:month/:day/:slug',
				destination: '/:slug',
				permanent: true,
			},
			{
				source: '/2023/:month',
				destination: '/blogs',
				permanent: true,
			},
			{
				source: '/2022/:month',
				destination: '/blogs',
				permanent: true,
			},
			{
				source: '/2021/:month',
				destination: '/blogs',
				permanent: true,
			},
			{
				source: '/2020/:month',
				destination: '/blogs',
				permanent: true,
			},
			{
				source: '/2019/:month',
				destination: '/blogs',
				permanent: true,
			},
			{
				source: '/2018/:month',
				destination: '/blogs',
				permanent: true,
			},
			{
				source: '/2017/:month',
				destination: '/blogs',
				permanent: true,
			},
		]
	 }
};

export default nextConfig;
