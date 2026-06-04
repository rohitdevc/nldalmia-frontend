import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="npf_chatbots hidden" data-w="390b5216609c46d1ab1ec9ed9fb317f1"></div>
        {children}
        <Script id="chatbot-script" strategy="afterInteractive" src="https://chatbot.in5.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/560363a2a8bd8c8c0/390b5216609c46d1ab1ec9ed9fb317f1"
        />
      </body>
    </html>
  );
}