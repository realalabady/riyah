import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLanguage } from "@/hooks/useLanguage";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
