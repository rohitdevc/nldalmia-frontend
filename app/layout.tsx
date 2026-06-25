import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

  const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${basePath}#website`,
          "url": `${basePath}`,
          "name": "N. L. Dalmia Institute of Management",
          "description": "",
          "publisher": {
            "@id": `${basePath}#organization`
          },
          "inLanguage": "en-US"
        }, {
          "@type": "Organization",
          "@id": "${basePath}#organization",
          "name": "N. L. Dalmia Institute of Management",
          "url": "${basePath}",
          "logo": {
            "@type": "ImageObject",
            "inLanguage": "en-US",
            "@id": `${basePath}#/schema/logo/image/`,
            "url": `${basePath}assets/images/logo.png`,
            "contentUrl": `${basePath}assets/images/logo.png`,
            "width": 679,
            "height": 177,
            "caption": "N. L. Dalmia Institute of Management"
          },
          "image": {
            "@id": `${basePath}#/schema/logo/image/`
          },
          "sameAs": ["https://www.facebook.com/NLDalmiaOfficial/", "https://x.com/nldalmia_inst", "https://www.instagram.com/nldalmiainstitute/", "https://www.linkedin.com/school/n-l-dalmia-institute-of-management-studies-and-research/", "https://www.youtube.com/channel/UC0AhxJDrG7PwuEagTTqfIAw"]
        }
      ]
  }

  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <head>
        <Script
          id="default-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
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