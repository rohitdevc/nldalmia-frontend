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
			},
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
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
				source: '/programs/executive-pgdm',
				destination: '/programs/pgdm-for-working-professionals',
				permanent: true
			},
			{
				source: '/reasons-why-you-should-consider-taking-a-course-on-big-data-analytics',
				destination: '/big-data-course-all-you-need-to-know-before-enrolling-to-one',
				permanent: true
			},
			{
				source: '/Course-MMS-Masters-In-Management-Studies-Marketing',
				destination: '/programs/pgdm',
				permanent: true
			},
			{
				source: '/Course-Master-Degree-in-Marketing-Management',
				destination: '/programs/pgdm',
				permanent: true
			},
			{
				source: '/Course-Post-Graduate-Program-in-Marketing',
				destination: '/programs/pgdm',
				permanent: true
			},
			{
				source: '/about-us/vision-mission',
				destination: '/about-us',
				permanent: true
			},
			{
				source: '/campus/gym',
				destination: '/life-at-nld',
				permanent: true
			},
			{
				source: '/faculty/ms-minati-sahoo',
				destination: '/faculty',
				permanent: true
			},
			{
				source: '/faculty/prof-seema-saini',
				destination: '/faculty/prof-dr-seema-saini',
				permanent: true
			},
			{
				source: '/faculty-members/dr-seema-saini',
				destination: '/faculty/prof-dr-seema-saini',
				permanent: true
			},
			{
				source: '/research-and-development',
				destination: '/faculty/research-papers-published/journal-publications',
				permanent: true
			},
			{
				source: '/publications/innovision-journal',
				destination: '/institutional-publications',
				permanent: true
			},
			{
				source: '/best-green-campus',
				destination: '/awards',
				permanent: true
			},
			{
				source: '/most-effective-learning-management-system-4',
				destination: '/awards',
				permanent: true
			},
			{
				source: '/times-top-institute-of-west-india-2020',
				destination: '/awards',
				permanent: true
			},
			{
				source: '/most-effective-learning-management-system-3',
				destination: '/awards',
				permanent: true
			},
			{
				source: '/interesting-career-prospects-after-completing-pdgm-or-mba-in-hr-2',
				destination: '/interesting-career-prospects-after-completing-pdgm-or-mba-in-hr',
				permanent: true
			},
			{
				source: '/most-effective-learning-management-system-2',
				destination: '/awards',
				permanent: true
			},
			{
				source: '/times-education-icon',
				destination: '/awards',
				permanent: true
			},
			{
				source: '/most-effective-learning-management-system',
				destination: '/awards',
				permanent: true
			},
			{
				source: '/awards/the-national-education-excellence-awards-2020',
				destination: '/awards',
				permanent: true
			},
			{
				source: '/5-must-read-books-for-a-business-analyst-2',
				destination: '/5-must-read-books-for-a-business-analyst',
				permanent: true
			},
			{
				source: '/5-tips-to-translate-mba-learnings-into-corporate-success-2',
				destination: '/5-tips-to-translate-mba-learnings-into-corporate-success',
				permanent: true
			},
			{
				source: '/blog/2018/10/05/how-to-select-a-college-for-mba',
				destination: '/how-to-select-a-college-for-mba',
				permanent: true
			},
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
				source: '/blog/:year/:month/:day',
				destination: '/blogs',
				permanent: true,
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
				source: '/faculty_members',
				destination: '/faculty',
				permanent: true,
			},
			{
				source: '/Course-Global-MBA-Program-University-of-Wisconsin-Parkside',
				destination: '/programs/global-mba-program-university-of-wisconsin-parkside',
				permanent: true,
			},
			{
				source: '/Course-MMS-Masters-In-Management-Studies-Finance',
				destination: '/programs/finance',
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
				destination: '/media/announcements',
				permanent: true
			},
			{
				source: '/management-development-programmes',
				destination: '/management-development-programs',
				permanent: true
			},
			{
				source: '/programs/bloomberg-research-analyst',
				destination: '/',
				permanent: true
			},
			{
				source: '/bloomberg',
				destination: '/life-at-nld',
				permanent: true
			},
			{
				source: '/corporate-connect',
				destination: '/placements',
				permanent: true
			},
			{
				source: '/financial-aid',
				destination: '/financial-assistance',
				permanent: true
			},
			{
				source: '/e-cell',
				destination: '/life-at-nld',
				permanent: true
			},
			{
				source: '/aicte-approvals',
				destination: '/iqac',
				permanent: true
			},
			{
				source: '/news-and-announcements',
				destination: '/media/announcements',
				permanent: true
			},
			{
				source: '/events/international-yoga-day',
				destination: '/events/international-yoga-day-2022',
				permanent: true
			},
			{
				source: '/events/maadhyam-2024',
				destination: '/events/maadhyam-2023',
				permanent: true
			},
			{
				source: '/think-tank',
				destination: '/think-tank-nl-dalmia-institute-mumbai-2023',
				permanent: true
			},
			{
				source: '/jugaadu',
				destination: '/jugaadu-2024',
				permanent: true
			},
			{
				source: '/e-summit',
				destination: '/e-summit-2024',
				permanent: true
			},
			{
				source: '/rethinking-business-strategies-to-drive-innovations-and-business-values',
				destination: '/rethinking-business-strategies-to-drive-innovations-and-business-values-2022',
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
			{
				source: '/wp-content/uploads/2025/10/DecodeX-2025-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/decodex-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/03/DecodeX-2024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/decodex-2024-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Mulyankan-2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/mulyankan-2023-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Mulyankan-2022-Schedule-.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/mulyankan-2022-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Concept-Note-2022.pdf',
				destination: '/events/mulyankan-2022',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/04/Nivesh-Bazaar-Summary-2024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/nivesh-bazaar-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/03/Comquest-2024-Summary.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/comquest-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/MAADHYAM-2025-REPORT.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/maadhyam-2025-marketing-event-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/Maadhyam-2023-24-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/maadhyam-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Maadhyam-2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/maadhyam-2023-marketing-event-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Maadhyam-2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/maadhyam-2022-marketing-event-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/Utkarsh-2023-24.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/utkarsh-2023-2024-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/Manusandhan-2024-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/manusandhan-2024-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/SHIKHAR-2024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/shikhar-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Shikhar-2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/shikhar-2022-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/USA-Alumni-Report.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/usa-alumni-chapter-meet-2025-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Pune-Alumni-Report.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/inaugural-pune-alumni-chapter-meet-2025-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Europe-Alumni-Report.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/europe-alumni-chapter-meet-2025-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Canada-Alumni-Report.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/canada-alumni-meet-2025-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Bangalore-Alumni-Report.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/bangalore-alumni-meet-2025-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/UAE-Alumni-Report.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/uae-alumni-chapter-meet-2024-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/Maadhyam-2023-24-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/maadhyam-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/03/Aakarshan-2024-2025.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/aakarshan-2024-25-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/03/Aakarshan-2023-2024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/aakarshan-2023-24-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/AAKARSHAN-2022-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/aakarshan-2022-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/Sports-Day-Report-2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/sports-league-event-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/EVINCO-2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/evinco-annual-inter-college-festival-of-nldimsr-mumbai-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/07/Sports-Tournament.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/evinco-annual-inter-college-festival-of-nldimsr-mumbai-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/E-Summit24-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/e-summit-at-n-l-dalmia-institute-mumbai-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/Jugaadu-2024-report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/jugaadu-entrepreneurship-pitch-competition-nldimsr-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/NLDICM-Brochure-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/entrepreneurship-and-business-growth-nldimsr-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/International-Yoga-Day-A.Y.2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/international-yoga-day-2022-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/International-Yoga-Day-A.Y.2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/events/international-yoga-day-2023-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/03/Placement-Brochure-2025-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/placement-brochure-2024-26.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/10/Placement-Brochure-2024_compressed-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2023-25-77434825.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/10/Placement-Brochure-2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2022-24-968100436.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Placement-Brochure-2021-2023-min.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2021-23-201483827.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Placement-Brochure-2020-2022-min.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2020-22-272599757.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Placement-Brochure-2019-2021-min.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2019-21-743280027.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/04/Placement-Report-2022-24-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/batch-2022-24-921479433.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/NL-PDF_02.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2021-23-953546401.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/10/Placement-Report-Batch-2020-2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2020-22-823654747.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/10/Placement-Report-2019-2021.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2019-21-859822748.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/04/Summer-Internship-Report-2024-26.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/batch-2024-26-607149432.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/10/Summer-Placement-Report_02_compressed.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2023-25-892233448.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/10/SummerInternshipReport-NLDIMSR_NewLogo.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2022-24-952887482.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/04/Summer-Internship-Report-2020-2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/batch-2020-22-996565781.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Student-Placement-Report-small-font-size-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/batch-2021-23.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/06/Scholarship-Report-2024-2026.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/scholarship/scholarship-report-2024-2026.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/06/Scholarship-Report-2023-25.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/scholarship/scholarship-report-2023-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/06/Scholarship-Report-2022-24.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/scholarship/scholarship-report-2022-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/02/PGDM-Working-Professionals-Brochure_low.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/brochures/pgdm-for-working-professionals-brochure.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/Ph.D-Application-form-word-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/forms/ph.d-application-form.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/PO_PGDM.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/pgdm.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/01/PO-PGDM-Finance.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/pgdm-finance.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/08/PO_PGDM-Business-Analytics.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/pgdm-business-analytics.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-10.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-1995-2015.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-9.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2016-17.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-8.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2017-18.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-7.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2018-19.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-6.pdf',
				destination: 'http://nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2019-20.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-5.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2020-21.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-4.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2021-22.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-3.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2022-23.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-extended-eoa-2022-23-to-2024-25.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/AICTE-Approvals-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2023-24.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/AICTE-Approvals.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2024-25.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/04/EOA-Report-2025-26.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2025-26.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/04/EOA-Report-2026-2027.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/aicte-approvals/aicte-eoa-report-2026-27.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/02/kuhoo_NLDIMSR_finantial_aid.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/financial-institutions/kuhoo.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/02/N-L-Dalmia.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/financial-institutions/tata-capital.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/03/India-MBA-ProductTemplate-Feb26-NLDalmia-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/financial-institutions/credila.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/08/Placement-Brochure-2019-20-min.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/placements/reports/2018-20-907588849.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/07/Hostel-Policy-2025-27.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/resources/hostel-accommodation-policy-for-the-academic-year-2025-26.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/09/Hostel-Policy-as-on-09.09.25.doc',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/resources/hostel-accommodation-policy-for-the-academic-year-2025-26.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/03/Industrial-Visit-Report-Neuclear-Power-Corporation-of-India-Limited-NPCIL.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/nuclear-power-corporation-of-india-limited-npcil.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/Industrial-Visit-Report-GIA.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/gia-india-laboratory-pvt-ltd-mumbai.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/Bloomberg-Industrial-Visit-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/bloomberg-office-with-a-session-on-technical-analysis.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/Mahindra-and-Mahindra-Industrial-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/mahindra-and-mahindra-kandivali-mumbai.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/Flipkart-Warehouse-Industrial-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/flipkart-fulfilment-centre-bhiwandi.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/APMC-Industrial-Visit-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/agricultural-produce-market-committee-apmc.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/Shoppers-Stop.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/shoppers-stop-malad-mumbai.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/Dubai-Industrial-Visit-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/bloomberg-office-dubai.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/03/Parle-G-Industrial-Visit.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/parle-g-factory-in-lonavala.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/03/Shoppers-Stop-visit-on-September-132024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/shoppers-stop-mumbai.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/03/HR-Industrial-Visit-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/reliance-distribution-centre.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/Bloomberg-Industrial-Visit-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/bloomberg-office-mumbai.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/03/Industrial-Visit-6th-March-2026.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/mahindra-mahindra-kandivali-plant.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/03/Industrial-Visit-11th-December-to-12th-December-2025.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/sahyadri-farm-nashik-nashik-municipal-waste-management-centre.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/03/Industrial-Visit-6th-November-2025.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/jawaharlal-nehru-port-authority-jnpa.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Industrial-Visit-to-Shoppers-Stop.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/shoppers-stop-inorbit-mall-malad.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/03/Industrial-Visit-23rd-February-to-26th-February-2026.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/industrial-visits/international-industrial-visit-and-immersion-program-to-dubai-and-abu-dhabi.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/04/FAQ-PGDM-Working-professional-Program-2025-2027-1.pdf',
				destination: '/programs/pgdm-for-working-professionals',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/06/About-Us_2025-as-on-03.06.25.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/admissions/about-us-2025-27.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Unnati-event-Report.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/unnati-case-study.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-visit-2021-1.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-15-08-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/30.12.2021-New-Year-Celebration.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-21-12-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/24.04.2022-Kondgaon-Visit-Dental-Camp-1.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-20-04-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Unnati-event-Report-1.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/msr-case-study-compition.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/24.04.2022-Kondgaon-Visit-Dental-Camp.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/free-dental-and-oral-hygiene-awareness-camp.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-Visit-Report-20.01.23.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-20-01-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-Visit-Report-4.03.2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-4-03-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/6.07.2022-Raincoat-Distribution-Camp-at-Kondgaon.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-6-07-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/30.07.2022-2.08.2022-Report-on-Rural-Im.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/rural-immersion-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Report-on-Kondgaon-meritorius-students-felicitation-by-Hon-Governor.docx.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-meritorius-students-recognition.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/IFC-MSR-Art-Craft-Display-report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/ifc-kondgaon-art-and-craft-display.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/DecodeX-2025-Kondgaon-Art-Craft-Display.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/decode-x-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-Visit-8th-March-2025.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-8-3-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-Visit-Report-18-12-2024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-18-12-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Jalsa-2024-report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/jalsa-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-Visit-22-02-2025.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-22-02-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-Visit-Report-28-06-2025.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-28-06-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Rural-Immersion-report-1.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/rural-immersion-report-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Rural-Marketing-Visit.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/rural-marketing-visit.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-Visit-27-02-2025.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-27-02-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Report-on-PGDM-Marketing-Rural-visit.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/rural-marketing-batch-visit.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Rural-Immersion-Report-2.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/rural-immersion-report.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-Visit_-06-12-23.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-06-12-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Report-on-Kondgaon-visit-13.07.2023.docx',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-13-07-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Kondgaon-visit-report-01.03.2024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-1-03-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Report-of-Kondgaon-visit-01.01.2024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/kondgaon-visit-1-01-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Jalsa-2023-A-Fundraising-Garba-Event-Report.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/msr/jalsa-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/NLDIMSR_NAAC_SSR_2016.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/naac-ssr-cycle-1.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/NAAC-SSR-Cycle-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/naac-ssr-cycle-2.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2026/04/NIRF-2026.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/nirf-2026.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/02/NIRF-2025.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/nirf-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/NIRF-2024.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/nirf-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/NIRF-2023-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/nirf-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/NIRF-2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/nirf-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/NIRF-2021.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/nirf-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/NIRF-2020.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/nirf-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/NIRF-2019.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/nirf-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/11/IQAC-SOP.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-sop.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/2024-25-3.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-3rd-april-2025.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/2024-25-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-14th-december-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/2024-25-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-6th-june-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/2023-24-3.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-12-th-april-2024.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/2023-24-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-22nd-december-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/2023-24-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-12-th-june-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/Feb-2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-16th-february-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/Nov-2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-28th-november-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/July-2022.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-6th-july-2022.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/May-2023.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-9th-may-2023.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/4.-13-May-2021.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-6th-may-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/3.-16-February-2021.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-10th-feb-2021.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/2.-13th-October-2020.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-1st-oct-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/1.-10-July-2020.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-6th-july-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/2.-8-November-2019.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-1st-nov-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/1.-6-July-2019.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-28th-june-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/4.-13-May-2020.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-7th-may-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/3.-2-February-2020.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-24th-jan-2020.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/4.-10-May-2019-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-3rd-may-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/3.-8-February-2019-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-1st-feb-2019.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/2.-26-October-2018-2.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-19th-oct-2018.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/1.-7-July-2018-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-2nd-july-2018.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/4.-10-May-2017.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-3rd-may-2017.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/3.-6-February-2018.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-27th-jan-2018.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/2.-3-October-2017.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-26th-sept-2017.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/1.-13-July-2017.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-7th-july-2017.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/4.-10-May-2017-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-3rd-may-2017.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/3.-9-February-2017.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-3rd-feb-2017.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/2.-10-October-2016.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-20th-oct-2016.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/1.-19-July-2016-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/iqac-minutes-9th-july-2016.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/2023-24-ATR.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/action-taken-report-2023-24.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/ATR.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/action-taken-report-2022-23.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/IQAC-Action-Taken-Report-2021-22.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/action-taken-report-2021-22.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Action-Taken-Report-2020-21.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/action-taken-report-2020-21.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Action-Taken-Report-2019-20.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/action-taken-report-2019-20.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Action-Taken-Report-2018-19.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/action-taken-report-2018-19.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Action-Taken-Report-2017-18.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/action-taken-report-2017-18.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Action-Taken-Report-2016-17.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/action-taken-report-2016-17.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/10/Academic-Calendar_AY-2025-26-1.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2025-26.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/01/Academic-Calendar-AY-2024-25.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2024-25.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/07/Academic-Calendar-AY-2023-24.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2023-24.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Master-Academic-Calendar-A.Y.-2022-23.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2022-23.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Master-Academic-Calendar-A.Y.-2021-22.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2021-22.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Academic-Year-2020-21.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2020-21.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Academic-Year-2019-20.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2019-20.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Academic-Year-2018-19.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2018-19.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Academic-Year-2017-18.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2017-18.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2023/09/Academic-Year-2016-17.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/iqac/academic-year-2016-17.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2024/08/About-Us-.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/admissions/about-us-2025-27.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/Mandatory-2025.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/mandatory-disclosures.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/02/Grievance-Redressal.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/grievance-redressal.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/02/Study-In-India-SII.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/study-in-india-(sii).pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/NLD-Statutory-Committee-REVSD-List-AY-2025-26.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/nl-dalmia-statutory-committee-2025-26.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/List-of-PGDM-Students-Placed-during-A.Y.2021-22-2022-23-2023-24.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/pgdm-students-placements-2021-22.2022-23.2023-24.pdf',
				permanent: true
			},
			{
				source: '/wp-content/uploads/2025/11/List-of-PGDM-Finance-Students-placed-during-A.Y.-2021-22-2022-23-2023-24.pdf',
				destination: 'https://www.nldalmia.in/staging/assets/pdfs/pgdm-finance-students-placements-2021-22.2022-23.2023-24.pdf',
				permanent: true
			},
			{
				source: '/south-asia-pacific-international-conference',
				destination: '/south-asia-pacific-international-conference-2024',
				permanent: true
			},
			{
				source: '/alumni-spotlight/8212',
				destination: '/events/virtual-alumni-meet-series-2',
				permanent: true
			},
			{
				source: '/alumni-spotlight/mr-bhoopesh-jain-2',
				destination: '/alumni',
				permanent: true
			},
			{
				source: '/alumni-spotlight/mr-gaurav-jain-2',
				destination: '/alumni',
				permanent: true
			},
			{
				source: '/alumni-spotlight/ms-munmun-desai-2',
				destination: '/alumni',
				permanent: true
			}
		]
	 }
};

export default nextConfig;
