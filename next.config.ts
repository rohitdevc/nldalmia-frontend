import type { NextConfig } from "next";

const isNetlifyDomain = process.env.URL?.includes("netlify.app");

const nextConfig: NextConfig = {
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
