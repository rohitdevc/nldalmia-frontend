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
				source: '/faculty/faculty-initiatives',
				destination: '/faculty/faculty-development-programs',
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
				source: '/blogs/:page',
				destination: '/blogs',
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
			{
				source: '/awards',
				destination: '/awards-and-achievements',
				permanent: true,
			},
			{
				source: '/awards/:path',
				destination: '/awards-and-achievements',
				permanent: true,
			},
			{
				source: '/awards-achievement',
				destination: '/awards-and-achievements',
				permanent: true,
			},
			{
				source: '/faculty-members/:path',
				destination: '/faculty/:path',
				permanent: true,
			},
			{
				source: '/faculty/dr-joyeeta-chatterjee',
				destination: '/faculty/prof-dr-joyeeta-chatterjee',
				permanent: true,
			},
			{
				source: '/faculty/dr-jyoti-nair',
				destination: '/faculty/prof-dr-jyoti-nair',
				permanent: true,
			},
			{
				source: '/research-papers-presented',
				destination: '/faculty/research-papers-published/journal-publications',
				permanent: true
			},
			{
				source: '/industrial-visit',
				destination: '/life-at-nld',
				permanent: true
			},
			{
				source: '/resources',
				destination: '/life-at-nld',
				permanent: true
			},
			{
				source: '/batch-profile',
				destination: '/placements',
				permanent: true
			},
			{
				source: '/placement-partners',
				destination: '/placements',
				permanent: true
			},
			{
				source: '/placement-brochure',
				destination: '/placements',
				permanent: true
			},
			{
				source: '/placement-report',
				destination: '/placements',
				permanent: true
			},
			{
				source: '/placement-contact-us',
				destination: '/placements',
				permanent: true
			},
			{
				source: '/career-opportunities',
				destination: '/careers',
				permanent: true
			},
			{
				source: '/media',
				destination: '/media/press-release',
				permanent: true
			},
			{
				source: '/management-development-programmes',
				destination: '/management-development-programs',
				permanent: true
			},
			{
				source: '/programs/bloomberg-research-analyst',
				destination: '/programs',
				permanent: true
			},
			{
				source: '/bloomberg',
				destination: '/programs',
				permanent: true
			},
			{
				source: '/corporate-connect',
				destination: '/management-development-programs',
				permanent: true
			},
			{
				source: '/financial-aid',
				destination: '/financial-assistance',
				permanent: true
			},
			{
				source: '/e-cell',
				destination: '/',
				permanent: true
			},
			{
				source: '/aicte-approvals',
				destination: '/about-us',
				permanent: true
			},
			{
				source: '/news-and-announcements',
				destination: '/media/press-release',
				permanent: true
			},
			{
				source: '/events/international-yoga-day',
				destination: '/events/international-yoga-day-2022',
				permanent: true
			},
		]
	 }
};

export default nextConfig;
