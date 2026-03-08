import Link from "next/link"

type ResearchPublicationTabProps = {
    page_name: string;
}

export default function ResearchPublicationTabs({page_name}: ResearchPublicationTabProps) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    const tabs = [
        {
            tab_title: 'Journal Publications',
            tab_url_slug: 'journal-publications'
        },
        {
            tab_title: 'Case Studies',
            tab_url_slug: 'case-studies'
        },
        {
            tab_title: 'Book/Book Chapters',
            tab_url_slug: 'book-chapters'
        },
        {
            tab_title: 'Reports',
            tab_url_slug: 'reports'
        }
    ]

    return (
        <ul className="flex flex-wrap gap-5 lg:gap-10 justify-center items-center text-center px-5 md:px-15 xl:px-30 py-10">
            {
                tabs.map((tab, key) => (
                    <li key={key}>
                        <Link href={`${basePath}faculty/research-papers-published/${tab.tab_url_slug}`} className="relative group">
                            <span>{tab.tab_title}</span>
                            <span className={`absolute left-0 -bottom-1 origin-center transition-transform duration-300 w-full h-[0.5px] bg-[#800000] scale-x-0 group-hover:scale-x-100 ${page_name === tab.tab_title ? 'scale-x-100': ''}`}></span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}