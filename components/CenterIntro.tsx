import parser from 'html-react-parser';
import nl2br from 'nl2br';

interface IntroProps {
    introTitle?: string;
    introCaption?: string;
    introDescription?: string;
}

export default function CenterIntro({introTitle, introCaption, introDescription} : IntroProps) {
    return (
        <>
        <div className="flex flex-col gap-3 justify-center items-center text-center lg:px-10">
        {
            introTitle && (
                <h3 className="text-burgundy text-xl lg:text-3xl">{parser(nl2br(introTitle))}</h3>
            )
        }
        {
            introCaption && (
                <p className="font-georgia text-2xl lg:text-4xl leading-snug">{parser(nl2br(introCaption))}</p>
            )
        }
        {
            introDescription && (
                <p className="text-[#4E4E4E]  leading-loose px-5">{parser(nl2br(introDescription))}</p>
            )
        }
        </div>
        </>
    )
}