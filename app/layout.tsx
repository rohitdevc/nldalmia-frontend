import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5PCPV98');
          `}
        </Script>
        <Script id="chatbot-script" strategy="afterInteractive" src="https://chatbot.in5.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/560363a2a8bd8c8c0/390b5216609c46d1ab1ec9ed9fb317f1" />
      </head>
      <body>
        <div className="npf_chatbots" data-w="390b5216609c46d1ab1ec9ed9fb317f1"></div>
        {children}
      </body>
    </html>
  );
}