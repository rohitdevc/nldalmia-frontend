import "../globals.css";
import renderMainLayout from "@/components/layouts/MainLayoutContent";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return renderMainLayout(children);
}