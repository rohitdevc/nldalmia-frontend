"use client";

import { useHeader } from "@/context/HeaderContext";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function PrivacyPolicyComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { setHeaderProps } = useHeader();

  useEffect(() => {
    setHeaderProps({});

    const handleMessage = (event: MessageEvent) => {
      if (event?.data?.type === "SCROLL_PARENT_TO_TOP") {
        iframeRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setHeaderProps]);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/iframeresizer@3.6.5/js/iframeResizer.min.js" strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).iFrameResize) {
            (window as any).iFrameResize(
              {
                enablePublicMethods: true,
                heightCalculationMethod: "lowestElement",
              },
              iframeRef.current
            );
          }
        }}
      />

      <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
        <iframe ref={iframeRef} id="Univiser" src="https://nldalmia.univiser.io" className="w-full border-0 min-h-screen" />
      </main>
    </>
  );
}