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
			{
				source: '/wp-content/uploads/2026/04/Goonj-November-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-november-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/09/Goonj-August-2025-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-august-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/05/Goonj_-JAN-2025_-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-january-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/12/Goonj-November-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-november-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Goonj-Aug-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-august-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Goonj-2024-March-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-march-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Goonj-2024-January-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-january-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Goonj-2023-November-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-november-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Goonj-2023-August-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-august-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Goonj-2023-MARCH.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-march-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Goonj-2023-January.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-january-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-Newsletter-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-august-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-Newsletter-August-Edition.pptx-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-august-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-Newsletter-January-2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-january-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-Newsletter-November-2021.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-november-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/GOONJ-AUG-21-final-draft.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-august-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-December-2020-Released-version.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-december-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-Magazine-June-2020.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-june-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-Magazine-Dec-19-Final.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-december-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-Magazine-June-2019.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-june-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-Magazine-Dec-2018.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-december-2018.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Goonj-Newsletter-MARCH-20231338.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/goonj-march-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/05/Delta-Volume-30.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-november-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Delta-Volume-29-2024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-july-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Delta-2023-November-Volume-28.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-november-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Delta-2023-March-Volume-27.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-march-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Draft-5-Delta-Volume-26.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-february-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/25th-Delta-Magazine.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-february-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Volume-24th-Delta-Magazine.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-november-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/DELTA-E-Magazine-Vol-23.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-february-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Final-Delta-Magazine-2020.1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-november-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Delta-21st-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-february-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Delta-20th-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-january-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/DELTA-Vol.19.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-february-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/NLDIMSR-Delta-Volume-17-February-2018-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-february-2018.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/NLDIMSR-Delta-Volume-17-February-2018.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-february-2018.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Delta-Vol.-16-September-2017.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/delta-february-2017.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/05/MarkX-Magazine_15th-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-may-2026.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/05/MarkX_13th-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-march-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/05/MarkX_12th-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-november-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/01/Markx11.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-march-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/MarkX-2023-November-Edition-10.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-november-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/MarkX-2023-March-Edition-9.0.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-march-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Mark-X-Edition-8.0-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-november-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Mark-X-7th-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-march-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Mark-X-Edition-8.0.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-november-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Final-Edition-5.0-Mark-X-2020.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-september-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/MarkX-Edition-4.0.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-march-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/MarkX-Edition-3.0.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-september-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/MarkX-Edition-2.0-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-march-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/MarkX-Edition-2.0-2-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/markx-march-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/04/SHUNYA-2025-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/shunya-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/12/SHUNYA.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/shunya-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Shunya-Newsletter.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/shunya-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/01/Episteme-November-Issue.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-november-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Episteme-2024-March-Volume-12.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-march-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Episteme-2023-November-Volume-11.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-november-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Episteme-2023-March-Volume-10.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-march-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/EPISTEME-9-Nov-2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-november-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/EPISTEME-7-final.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-november-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Episteme-Magazine-Jan-2021.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-january-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Final-Episteme-Magazine-July-2020.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-july-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Episteme-4th-Edition.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-january-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Episteme-Magazine-v3.0.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-november-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Episteme-Readable-v1.0.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/episteme-january-2018.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/05/MSR-Sparsh-2025.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/sparssh-volume-8.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/01/Sparssh-Volume-7.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/sparssh-volume-7.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/01/MSR-Sparsh-Magazine-Vol-6.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/sparssh-volume-6.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/01/MSR-Sparsh-Magazine-Vol-5.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/sparssh-volume-5.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Sparssh-Magazine-Vol.-IV.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/sparssh-volume-4.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/SPARSSH-EDITION-3.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/sparssh-volume-3.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Sparssh-2.0-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/sparssh-volume-2.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Sparssh-Vol.1-Issue-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/sparssh-volume-1.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/01/Udyamee-Volume-1-Issue-4.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/udyamee-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Udyamee-2023-Volume-3.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/udyamee-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Udaymee-2022-Volume-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/udyamee-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Udyamee.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/udyamee-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/GEM-Volume-5-Issue-2023-24.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/gem-volume-5.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/GEM-Volume-4-Issue-2022-23.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/gem-volume-4.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/GMC-Magazine-Edition-3-March22.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/gem-volume-3.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/GMC-Newsletter-2020-21.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/gem-newsletter.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/GeM-November-2021-Edition-2nd-Magazine-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/gem-volume-2.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/GeM-Issue-2019-20.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/gem-volume-1.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Udaan-Volume-5-2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/udaan-volume-5.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/09/Udaan-Volume-4.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/udaan-volume-4.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Newsletter_Final_3.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/udaan-volume-3.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Udaan-Alumni-Newsletter.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/udaan-volume-2.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Alumni-Relations-Newsletter-July-Dec-V1-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/institutional-publications/udaan-volume-1.pdf',
				permanent: true
			},
		]
	 }
};

export default nextConfig;
