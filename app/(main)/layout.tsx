import "../globals.css";
import MainLayoutContent from "@/components/layouts/MainLayoutContent";
import { getTicker, getCommonPrograms } from "@/lib/common";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ticker, commonPrograms] = await Promise.all([
    getTicker(),
    getCommonPrograms(),
  ]);

  return (
    <MainLayoutContent
      ticker={ticker}
      commonPrograms={commonPrograms}
    >
      {children}
    </MainLayoutContent>
  );
}