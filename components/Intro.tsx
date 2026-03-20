import parser from 'html-react-parser';
import nl2br from 'nl2br';

interface IntroProps {
    introTitle?: string;
    introCaption?: string;
    introDescription?: string;
}

export default function Intro({introTitle, introCaption, introDescription} : IntroProps) {
    return (
        <>
        <div className="w-full flex flex-col gap-5">
        {
            introTitle && (
                <h3 className="text-burgundy text-xl md:text-2xl">{parser(nl2br(introTitle))}</h3>
            )
        }
        {
            introCaption && (
                <p className="text-2xl md:text-4xl font-georgia w-full lg:w-4xl">{parser(nl2br(introCaption))}</p>
            )
        }
        {
            introDescription && (
                <p className="text-[#4E4E4E]  leading-loose w-full lg:w-4xl">{parser(nl2br(introDescription))}</p>
            )
        }
        </div>
        </>
    )
}