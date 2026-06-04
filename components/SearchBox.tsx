import { useMemo, useState } from "react";

import { CiSearch } from "react-icons/ci";

type SearchBoxProps = {
    searchValue: string
    setSearchValue: (v: string) => void;
    updateShowSearchResults: (v: boolean) => void;
}

export default function SearchBox({
    searchValue, setSearchValue, updateShowSearchResults
}: SearchBoxProps) {
    return (
        <div className="relative" title="Search">
            <input type="search" placeholder="Search" className={`peer pr-3 py-2 focus:outline-none w-full focus:text-left placeholder:text-right peer-placeholder-shown:text-right peer-not-placeholder-shown:text-left`} value={searchValue} onChange={(e) => { updateShowSearchResults(true); setSearchValue(e.target.value)}} />
            <CiSearch className="absolute right-18 top-1/2 -translate-y-1/2 text-gray-500 peer-not-placeholder-shown:hidden" size={18} />
        </div>
    )
}