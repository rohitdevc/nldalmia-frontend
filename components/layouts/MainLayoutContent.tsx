import { HeaderProvider } from "@/context/HeaderContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const program_categories = ["Programs", "Executive Education"];

export default function MainLayoutContent({
  children,
  ticker,
  commonPrograms,
}: {
  children: React.ReactNode;
  ticker: any;
  commonPrograms: any;
}) {
  return (
    <>
      <HeaderProvider>
        <Header
          common_programs={commonPrograms}
          program_categories={program_categories}
          ticker_api={ticker}
        />
        {children}
      </HeaderProvider>

      <Footer
        program_categories={program_categories}
        common_programs={commonPrograms}
      />
    </>
  );
}