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
			}
		]
	 }
};

export default nextConfig;
