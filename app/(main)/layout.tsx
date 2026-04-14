import "./globals.css";

import { HeaderProvider } from '@/context/HeaderContext'

import { getTicker, getCommonPrograms } from "@/lib/common";

import Header from '@/components/Header'
import Footer from "@/components/Footer";

const [
  ticker,
  common_programs
] = await Promise.all([
  getTicker(),
  getCommonPrograms()
]);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderProvider>
          <Header ticker_api={ticker} />
          {children}
        </HeaderProvider>
        <Footer common_programs={common_programs} />
      </body>
    </html>
  );
}
