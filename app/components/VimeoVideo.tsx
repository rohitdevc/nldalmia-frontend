import { IoCloseCircleOutline } from "react-icons/io5";
import { useState, forwardRef, useImperativeHandle } from "react";

export type VimeoVideoPopupHandle = {
    open: (vimeoId: string) => void;
};

const VimeoVideoPopUp = forwardRef<VimeoVideoPopupHandle>((_, ref) => {
    const [activePopUp, updateActivePopUp] = useState(false);
    const [VimeoVideoId, setVimeoVideoId] = useState<string | null>(null);
    
    useImperativeHandle(ref, () => ({
        open: (id: string) => {
            setVimeoVideoId(id);
            updateActivePopUp(true);
        },
    }));
    
    if (!activePopUp || !VimeoVideoId) return null;

    return (
        <div className={`fixed top-0 left-0 w-full h-screen z-10 flex justify-center items-center bg-black/75 transform origin-center transition-transform duration-300 ${activePopUp ? 'scale-y-100' : 'scale-y-0'}`}>
            <IoCloseCircleOutline className="absolute top-1/4 lg:top-5 right-5 cursor-pointer text-white" size={45} onClick={() => updateActivePopUp(false)} />        
            <iframe src={`https://player.vimeo.com/video/${VimeoVideoId}?autoplay=1&title=0&byline=0&portrait=0`} className="w-[90%] max-w-4xl aspect-video" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        </div>
    )
})

export default VimeoVideoPopUp;