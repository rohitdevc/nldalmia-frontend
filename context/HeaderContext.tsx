'use client'
import { createContext, useContext, useState, RefObject } from 'react'

type HeaderProps = {
    onDownloadBrochureClick?: () => void;
    admissionPage?: boolean;
    programPage?: boolean;
    alumniPage?: boolean;
    alumniPortal?: string;
    alumniAssociation?: string;
    placement_latest_brochure?: object;
    placementsPage?: boolean;
    eventRegistrationURL?: string;
    showLoader?: boolean
    programApplicationLink?: string;
    programEligibilityFees?: string;
    programBrochureAvailable?: boolean;
    MDPPage?: boolean;
    MDPProgramsScrollref?: RefObject<HTMLDivElement | null>;
}

const HeaderContext = createContext<any>(null)

export function HeaderProvider({ children }: { children: React.ReactNode }) {
    const [headerProps, setHeaderProps ] = useState<HeaderProps>({})
    
    return (
        <HeaderContext.Provider value={{ headerProps, setHeaderProps  }}>
            {children}
        </HeaderContext.Provider>
    )
}

export function useHeader() {
    return useContext(HeaderContext)
}