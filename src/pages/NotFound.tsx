import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MainLayout } from "@/components/layout/MainLayout";
import { Home } from "lucide-react";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <section className="section-padding min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
            {t("notFound.title")}
          </h1>
          <h2 className="heading-section text-foreground mb-4">
            {t("notFound.subtitle")}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            {t("notFound.description")}
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            {t("notFound.backHome")}
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFound;
