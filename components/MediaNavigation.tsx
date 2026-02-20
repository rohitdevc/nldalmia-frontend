import Link from "next/link";

type mediaNavProps = {
    activePage: string;
}

export default function MediaNavigation({activePage}: mediaNavProps) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    return (
        <ul className="flex flex-col flex-wrap sm:flex-row gap-5 lg:gap-10 justify-center items-center py-5">
            <li className="group">
                <Link href={`${basePath}awards-and-achievements`} className="relative">
                    <span>Awards & Achievements</span>
                    <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activePage === "awards-and-achievements" ? 'scale-x-100' : ''}`}></span>
                </Link>
            </li>
            <li className="group">
                <Link href={`${basePath}media/press-release`} className="relative">
                    <span>Press Release</span>
                    <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activePage === "press-release" ? 'scale-x-100' : ''}`}></span>
                </Link>
            </li>
            <li className="group">
                <Link href={`${basePath}media/print-coverage`} className="relative">
                    <span>Print Coverage</span>
                    <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activePage === "print-coverage" ? 'scale-x-100' : ''}`}></span>
                </Link>
            </li>
            <li className="group">
                <Link href={`${basePath}media/tv-coverage`} className="relative">
                    <span>TV Coverage</span>
                    <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activePage === "tv-coverage" ? 'scale-x-100' : ''}`}></span>
                </Link>
            </li>
            <li className="group">
                <Link href={`${basePath}reports-and-disclosures`} className="relative">
                    <span>Reports & Disclosures</span>
                    <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activePage === "reports-and-disclosures" ? 'scale-x-100' : ''}`}></span>
                </Link>
            </li>
            <li className="group">
                <Link href={`${basePath}rankings`} className="relative">
                    <span>Rankings</span>
                    <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activePage === "rankings" ? 'scale-x-100' : ''}`}></span>
                </Link>
            </li>
        </ul>
    )
}