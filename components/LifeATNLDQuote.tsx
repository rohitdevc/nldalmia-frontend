import { FounderQuote } from "@/types/api"

type Props = {
    founder_quote: FounderQuote
}

import nl2br from "nl2br";
import parser from 'html-react-parser';

export default function LifeATNLDQuote({founder_quote}: Props) {
    return (
        <div className="bg-[#800000] text-white flex flex-col gap-5 p-5 sm:p-7">
            {
            founder_quote.founder_quote_title && (
                <h2 className="font-georgia text-2xl lg:text-3xl leading-relaxed">{parser(nl2br(founder_quote.founder_quote_title))}</h2>
            )
            }
            {
            founder_quote.founder_bio && (
                <p className="leading-relaxed lg:leading-loose text-sm">{parser(nl2br(founder_quote.founder_bio))}</p>
            )
            }
            <div className="flex flex-col gap-3 mt-auto">
            <h3 className="text-xl">{founder_quote.founder_quote}</h3>
            <p className="leading-loose text-sm">{founder_quote.founder_name}</p>
            </div>
        </div>
    )
}