import parser from 'html-react-parser';

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
                <h3 className="text-burgundy text-xl md:text-2xl">{introTitle}</h3>
            )
        }
        {
            introCaption && (
                <p className="text-2xl md:text-4xl font-georgia w-full lg:w-3xl">{parser(introCaption)}</p>
            )
        }
        {
            introDescription && (
                <p className="text-[#4E4E4E] text-md leading-loose">{parser(introDescription)}</p>
            )
        }
        </div>
        </>
    )
}