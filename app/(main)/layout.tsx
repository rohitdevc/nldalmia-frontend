import "./globals.css";

import { HeaderProvider } from '@/context/HeaderContext'

import { getTicker, getCommonPrograms } from "@/lib/common";

import Header from '@/components/Header'
import Footer from "@/components/Footer";

const program_categories = ['Programs', 'Executive Education'];

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
          <Header
          common_programs={common_programs}
          program_categories={program_categories}
          ticker_api={ticker} />
          {children}
        </HeaderProvider>
        <Footer
        program_categories={program_categories}
        common_programs={common_programs}
        />
      </body>
    </html>
  );
}
